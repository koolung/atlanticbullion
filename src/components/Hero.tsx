export function Hero() {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center text-white relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/hero/bg.png)' }}
    >
      {/* Gradient overlay - 40% opacity top to 100% opacity bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-red-600">
            Atlantic Bullion
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-black max-w-4xl">
            Nova Scotia's trusted precious metals dealer specializing in gold and silver bullion trading. 
            Serving the Maritime provinces with expert knowledge and competitive prices.
          </p>
          <div className="space-x-4 mb-6">
            <a
              href="#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="inline-block border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}