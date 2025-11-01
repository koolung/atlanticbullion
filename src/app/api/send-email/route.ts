import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '6LdIl_4rAAAAAH1QEYCbawDKUSNKp0RhYxtTGz3s'

export async function POST(request: NextRequest) {
  console.log('API route called')
  try {
    const body = await request.json()
    console.log('Request body received:', { name: body.name, email: body.email, hasMessage: !!body.message, hasToken: !!body.recaptchaToken })
    const { name, email, message, product, preferredDate, location, recaptchaToken } = body

    // Validate required fields
    if (!name || !email || !message || !recaptchaToken) {
      console.log('Validation failed - missing fields')
      return NextResponse.json(
        { error: 'All fields are required, including reCAPTCHA verification' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA
    console.log('Verifying reCAPTCHA...')
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    const recaptchaData = await recaptchaResponse.json()
    console.log('reCAPTCHA response:', recaptchaData)
    
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.error('reCAPTCHA verification failed:', recaptchaData)
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      )
    }

    // Create Nodemailer transporter for Hostinger
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'contact@atlanticbullion.ca',
        pass: process.env.SMTP_PASS || 'U]=|ZCKr7',
      },
      tls: {
        rejectUnauthorized: false // Accept self-signed certificates
      },
      debug: true, // Enable debug output
      logger: true // Log to console
    })

    // Email content
    const subject = product 
      ? `New Inquiry: ${product} - ${name}`
      : `New Contact Form Submission from ${name}`

    const mailOptions = {
      from: process.env.SMTP_FROM || 'contact@atlanticbullion.ca',
      to: process.env.SMTP_TO || 'contact@atlanticbullion.ca',
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #dc2626, #991b1b); color: white; padding: 20px; text-align: center;">
            <h1>Atlantic Bullion - New Contact Message</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #333;">Contact Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>reCAPTCHA Score:</strong> ${recaptchaData.score}</p>
            
            <h2 style="color: #333; margin-top: 30px;">Purchase Details</h2>
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <p><strong>Product Interest:</strong> ${product || 'Not specified'}</p>
              <p><strong>Preferred Purchase Date:</strong> ${preferredDate || 'Not specified'}</p>
              <p><strong>Location:</strong> ${location || 'Not specified'}</p>
            </div>
            
            <h2 style="color: #333; margin-top: 30px;">Message</h2>
            <div style="background: white; padding: 15px; border-left: 4px solid #dc2626; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p>This email was sent from the Atlantic Bullion contact form.</p>
            <p>Time: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Halifax' })}</p>
          </div>
        </div>
      `,
      text: `
        New contact form submission from Atlantic Bullion website
        
        Contact Information:
        Name: ${name}
        Email: ${email}
        reCAPTCHA Score: ${recaptchaData.score}
        
        Purchase Details:
        Product Interest: ${product || 'Not specified'}
        Preferred Purchase Date: ${preferredDate || 'Not specified'}
        Location: ${location || 'Not specified'}
        
        Message:
        ${message}
        
        Time: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Halifax' })}
      `,
    }

    // Test SMTP connection first
    console.log('Testing SMTP connection...')
    try {
      await transporter.verify()
      console.log('SMTP connection verified')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable. Please try contacting us directly at contact@atlanticbullion.ca' },
        { status: 503 }
      )
    }

    // Send email
    console.log('Sending email...')
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')

    return NextResponse.json(
      { 
        message: 'Email sent successfully!',
        recaptchaScore: recaptchaData.score 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    
    // Provide specific error messages based on the error type
    let errorMessage = 'Failed to send email. Please try again later.'
    
    if (error instanceof Error) {
      if (error.message.includes('lookup failure') || error.message.includes('EENVELOPE')) {
        errorMessage = 'Email service is currently being configured. Please contact us directly at contact@atlanticbullion.ca or try again later.'
      } else if (error.message.includes('authentication') || error.message.includes('EAUTH')) {
        errorMessage = 'Email authentication error. Please contact us directly at contact@atlanticbullion.ca.'
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}