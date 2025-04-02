import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative bg-black text-white text-center pt-14 pb-60 px-6 md:px-20">
      <h1 className="text-3xl md:text-6xl font-bold leading-tight">
        Talent Without Borders, <br /> Success Without.
      </h1>
      <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto text-gray-300">
      Connecting specialized professionals with world-Class opportunities Talent Without borders, success without determinant without borders, success without.  Talent without borders, success Without.
      </p>
      <div className="mt-6 flex justify-center gap-4 pb-10">
        <button className="bg-[#313195] text-white py-2 px-6 rounded-lg text-sm hover:bg-indigo-700 transition cursor-pointer">
          Contact Us
        </button>
        <button className="flex items-center gap-2 border border-white py-2 px-6 rounded-lg text-sm hover:bg-white hover:text-black transition cursor-pointer">
          <FaPlay /> Schedule a session
        </button>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[460px] w-full max-w-5xl">
        <Image
          src="/images/bg dashboard.png"
          alt="Hero Image"
          width={1000}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export { Banner };
