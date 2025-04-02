import React from "react";

const flags = [
  { countries: ["USA", "Ghana"], images: ["/icons/usa.png", "/icons/ghana.jpeg"], orbit: 1 },
  { countries: ["India", "Czech"], images: ["/icons/india.png", "/icons/czech.png"], orbit: 2 },
  { countries: ["China", "Italy"], images: ["/icons/china.png", "/icons/italy.png"], orbit: 3 },
  { countries: ["Cuba", "New Zealand"], images: ["/icons/cuba.png", "/icons/newzealand.png"], orbit: 4 },
  { countries: ["Saint Kitts", "Honduras"], images: ["/icons/saintkitts.jpeg", "/icons/honduras.jpeg"], orbit: 5 },
];

const FlagOrbit = () => {
  return (
    <div className="relative w-80 h-80 mx-auto">
      <div className="absolute w-full h-full flex justify-center items-center">
        {/* Orbit 5 (outermost) */}
        <div className="absolute border border-gray-300 rounded-full w-full h-full"></div>
        {/* Orbit 4 */}
        <div className="absolute border border-gray-300 rounded-full w-5/6 h-5/6"></div>
        {/* Orbit 3 */}
        <div className="absolute border border-gray-300 rounded-full w-3/4 h-3/4"></div>
        {/* Orbit 2 */}
        <div className="absolute border border-gray-300 rounded-full w-2/3 h-2/3"></div>
        {/* Orbit 1 (innermost) */}
        <div className="absolute border border-gray-300 rounded-full w-1/2 h-1/2"></div>
      </div>

      {flags.map((pair, index) => (
        <div
          key={index}
          className={`absolute w-8 h-8 rounded-full flex items-center justify-center orbit-${pair.orbit}`}
        >
          {pair.images.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className="absolute w-8 h-8 rounded-full"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                transform: `rotate(${imageIndex * 180}deg) translateY(${20 * pair.orbit}px)`
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FlagOrbit;