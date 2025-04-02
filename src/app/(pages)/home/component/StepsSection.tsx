import React from "react";
import Image from "next/image";
// import FlagOrbit from "@/components/FlagOrbit";

const StepsSection = () => {
  return (
    <div className="container mx-auto pt-12 space-y-10">
      <div className="mx-auto px-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <p className="text-blue-600 font-medium">Step 1</p>
            <h2 className="text-5xl font-bold mt-2">
              Consultation & <br /> Needs Analysis
            </h2>
            <p className="text-gray-600 mt-4 w-3/4">
              We facilitate smooth onboarding with ongoing support to ensure
              every hire drives lasting success GLOBALLY.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/div.relative.png"
              alt="Consultation"
              width={400}
              height={300}
            //   className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="relative bg-gradient-to-r  from-indigo-900 to-[#282867] p-12 pb-24  rounded-lg text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
              <p className="text-gray-300">Step 2</p>
              <h2 className="text-5xl font-bold font-inter mt-4">
                <span className="text-blue-300">Proactive</span> Sourcing <br /> &
                Screening:
              </h2>
              <p className="mt-6 w-3/4">
                Using advanced tools and our global network, we rigorously
                screen candidates for expertise, cultural fit, and potential for
                growth.
              </p>
            </div>
            <div className="absolute top-10 -right-10">
              <Image
                src="/images/sourcing-screening.png"
                alt="Sourcing & Screening"
                width={1200}
                height={800}
                className="w-full max-w-xl rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-gray-900 mt-40 to-gray-800 p-12 rounded-lg text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <p className="text-blue-400">Step 3</p>
            <h2 className="text-5xl font-bold mt-4">Seamless Placement <br /> & Support</h2>
            <p className="mt-4 w-3/4">
              We facilitate smooth onboarding with ongoing support to ensure
              every hire drives lasting success.
            </p>
            <div className="mt-4">
              <Image
                src="/images/placement-support.png"
                alt="Placement Support"
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="absolute top-24 right-0">
            <Image
              src="/images/video-conference.png"
              alt="Virtual Meeting"
              width={1200}
                height={800}
              className="w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
