import React from "react";
import Image from "next/image";

const GlobalImpact = () => {
  return (
    <section className="bg-[#010101] text-white py-16 lg:px-24 rounded-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/images/global-map.png"
            alt="Global Impact Map"
            width={500}
            height={500}
            className="w-full max-w-md"
          />
        </div>

        <div className="md:w-1/2 p-4 md:p-0">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight font-gloock">
            How <span className="text-blue-500 font-grace">Bayarde</span> Has Globally Showed Impact Footprint Worldwide
          </h2>
          <p className="text-gray-300 mt-4 text-sm md:text-base">
            Today’s marketplace is fiercely competitive. Companies often struggle with lengthy hiring cycles and severe shortages of specialized talent.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-6 text-lg font-semibold">
            <div>
              <span className="text-2xl">100+</span>
              <p className="text-gray-400 text-sm">Successful Placement</p>
            </div>
            <div>
              <span className="text-2xl">83+</span>
              <p className="text-gray-400 text-sm">Sectors Served</p>
            </div>
            <div>
              <span className="text-2xl">60%</span>
              <p className="text-gray-400 text-sm">Hire Time Reduction</p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default GlobalImpact;
