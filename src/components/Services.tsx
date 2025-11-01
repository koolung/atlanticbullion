import Image from 'next/image'

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized gold and silver bullion services for Nova Scotia investors
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass rounded-xl shadow-2xl hover:shadow-3xl hover:bg-white/20 transition-all duration-300 overflow-hidden flex flex-col">
            <div className="h-1/4 relative">
              <Image
                src="/images/products/gold.jpg"
                alt="Gold Bullion"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex-1">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Gold Bullion Trading</h3>
              </div>
              <p className="text-gray-600 mb-6">Buy and sell gold coins, bars, and bullion with competitive Maritime pricing and expert guidance.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Canadian Gold Maple Leafs</li>
                <li>• Gold bars (1oz to 10oz)</li>
                <li>• American Gold Eagles</li>
                <li>• Krugerrands and other popular coins</li>
                <li>• Portfolio consultation</li>
                <li>• Market timing advice</li>
              </ul>
            </div>
          </div>
          
          <div className="glass rounded-xl shadow-2xl hover:shadow-3xl hover:bg-white/20 transition-all duration-300 overflow-hidden flex flex-col">
            <div className="h-1/4 relative">
              <Image
                src="/images/products/silver.jpg"
                alt="Silver Bullion"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex-1">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Silver Bullion Investment</h3>
              </div>
              <p className="text-gray-600 mb-6">Premium silver products for Nova Scotia collectors and investors with local pickup options.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Canadian Silver Maple Leafs</li>
                <li>• Silver bars (1oz to 100oz)</li>
                <li>• American Silver Eagles</li>
                <li>• Junk silver coins</li>
                <li>• Bulk silver purchasing</li>
                <li>• Storage solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}