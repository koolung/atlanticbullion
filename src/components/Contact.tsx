'use client'

import { useState, useRef, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdIl_4rAAAAAN8eDkFcmOHilqZTDxDI1OkrGVb4'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    product: '',
    preferredDate: '',
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error')
      setStatusMessage('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await recaptchaRef.current?.executeAsync()
      recaptchaRef.current?.reset()

      if (!recaptchaToken) {
        throw new Error('reCAPTCHA verification failed')
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage('Message sent successfully! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '', product: '', preferredDate: '', location: '' })
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setStatusMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Clear status message after 5 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Atlantic Bullion
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start investing in gold and silver? Get in touch with Nova Scotia's trusted bullion dealers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-red-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@atlanticbullion.ca</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-red-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Serving Nova Scotia & Maritime Provinces</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-red-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call for current pricing and availability</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-red-900 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">🍁 Local Nova Scotia Service</h4>
              <p className="text-gray-300 text-sm">
                We're proud to serve Halifax, Sydney, Truro, New Glasgow, and all Maritime communities 
                with personalized precious metals investment guidance.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                  >
                    <option value="">Select Product Interest</option>
                    <option value="Canadian Gold Maple Leafs">Canadian Gold Maple Leafs</option>
                    <option value="Canadian Silver Maple Leafs">Canadian Silver Maple Leafs</option>
                    <option value="Gold Bars">Gold Bars (1oz - 10oz)</option>
                    <option value="Silver Bars">Silver Bars (1oz - 100oz)</option>
                    <option value="American Gold Eagles">American Gold Eagles</option>
                    <option value="American Silver Eagles">American Silver Eagles</option>
                    <option value="Krugerrands">Krugerrands</option>
                    <option value="Junk Silver">Junk Silver Coins</option>
                    <option value="Portfolio Consultation">Portfolio Consultation</option>
                    <option value="Other">Other Products</option>
                  </select>
                </div>
                <div>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    placeholder="Preferred Purchase Date"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your Location (e.g., Halifax, Dartmouth, Truro)"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your Message *"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400 resize-none"
                />
              </div>
              
              <p className="text-sm text-gray-400">
                * Required fields. Product, date, and location are optional but help us provide better service.
              </p>
              
              {/* Hidden reCAPTCHA v3 */}
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                size="invisible"
                theme="dark"
              />
              
              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <div className={`p-3 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-900 border border-green-700 text-green-200' 
                    : 'bg-red-900 border border-red-700 text-red-200'
                }`}>
                  {statusMessage}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                    : 'bg-red-600 hover:bg-red-700 text-white hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
            
            <p className="text-xs text-gray-400 mt-4">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}