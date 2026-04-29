import React from "react";

export default function ProductImages({ product }) {
  return (
    <div className="w-full">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-white rounded-2xl flex items-center justify-center p-4 sm:p-8 mb-4 border border-gray-100 group relative">
        <img
          id="big_img"
          src={product.images[0]}
          alt={product.title}
          className="max-w-full max-h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4">
        {product.images.map((img, index) => (
          <div
            key={index}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-transparent hover:border-(--main_color) hover:shadow-md transition-all duration-300 p-1.5 bg-gray-50 cursor-pointer"
            onClick={() => (document.getElementById("big_img").src = img)}
          >
            <img
              src={img}
              alt={`${product.title} thumbnail ${index + 1}`}
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
