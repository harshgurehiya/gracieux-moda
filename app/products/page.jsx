"use client";

import React from "react";
import Image from "next/legacy/image";
import productsData from "./products.json"; // Adjust the path if needed

const ProductSection = () => {
  return (
    <section className="my-12 mx-10">
      <h2 className="text-2xl font-bold mb-6">
        Check Out Our <span className="text-red-500">Products</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.imageUrl}
                alt={`Product ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0} // Set priority for the first image (or adjust as needed)
              />
            </div>
            <div className="p-4">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600"
              >
                Shop at Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
