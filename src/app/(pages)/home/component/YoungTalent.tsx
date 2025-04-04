import React from "react";
import Image from "next/image";

const YoungTalent: React.FC = () => {
  return (
    <div className="relative bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-6xl  mx-auto  font-bold mb-4 font-gloock tracking-wide break-words">
          The young talents <br /> and leaders{" "}
          <span className="relative bg-pink-600 rounded-full mt-10">
            redefining <br />
          </span>{" "}
          <span className="relative bg-green-300 rounded-full">success</span>{" "}
          with Bayarde
        </h1>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto mt-4">
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-center mx-auto max-w-4xl">
          {["person1", "person2", "person3", "person4", "person5", "person6", "person7", "person8"].map((person, index) => (
            <div key={index} className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto">
              <Image
                src={`/images/${person}.png`}
                alt={`Person ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoungTalent;
