import Link from 'next/link'
import { Footer } from '@/components/Footer'

export default function BullionTerms() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Glossary of Bullion Terms
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Understanding precious metals terminology is essential for successful bullion investing. 
              This comprehensive glossary will help Nova Scotia investors navigate the gold and silver markets with confidence.
            </p>
            <Link 
              href="/"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Common Terms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Bullion Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these fundamental terms to become a more informed precious metals investor
            </p>
          </div>

          {/* Key Terms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-yellow-600 mb-3">Bullion</h3>
              <p className="text-gray-700">
                General term used to describe bars and coins made of precious metals like gold, 
                silver, platinum and palladium. They are coveted for their investment quality 
                and meet international standards for weight and purity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-yellow-600 mb-3">Fineness</h3>
              <p className="text-gray-700">
                The purity of a precious metal measured in parts per thousand of an alloy. 
                For example, a Canadian Maple Leaf has a fineness of .9999, meaning it is 99.99% pure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-yellow-600 mb-3">Troy Ounce</h3>
              <p className="text-gray-700">
                The traditional unit of weight for precious metals. One troy ounce equals 31.1035 grams 
                and is the standard for pricing and trading bullion worldwide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-yellow-600 mb-3">Spot Price</h3>
              <p className="text-gray-700">
                The live price at which precious metals can be bought or sold for immediate delivery. 
                This is the baseline price before premiums and dealer fees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-yellow-600 mb-3">Premium</h3>
              <p className="text-gray-700">
                The additional cost above spot price for which bullion sells. It represents costs of 
                fabrication, distribution, and dealer fees. Smaller coins typically have higher premiums.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-yellow-600 mb-3">Hallmark</h3>
              <p className="text-gray-700">
                An official mark on precious metal surfaces showing purity, producer, and sometimes 
                serial numbers. Essential for verifying authenticity and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alphabetical Glossary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Complete A-Z Bullion Glossary
          </h2>

          {/* A Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2">A</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Allocated Storage</h4>
                <p className="text-gray-700">
                  Bullion products owned by an investor and stored in a professional vault under an arrangement. 
                  The products are allocated to a specific account and uniquely identified, providing direct ownership.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Ask Price (Offer Price)</h4>
                <p className="text-gray-700">
                  The price at which a dealer is willing to sell a particular precious metal. 
                  This is typically higher than the bid price, with the difference being the dealer's spread.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Assay</h4>
                <p className="text-gray-700">
                  The testing of gold or silver to determine its fineness or purity. 
                  Professional assays provide certification of metal content and quality.
                </p>
              </div>
            </div>
          </div>

          {/* B Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2">B</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Backwardation</h4>
                <p className="text-gray-700">
                  A market condition where the spot price for a commodity is higher than the futures price. 
                  This historically occurs in markets with supply shortages.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Bear Market</h4>
                <p className="text-gray-700">
                  A market condition where prices are expected to decline in the near future. 
                  This historically occurs during economic recessions.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Bid Price</h4>
                <p className="text-gray-700">
                  The price at which a dealer is willing to buy a particular precious metal. 
                  This is typically lower than the ask price.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Bullion Coins</h4>
                <p className="text-gray-700">
                  Contemporary precious metal coins minted by official agencies for investment purposes. 
                  Legal tender coins whose market price depends on metal content rather than rarity.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Bull Market</h4>
                <p className="text-gray-700">
                  A market condition where prices are expected to rise in the near future. 
                  This historically occurs during economic recovery periods.
                </p>
              </div>
            </div>
          </div>

          {/* C Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2">C</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Commodity</h4>
                <p className="text-gray-700">
                  A physical product which is commonly traded and holds value based on industrial and commercial use. 
                  The raw precious metals (not the finished coins/bars) are considered commodities.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Contango</h4>
                <p className="text-gray-700">
                  A market condition where the spot price is lower than the futures price. 
                  The opposite of backwardation, indicating normal market conditions.
                </p>
              </div>
            </div>
          </div>

          {/* D Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2">D</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Divisibility</h4>
                <p className="text-gray-700">
                  How easy it is to piece out and distribute a fixed weight of precious metal. 
                  Smaller denominations offer better divisibility for transactions.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Doré Bar</h4>
                <p className="text-gray-700">
                  A bar composed of impure precious metal alloy, typically produced at mines 
                  and sent to refineries for further purification.
                </p>
              </div>
            </div>
          </div>

          {/* F Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2">F</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Fiat Money</h4>
                <p className="text-gray-700">
                  Paper money used as legal tender though not backed by gold or silver. 
                  Most modern currencies are fiat money.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Fine Gold</h4>
                <p className="text-gray-700">
                  Pure gold rated as 24 karats or .999 fine gold, representing the highest purity available.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Fine Silver</h4>
                <p className="text-gray-700">
                  Pure silver with .999 fineness or higher, representing investment-grade silver purity.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Fine Weight</h4>
                <p className="text-gray-700">
                  The weight of precious metal contained in a bar or coin, calculated by multiplying 
                  gross weight by fineness percentage.
                </p>
              </div>
            </div>
          </div>

          {/* L Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2">L</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">LBMA</h4>
                <p className="text-gray-700">
                  The London Bullion Market Association, incorporated in 1987 to represent 
                  participants in the wholesale bullion market and set international standards.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Liquidity</h4>
                <p className="text-gray-700">
                  The ease of buying and selling a particular asset. Precious metals generally 
                  offer good liquidity in global markets.
                </p>
              </div>
            </div>
          </div>

          {/* M Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2">M</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Market Value</h4>
                <p className="text-gray-700">
                  The current price at which an item trades in the marketplace, 
                  determined by supply and demand dynamics.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Melt Value</h4>
                <p className="text-gray-700">
                  The value of precious metal that could be extracted if a coin or bar were melted down, 
                  based on current spot prices and metal content.
                </p>
              </div>
            </div>
          </div>

          {/* S Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2">S</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Scrap Gold</h4>
                <p className="text-gray-700">
                  Any gold sent back to a refiner or processor for recycling, 
                  including old jewelry, dental gold, and electronic components.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Spread</h4>
                <p className="text-gray-700">
                  The difference between the buying (bid) price and selling (ask) price of precious metals. 
                  This represents the dealer's profit margin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Precious Metals Journey?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Now that you understand the terminology, contact Atlantic Bullion to begin building 
            your gold and silver portfolio in Nova Scotia.
          </p>
          <div className="space-x-4">
            <Link 
              href="/#contact"
              className="inline-block bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </Link>
            <Link 
              href="/"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}