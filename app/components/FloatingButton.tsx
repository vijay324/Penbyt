import React from "react";
import Link from "next/link";

const FloatingButton = () => {
  return (
    <Link
      href="https://chat.penbyt.com"
      target="_blank"
      className="fixed bottom-4 right-4 group"
    >
      <button
        className="p-4 rounded-full overflow-hidden relative w-12 h-12 transition-all duration-300 ease-in-out group-hover:w-32"
        aria-label="Help"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-700 to-pink-600" />

        {/* Icon - shown by default, hidden on hover */}
        <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
          <img
            src="/Ai.svg"
            alt="Icon"
            width={5}
            height={5}
            className="w-8 h-8 invert"
          />
        </div>

        {/* Text - hidden by default, shown on hover */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-semibold text-lg whitespace-nowrap">
            PenGPT ↗️
          </span>
        </div>
      </button>
    </Link>
  );
};

export default FloatingButton;
