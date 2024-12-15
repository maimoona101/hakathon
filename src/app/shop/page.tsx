import React from 'react';

export const metadata = {
  title: "Shop",
};

const Page = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="relative h-48 bg-gray-100 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/shop.jpg"
            alt="Shop Banner"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold z-10 text-blacke">Shop</h1>
      </header>

      {/* Filter and Sort Section */}
      <section className="bg-white shadow py-4 px-4 lg:px-16 flex flex-wrap justify-between items-center">
        <div className="mb-4 lg:mb-0">
          <button className="text-gray-700 border rounded px-4 py-2 mr-4 mb-2 lg:mb-0">
            Filter
          </button>
          <button className="text-gray-700 border rounded px-4 py-2 mb-2 lg:mb-0">
            View
          </button>
        </div>
        <div>
          <span className="text-gray-700">Sort by:</span>
          <select className="border rounded px-4 py-2 ml-2">
            <option value="default">Default</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Cards */}
          <div className="border rounded-lg p-4 text-center hover:shadow-lg transition">
            <img
              src="/s-2.png"
              alt="Trenton modular sofa"
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">Trenton modular sofa</h3>
            <p className="text-gray-600">Rs. 25,000.00</p>
          </div>
          <div className="border rounded-lg p-4 text-center hover:shadow-lg transition">
            <img
              src="/s-3.png"
              alt="Granite dining table"
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">Granite dining table</h3>
            <p className="text-gray-600">Rs. 25,000.00</p>
          </div>
          <div className="border rounded-lg p-4 text-center hover:shadow-lg transition">
            <img
              src="/s-4.png"
              alt="Outdoor bar table"
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">Outdoor bar table</h3>
            <p className="text-gray-600">Rs. 25,000.00</p>
          </div>
          <div className="border rounded-lg p-4 text-center hover:shadow-lg transition">
            <img
              src="/s-10.png"
              alt="Plain console table"
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">Plain console table</h3>
            <p className="text-gray-600">Rs. 25,000.00</p>
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="flex justify-center py-6">
        <button className="border rounded px-4 py-2 mx-1 hover:bg-gray-200 transition">
          1
        </button>
        <button className="border rounded px-4 py-2 mx-1 hover:bg-gray-200 transition">
          2
        </button>
        <button className="border rounded px-4 py-2 mx-1 hover:bg-gray-200 transition">
          3
        </button>
      </section>
    </div>
  );
};

export default Page;