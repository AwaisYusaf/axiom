"use client";
import React, { useState } from "react";

type Props = {};

const images = [
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock2_1800x1800.jpg?v=1584466287",
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock3_1800x1800.jpg?v=1584466287",
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock1_1800x1800.jpg?v=1584466287",
];

function ProductDetails({}: Props) {
  const [selected, setSelected] = useState({
    type: "image",
    src: "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock2_1800x1800.jpg?v=1584466287",
  });
  const [size, setSize] = useState("S");

  return (
    <section className="flex flex-col lg:flex-row  lg:space-x-8 px-3 lg:px-12 py-20">
      <div className="basis-1/2 flex flex-row-reverse lg:flex-row px-3 space-x-4">
        <div className="flex flex-col lg:items-end items-start pl-4 lg:pl-0 space-y-4 basis-1/4">
          {images.map((image, i) => {
            return (
              <img
                key={i}
                src={image}
                alt=""
                onClick={() => setSelected({ type: "image", src: image })}
                className={`w-[100px] ${
                  selected.src == image ? "ring-2 ring-black" : ""
                }`}
              />
            );
          })}
        </div>
        <div className="basis-3/4">
          <img className="" src={selected.src} />
          {/* <video src="https://cdn.shopify.com/videos/c/vp/56c0401fb28f4b37ab3c5539342590e4/56c0401fb28f4b37ab3c5539342590e4.HD-720p-4.5Mbps.mp4" /> */}
        </div>
      </div>
      <div className="basis-1/2 flex flex-col space-y-4 mt-6 lg:mt-0 px-8 lg:px-0">
        <h3 className="text-3xl font-bold">Chambray Button Down</h3>
        <p className="text-xl tracking-[2px]">$68</p>
        <hr className="bg-gray-300" />
        <p className="text-lg uppercase font-semibold w-full">Size</p>
        <div className="flex space-x-4 flex-wrap">
          <button
            className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300 flex-grow-0 flex-shrink-0 ${
              size == "S" ? "ring-black ring-2" : "ring-1 ring-gray-300"
            }`}
            onClick={() => setSize("S")}
          >
            S
          </button>

          <button
            className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300  flex-grow-0 flex-shrink-0 ${
              size == "M" ? "ring-black ring-2" : "ring-1 ring-gray-300"
            }`}
            onClick={() => setSize("M")}
          >
            M
          </button>

          <button
            className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300 flex-grow-0 flex-shrink-0 ${
              size == "L" ? "ring-black ring-2" : "ring-1 ring-gray-300"
            }`}
            onClick={() => setSize("L")}
          >
            L
          </button>

          <button
            className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300  flex-grow-0 flex-shrink-0 ${
              size == "XL" ? "ring-black ring-2" : "ring-1 ring-gray-300"
            }`}
            onClick={() => setSize("XL")}
          >
            XL
          </button>
        </div>
        <button className="w-full group text-center ring-black ring-1 py-3 text-lg font-bold flex items-center">
          <p className="flex-grow group-hover:-translate-x-8 transition duration-200">
            Add to Cart
          </p>
          <img
            src="https://img.icons8.com/ios-filled/256/long-arrow-up.png"
            className="rotate-[90deg] w-[20px] translate-x-8 group-hover:-translate-x-2 transition duration-200 hidden group-hover:inline-flex"
          />
        </button>
        <button className="w-full text-center text-white bg-black py-3 text-lg font-bold">
          Buy it now
        </button>
        <p className="italic tracking-[1px]">
          This is a demonstration store. You can purchase products like this
          from United By Blue
        </p>
        <p className="">
          Like your well-worn pair of jeans in short-sleeve button down form.
          Features an understated plus-sign pattern.
        </p>
        <ul className="list-disc ml-8">
          <li>All-over print </li>
          <li>Full button down placket and collar </li>
          <li>Front left patch pocket </li>
          <li>Natural corozo buttons throughout</li>
          <li>Curved hemline</li>
        </ul>
      </div>
    </section>
  );
}

export default ProductDetails;
