"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import productsData from "@/public/Data/store/products.json";
import { ProductData } from "@/types/product";
import Trust from "./Trust";
import FAQAccordion from "./FAQItem";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      // Fetch data from the JSON file
      const foundProduct = productsData.find((p) => p.id === String(id));
      if (foundProduct) {
        setProduct(foundProduct as ProductData);
      } else {
        setProduct(null);
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      console.log(`Added ${quantity} of "${product.title}" to the cart.`);
    }
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-32 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Image Section */}
          <div className="relative bg-gradient-to-r from-purple-200 to-transparent rounded-3xl">
            {product.tag && (
              <div className="absolute top-0 left-0 p-2 bg-red-500 text-white text-xs font-bold shadow-2xl rounded-br-lg">
                {product.tag}
              </div>
            )}
            {product.discounted && (
              <div className="absolute top-10 left-0 p-2 bg-red-600 text-white text-xs font-bold shadow-2xl rounded-br-lg">
                -{product.discounted}%
              </div>
            )}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* Right Side: Course Details Section */}
          <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-3xl p-6">
            <h1 className="text-2xl font-semibold mb-2 dark:text-white">
              {product.title}
            </h1>
            <p className="text-gray-700 mb-4 dark:text-gray-400">
              {product.description}
            </p>
            <div className="flex items-center mb-2">
              <div className="flex items-center text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={`h-5 w-5 ${
                      index < Math.floor(product.rating)
                        ? "fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-500">{product.rating}</span>
              <span className="ml-2 text-gray-500">
                ({product.reviews} Reviews)
              </span>
            </div>
            <div className="flex items-center mb-4">
              {product.oldPrice && (
                <span className="text-red-500 line-through text-2xl mr-2">
                  {product.oldPrice}
                </span>
              )}
              <span className="text-purple-500 font-bold text-5xl">
                ₹ {product.price}
              </span>
            </div>

            <button className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-full w-full hover:bg-purple-600 focus:outline-none">
              <a
                href={product.link}
                className="dark:text-gray-300 text-white hover:text-gray-100 dark:hover:text-white"
              >
                BUY NOW
              </a>
            </button>
          </div>
        </div>

        {/* More Details Section */}
        {product.moredetails && (
          <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {product.moredetails.map((detail, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-semibold mb-2 dark:text-gray-200">
                  {detail.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-400">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        )}

        <FAQAccordion />
        <Trust />
      </div>
    </div>
  );
};

export default ProductPage;
