export function About() {
  return (
    <section id="about" className="pt-20 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Atlantic Bullion
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Proudly serving Nova Scotia and the Maritime provinces as your local precious metals specialists. 
            We focus exclusively on gold and silver bullion trading, providing Maritime residents with 
            competitive prices and personalized service.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From Halifax to Sydney, we're committed to helping Nova Scotians build wealth through 
            precious metals investing with the knowledge and trust that comes from local expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nova Scotia Local</h3>
            <p className="text-gray-600">Proudly serving the Maritime provinces with personalized, local service</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Gold & Silver Specialists</h3>
            <p className="text-gray-600">Focused expertise in gold and silver bullion trading and investment</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
            <p className="text-gray-600">Fair market prices and transparent fees for all transactions</p>
          </div>
        </div>
      </div>
    </section>
  )
}