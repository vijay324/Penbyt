// store/store.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaSort } from "react-icons/fa";
import { RiFilter3Line } from "react-icons/ri";
import cardsData from "@/public/Data/store/cards.json";
import { CardData } from "@/types/card";
import Image from "next/image";

const PRODUCTS_PER_PAGE = 8;

const StorePage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("trending");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CardData[]>([]);

  useEffect(() => {
    setProducts(cardsData);
    setIsLoading(false);
  }, []);

  const filteredProducts = products
    .filter((product) => {
      if (filter === "all") return true;
      if (filter === "free") return product.price === 0;
      if (filter === "paid") return product.price > 0;
      if (filter === "courses") return product.tags.includes("course");
      if (filter === "bundles") return product.tags.includes("bundle");
      return true;
    })
    .filter((product) => {
      return (
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "trending") return b.rating - a.rating;
    if (sort === "best-seller") return b.sales - a.sales;
    if (sort === "top-rated") return b.rating - a.rating;
    if (sort === "price-high-low") return b.price - a.price;
    if (sort === "price-low-high") return a.price - b.price;
    return 0;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleProductClick = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="bg-white dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-black dark:text-white">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-zinc-400 dark:text-zinc-300" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="block w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-xl bg-white text-zinc-900 dark:bg-black dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <div className="relative">
              <button
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-zinc-300 rounded-xl dark:bg-zinc-900 dark:border-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                onClick={() =>
                  setFilter((prev) =>
                    prev === "all"
                      ? "free"
                      : prev === "free"
                      ? "paid"
                      : prev === "paid"
                      ? "courses"
                      : prev === "courses"
                      ? "bundles"
                      : "all"
                  )
                }
              >
                <RiFilter3Line className="h-5 w-5 text-zinc-400 dark:text-zinc-300" />
                <span>{filter === "all" ? "Filter" : filter}</span>
              </button>
            </div>
            <div className="relative">
              <button
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-zinc-300 rounded-xl dark:bg-zinc-900 dark:border-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                onClick={() =>
                  setSort((prev) =>
                    prev === "trending"
                      ? "best-seller"
                      : prev === "best-seller"
                      ? "top-rated"
                      : prev === "top-rated"
                      ? "price-high-low"
                      : prev === "price-high-low"
                      ? "price-low-high"
                      : "trending"
                  )
                }
              >
                <FaSort className="h-5 w-5 text-zinc-400 dark:text-zinc-300" />
                <span>{sort.replace("-", " ")}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl animate-pulse dark:bg-zinc-800"
                >
                  <div className="h-40 bg-zinc-200 rounded-t-lg dark:bg-zinc-700" />
                  <div className="p-4 space-y-4">
                    <div className="h-4 bg-zinc-200 rounded dark:bg-zinc-700" />
                    <div className="h-4 bg-zinc-200 rounded dark:bg-zinc-700" />
                    <div className="h-4 bg-zinc-200 rounded dark:bg-zinc-700" />
                    <div className="h-8 bg-zinc-200 rounded dark:bg-zinc-700" />
                  </div>
                </div>
              ))
            : paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-2xl cursor-pointer dark:bg-zinc-900 dark:text-white"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 w-full object-cover rounded-t-2xl"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-medium">{product.title}</h3>
                    <p className="text-zinc-500 line-clamp-2 dark:text-zinc-400">
                      {product.description}
                    </p>
                    <div className="flex items-center">
                      <span className="text-yellow-500 font-extrabold mr-2">
                        {product.rating}
                      </span>
                      <span className="text-zinc-500 text-sm dark:text-zinc-400">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-red-500 line-through text-lg">
                        {product.oldPrice}
                      </span>
                      <span className="text-fuchsia-500 font-bold text-3xl dark:text-fuchsia-400">
                        ₹{product.price}
                      </span>
                      <button className="px-4 py-2 bg-purple-200 text-white rounded-xl hover:bg-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 dark:bg-fuchsia-200 dark:hover:bg-fuchsia-500">
                        <Image
                          src="/cart.svg"
                          width={20}
                          height={20}
                          alt="Twitter"
                          className="dark:brightness-0 dark:contrast-200"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* <div className="flex justify-center mt-8">
          <button
            className="border px-4 py-2 mx-1 rounded-xl disabled:opacity-50 dark:bg-black dark:border-zinc-700 dark:text-white"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`border px-4 py-2 mx-1 rounded-xl ${
                currentPage === index + 1
                  ? "bg-purple-400 text-white"
                  : "dark:bg-black dark:border-zinc-700 dark:text-white"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="border px-4 py-2 mx-1 rounded-xl disabled:opacity-50 dark:bg-black dark:border-zinc-700 dark:text-white"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default StorePage;
