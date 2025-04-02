import React from "react";
import Image from "next/image";

const TalentHiringSection = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-6xl font-bold leading-tight font-gloock">
            The Global Talent Challenge and Safe Opportunity now Employed.
          </h1>
        </div>
        <div className="pl-24">
          <p className="text-white mt-8 text-sm md:text-base w-2/3">
            Today’s marketplace is fiercely competitive. Companies often
            struggle with lengthy hiring cycles and severe shortages of
            specialized talent. Many organizations report vacancies remaining
            unfilled for months, leading to operational slowdowns and missed
            opportunities.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
            ↓
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <Image
            src="/images/interview.png"
            alt="Interview Process"
            layout="fill"
            objectFit="cover"
          />
          <p className="absolute bottom-4 left-4 text-white  bg-opacity-50 p-2 text-base font-semibold w-2/3">
            “We have come to the end of this interview here at Facebook. Hope to
            hear back from us”
          </p>
        </div>

        <div className="relative h-screen">
          <Image
            src="/images/hired.png"
            alt="Candidate Hired"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-4 left-4 text-white p-2 text-base font-semibold" style={{ backgroundColor: 'rgba(139, 0, 0, 0.1)' }}>
    <div className="flex items-center gap-2 pb-4">
        <Image src="/icons/dash.png" alt="Bayarde Logo" width={25} height={25} />
        <h2>Hello Candidate,</h2>
    </div>
    <p>You have been successfully selected for the role of a software...</p>
</div>
        </div>
      </div>
    </div>
  );
};

export default TalentHiringSection;
