import Image from 'next/image'

export function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most sought-after gold and silver bullion products in Nova Scotia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 h-48 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <Image
                src="/images/products/canadagold.jpg"
                alt="Canadian Gold Maple Leafs"
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Canadian Gold Maple Leafs</h3>
            <p className="text-gray-600">Canada's iconic .9999 pure gold coins, available in various sizes</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <Image
                src="/images/products/canadasilver.jpg"
                alt="Canadian Silver Maple Leafs"
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Canadian Silver Maple Leafs</h3>
            <p className="text-gray-600">Premium .9999 pure silver coins, perfect for Canadian investors</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 h-48 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <Image
                src="/images/products/gold.jpg"
                alt="Gold Bars"
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Gold Bars</h3>
            <p className="text-gray-600">Investment-grade gold bars from 1oz to 10oz sizes</p>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <Image
                src="/images/products/silver.jpg"
                alt="Silver Bars"
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Silver Bars</h3>
            <p className="text-gray-600">Stackable silver bars in multiple weights for serious investors</p>
          </div>
        </div>
      </div>
    </section>
  )
}