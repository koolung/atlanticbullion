# Contact Form Setup - Atlantic Bullion

## Features Implemented

### 📧 **Email Functionality**
- **Nodemailer Integration**: Uses Hostinger SMTP settings
- **Professional Email Templates**: HTML and plain text versions
- **Environment Variables**: Secure credential management
- **Error Handling**: Comprehensive error catching and user feedback
- **Enhanced Data Collection**: Product interest, preferred date, and location

### 🛡️ **Security**
- **Google reCAPTCHA v3**: Invisible spam protection
- **Score-based Filtering**: Minimum score of 0.5 for submissions
- **Input Validation**: Client and server-side validation
- **Environment Variables**: Sensitive data protection

### 🎨 **User Experience**
- **Real-time Feedback**: Success/error messages
- **Loading States**: Visual feedback during submission
- **Form Reset**: Clears form after successful submission
- **Responsive Design**: Works on all devices
- **Enhanced Form Fields**: Product selection, date picker, location input
- **Smart Layout**: Two-column grid for better organization

## Configuration

### Environment Variables (.env.local)
```env
# Google reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LdIl_4rAAAAAN8eDkFcmOHilqZTDxDI1OkrGVb4
RECAPTCHA_SECRET_KEY=6LdIl_4rAAAAAH1QEYCbawDKUSNKp0RhYxtTGz3s

# Email Configuration (Hostinger SMTP)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contact@atlanticbullion.ca
SMTP_PASS=U]=|ZCKr7
SMTP_FROM=contact@atlanticbullion.ca
SMTP_TO=contact@atlanticbullion.ca
```

### Hostinger SMTP Settings
- **Host**: smtp.hostinger.com
- **Port**: 465 (SSL)
- **Security**: SSL/TLS
- **Username**: contact@atlanticbullion.ca
- **Password**: U]=|ZCKr7

### Google reCAPTCHA v3 Keys
- **Site Key**: 6LdIl_4rAAAAAN8eDkFcmOHilqZTDxDI1OkrGVb4
- **Secret Key**: 6LdIl_4rAAAAAH1QEYCbawDKUSNKp0RhYxtTGz3s

## API Endpoints

### POST /api/send-email
Handles contact form submissions with reCAPTCHA verification.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Hello, I'm interested in gold bullion...",
  "product": "Canadian Gold Maple Leafs",
  "preferredDate": "2025-12-01",
  "location": "Halifax, NS",
  "recaptchaToken": "reCAPTCHA_response_token"
}
```

**Response:**
```json
{
  "message": "Email sent successfully!",
  "recaptchaScore": 0.9
}
```

## Components

### Contact.tsx
- Enhanced form with 6 fields (name*, email*, message*, product, preferredDate, location)
- Product selection dropdown with all Atlantic Bullion offerings
- Date picker for preferred purchase timing
- Location field for Nova Scotia service areas
- Form handling with React hooks
- reCAPTCHA v3 integration
- Real-time validation and feedback
- Responsive two-column layout
- Smart required field indicators

### Layout Integration
- reCAPTCHA script loading
- Environment variable configuration

## Security Features

1. **reCAPTCHA v3 Protection**
   - Invisible verification
   - Score-based filtering (minimum 0.5)
   - Bot detection and prevention

2. **Input Sanitization**
   - Required field validation
   - Email format validation
   - XSS prevention

3. **Environment Security**
   - Sensitive data in .env.local
   - Excluded from version control
   - Server-side credential management

## Testing

### Manual Testing Steps
1. Fill out the contact form
2. Submit with valid information
3. Check for success message
4. Verify email receipt at contact@atlanticbullion.ca
5. Test with invalid/empty fields
6. Verify reCAPTCHA protection

### Email Template Features
- Atlantic Bullion branding
- Professional HTML layout
- Contact information display
- reCAPTCHA score reporting
- Atlantic time zone timestamps

## Troubleshooting

### Common Issues
1. **reCAPTCHA Errors**: Check site/secret keys
2. **SMTP Issues**: Verify Hostinger credentials
3. **Environment Variables**: Ensure .env.local is properly configured
4. **Build Errors**: Check all dependencies are installed

### Dependencies
```json
{
  "nodemailer": "^6.9.7",
  "@types/nodemailer": "^6.4.14",
  "react-google-recaptcha": "^3.1.0",
  "@types/react-google-recaptcha": "^2.1.8"
}
```

## Production Deployment

1. Set environment variables on your hosting platform
2. Ensure reCAPTCHA domain is properly configured
3. Test email functionality in production
4. Monitor for spam/abuse

---

**Status**: ✅ Fully functional contact form with email and reCAPTCHA protection
**Last Updated**: November 1, 2025