import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div className="relative aspect-square">
            <Image
              src="/shirt.png"
              alt="OnChain Store T-Shirt"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">OnChain Store T-Shirt</h1>
            <p className="text-2xl font-semibold text-gray-900 mb-6">$29.99</p>
            
            <div className="mb-6">
              <h2 className="text-sm font-medium text-gray-900 mb-2">Size</h2>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 border border-gray-300 rounded-md hover:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-gray-600 mb-8">
              Premium quality t-shirt made with 100% organic cotton. Perfect for everyday wear and designed to last.
            </p>

            <button className="w-full bg-black text-white py-4 px-6 rounded-md hover:bg-gray-900 transition-colors duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
