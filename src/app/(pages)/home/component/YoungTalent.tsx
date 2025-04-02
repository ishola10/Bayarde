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

        <div className="flex justify-center space-x-4 mt-12">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/images/person1.png"
              alt="Person 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/images/person2.png"
              alt="Person 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/images/person3.png"
              alt="Person 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/images/person4.png"
              alt="Person 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/images/person5.png"
              alt="Person 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/images/person6.png"
              alt="Person 6"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/images/person7.png"
              alt="Person 7"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/images/person8.png"
              alt="Person 8"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungTalent;
