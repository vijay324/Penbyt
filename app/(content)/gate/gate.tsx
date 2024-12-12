"use client";

import { useState, useMemo } from "react";
import booksData from "../../../public/Data/books.json";

interface Book {
  bookname: string;
  category: string;
  author: string;
  dateofupload: string;
  url: string;
  img: string;
}

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(6); // Adjusted for more items per page
  const [sortOption, setSortOption] = useState<string>("name");
  const [filterOption, setFilterOption] = useState<string>("");
  const [categoryOption, setCategoryOption] = useState<string>("");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOption(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryOption(e.target.value);
  };

  const sortedBooks = useMemo(() => {
    const books = [...booksData] as Book[];
    if (sortOption === "name") {
      return books.sort((a, b) => a.bookname.localeCompare(b.bookname));
    }
    if (sortOption === "date") {
      return books.sort(
        (a, b) =>
          new Date(b.dateofupload).getTime() -
          new Date(a.dateofupload).getTime()
      );
    }
    return books;
  }, [sortOption]);

  const filteredBooks = useMemo(() => {
    return sortedBooks.filter(
      (book: Book) =>
        book.bookname.toLowerCase().includes(filterOption.toLowerCase()) &&
        (categoryOption === "" || book.category === categoryOption)
    );
  }, [filterOption, categoryOption, sortedBooks]);

  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-8 dark:bg-black">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by name"
          className="border p-2 flex-grow md:flex-grow-0 md:w-1/3 rounded-md dark:bg-black dark:border-gray-700 dark:text-white"
          value={filterOption}
          onChange={handleFilterChange}
        />
        <div className="flex flex-grow gap-2">
          <select
            onChange={handleCategoryChange}
            className="border p-2 flex-grow rounded-md dark:bg-black dark:border-gray-700 dark:text-white"
            value={categoryOption}
          >
            <option value="">All Categories</option>
            {Array.from(
              new Set(booksData.map((book: Book) => book.category))
            ).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            onChange={handleSortChange}
            className="border p-2 flex-grow rounded-md dark:bg-black dark:border-gray-700 dark:text-white"
            value={sortOption}
          >
            <option value="name">Sort by Name</option>
            <option value="date">Sort by Date</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBooks.map((book: Book, index: number) => (
          <div
            key={index}
            className="relative border rounded-lg overflow-hidden cursor-pointer group dark:border-gray-700"
            onClick={() => {
              const details = document.getElementById(`details-${index}`);
              if (details) {
                details.classList.toggle("opacity-0");
              }
            }}
          >
            <div className="w-full h-[450px] rounded-lg overflow-hidden">
              <img
                src={book.img}
                alt={book.bookname}
                className="w-full h-full object-cover object-center transition-opacity duration-300"
              />
            </div>
            <div
              id={`details-${index}`}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-semibold hover:underline"
              >
                {book.bookname}
              </a>
              <p className="text-white">{book.category}</p>
              <p className="text-white">{book.author}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="border px-4 py-2 mx-1 rounded-md disabled:opacity-50 dark:bg-black dark:border-gray-700 dark:text-white"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`border px-4 py-2 mx-1 rounded-lg ${
              currentPage === index + 1
                ? "bg-purple-400 text-white"
                : "dark:bg-black dark:border-gray-700 dark:text-white"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="border px-4 py-2 mx-1 rounded-md disabled:opacity-50 dark:bg-black dark:border-gray-700 dark:text-white"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
