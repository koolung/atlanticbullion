'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalType: string) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Atlantic Bullion</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Nova Scotia's trusted precious metals dealer specializing in gold and silver bullion trading. 
                Serving the Maritime provinces with expert knowledge and competitive prices.
              </p>
              <div className="text-gray-400 space-y-2">
                <p>📧 contact@atlanticbullion.ca</p>
                <p>📍 Serving Nova Scotia & Maritime Provinces</p>
                <p>📞 Call for current pricing and availability</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-red-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-red-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-gray-300 hover:text-red-400 transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/bullion-terms" className="text-gray-300 hover:text-red-400 transition-colors">
                    Bullion Terms
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal & Info</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => openModal('privacy')}
                    className="text-gray-300 hover:text-red-400 transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal('terms')}
                    className="text-gray-300 hover:text-red-400 transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal('disclaimer')}
                    className="text-gray-300 hover:text-red-400 transition-colors text-left"
                  >
                    Disclaimer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal('refund')}
                    className="text-gray-300 hover:text-red-400 transition-colors text-left"
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Atlantic Bullion. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Developed by{' '}
              <a 
                href="https://www.bedfordwebservices.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors font-medium"
              >
                BWS
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
        <div className="prose prose-gray max-w-none">
          <h3>Information We Collect</h3>
          <p>
            At Atlantic Bullion, we collect information you provide directly to us, such as when you contact us for quotes, 
            sign up for our newsletter, or engage our services. This may include:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Investment preferences and requirements</li>
            <li>Transaction history and payment information</li>
            <li>Communication preferences</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide precious metals investment services</li>
            <li>Process transactions and maintain accurate records</li>
            <li>Communicate with you about your investments and market updates</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Improve our services and customer experience</li>
          </ul>

          <h3>Information Sharing</h3>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information only:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and property</li>
            <li>With trusted service providers who assist in our operations</li>
          </ul>

          <h3>Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, 
            alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have questions about this Privacy Policy, please contact us at contact@atlanticbullion.ca.
          </p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms of Service">
        <div className="prose prose-gray max-w-none">
          <h3>Acceptance of Terms</h3>
          <p>
            By accessing and using Atlantic Bullion's services, you accept and agree to be bound by the terms and 
            provision of this agreement.
          </p>

          <h3>Services</h3>
          <p>
            Atlantic Bullion provides precious metals trading and investment services, including but not limited to:
          </p>
          <ul>
            <li>Gold and silver bullion sales and purchases</li>
            <li>Market analysis and investment guidance</li>
            <li>Secure storage solutions</li>
            <li>Portfolio management consultation</li>
          </ul>

          <h3>Investment Risks</h3>
          <p>
            Precious metals investing involves risk, including the potential loss of principal. Past performance does not 
            guarantee future results. Market values can fluctuate significantly.
          </p>

          <h3>Pricing and Payments</h3>
          <p>
            All prices are subject to market conditions and may change without notice. Payment terms will be specified 
            for each transaction. We reserve the right to verify payment before completing transactions.
          </p>

          <h3>Limitation of Liability</h3>
          <p>
            Atlantic Bullion shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
            arising from or related to your use of our services.
          </p>

          <h3>Governing Law</h3>
          <p>
            These terms shall be governed by the laws of Nova Scotia, Canada. Any disputes shall be resolved in the 
            courts of Nova Scotia.
          </p>

          <h3>Contact Information</h3>
          <p>
            For questions regarding these terms, contact us at contact@atlanticbullion.ca.
          </p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'disclaimer'} onClose={closeModal} title="Disclaimer">
        <div className="prose prose-gray max-w-none">
          <h3>Investment Disclaimer</h3>
          <p>
            The information provided by Atlantic Bullion is for educational and informational purposes only. 
            It should not be considered as investment advice or a recommendation to buy or sell precious metals.
          </p>

          <h3>Market Risks</h3>
          <p>
            Precious metals markets are volatile and can experience significant price fluctuations. The value of your 
            investment may go down as well as up. You may not get back the full amount you invested.
          </p>

          <h3>No Guarantee</h3>
          <p>
            We make no representations or warranties regarding the accuracy, completeness, or reliability of any 
            information provided. Past performance is not indicative of future results.
          </p>

          <h3>Professional Advice</h3>
          <p>
            Before making any investment decisions, you should consult with qualified financial advisors who can 
            assess your individual circumstances and risk tolerance.
          </p>

          <h3>Regulatory Compliance</h3>
          <p>
            Atlantic Bullion operates in accordance with applicable Canadian financial regulations. However, 
            regulatory environments may change, affecting our operations and your investments.
          </p>

          <h3>Third-Party Content</h3>
          <p>
            Any third-party content or links provided are for convenience only. We do not endorse or take 
            responsibility for the accuracy or completeness of such content.
          </p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'refund'} onClose={closeModal} title="Refund Policy">
        <div className="prose prose-gray max-w-none">
          <h3>General Policy</h3>
          <p>
            Due to the nature of precious metals trading and market volatility, all sales are generally final. 
            However, we strive to ensure customer satisfaction and will consider refunds under specific circumstances.
          </p>

          <h3>Eligible Refunds</h3>
          <p>Refunds may be considered in the following situations:</p>
          <ul>
            <li>Product defects or authenticity issues</li>
            <li>Shipping damage or loss</li>
            <li>Significant errors in product description</li>
            <li>Failure to deliver within agreed timeframe</li>
          </ul>

          <h3>Refund Process</h3>
          <p>To request a refund:</p>
          <ol>
            <li>Contact us within 48 hours of delivery</li>
            <li>Provide order details and reason for return</li>
            <li>Return products in original condition and packaging</li>
            <li>Allow 5-10 business days for inspection and processing</li>
          </ol>

          <h3>Market-Related Cancellations</h3>
          <p>
            Orders may be cancelled without penalty if market conditions change significantly between order placement 
            and fulfillment, subject to our assessment of fair market value.
          </p>

          <h3>Storage Services</h3>
          <p>
            Storage fees are non-refundable but may be prorated for early withdrawal of stored metals, 
            subject to minimum storage periods and terms.
          </p>

          <h3>Consultation Fees</h3>
          <p>
            Advisory and consultation services are non-refundable once rendered. However, we guarantee satisfaction 
            and will work to address any concerns.
          </p>

          <h3>Contact for Refunds</h3>
          <p>
            For refund requests or questions, contact us immediately at contact@atlanticbullion.ca with your 
            order details and specific concerns.
          </p>
        </div>
      </Modal>
    </>
  )
}