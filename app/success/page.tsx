import Link from 'next/link';

export default function Success() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank you for your purchase!</h1>
          <p className="text-gray-600 mb-8">
            Your order has been received and is being processed. You will receive a confirmation email shortly.
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white py-3 px-6 rounded-md hover:bg-gray-900 transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
} 