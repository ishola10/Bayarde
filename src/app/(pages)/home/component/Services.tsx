import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { FaCopy } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-gradient-to-r from-[#FEFBF299] to-[#FBF7E9] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-blue-600 uppercase font-semibold text-sm">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Staffing Services Tailored To Organizations
        </h2>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <div className="bg-[#1C1819] text-white p-6 rounded-lg shadow-md flex items-start">
            <FaCopy className="text-white text-4xl bg-[#282867] p-2 rounded-full inline-flex items-center justify-center mr-4" />
            <div>
              <h3 className="font-bold text-lg">Supply Chain Recruitment</h3>
              <p className="text-sm text-gray-300 w-3/4">
                Connecting you with industry-leading logistics and operations
                experts.
              </p>
            </div>
          </div>

          <div className="flex items-start p-6">
            <div className="p-2 bg-[#79D279] rounded-full inline-flex items-center justify-center">
              <Image
                src="/icons/tech.png"
                alt="Mission Icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Technology Acquisition</h3>
              <p className="text-sm text-gray-700 w-3/4">
                Sourcing innovative IT professionals and software developers to
                drive.
              </p>
            </div>
          </div>

          <div className="flex items-start p-6">
            <div className="p-2 bg-[#66B2FF] rounded-full inline-flex items-center justify-center">
              <Image
                src="/icons/staff.png"
                alt="Mission Icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Technical Staffing</h3>
              <p className="text-sm text-gray-700 w-3/4">
                Matching top-tier engineers with roles that require precision
                and innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/happy team.png"
            alt="Happy team"
            width={1000}
            height={600}
            className="rounded-lg shadow-lg w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
