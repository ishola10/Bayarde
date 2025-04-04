"use client";

import React from "react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaCopy } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const GraphComponent = dynamic(
  () => import("../../../../components/GraphComponent"),
  {
    ssr: false,
  }
);

const Counter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, ""));

    let timer: NodeJS.Timeout;

    const increment = () => {
      let current = start;
      const step = Math.ceil(end / 50);
      timer = setInterval(() => {
        current += step;
        if (current > end) {
          current = end;
          clearInterval(timer);
          setTimeout(() => {
            start = 0;
            setCount(0);
            increment();
          }, 4000);
        }
        setCount(current);
      }, 50);
    };

    increment();

    return () => clearInterval(timer);
  }, [value]);

  return <span>{value.includes("+") ? count + "+" : count + "%"}</span>;
};

const SalesStatistics = () => {
  return (
    <section className="w-full mt-48 md:mt-96">
      <div className="bg-black text-white max-w-4xl py-10 px-6 flex justify-center items-center text-center mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div>
            <h2 className="text-4xl font-bold">
              <Counter value="110+" />
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Successful Placement to top organizations globally
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              <Counter value="234" />
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Industrial sectors served for career professionals
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              <Counter value="60%" />
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Reduction in total candidates hire time to success
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 py-16 gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Increase your sales <br /> via email marketing
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <FaCopy className="text-white text-4xl bg-[#282867] p-2 rounded-full inline-flex items-center justify-center" />

              <div>
                <h3 className="font-bold text-lg">OUR VISION</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  To connect top talent with global opportunities in Supply
                  Chain, Technology, and Technical Skills, delivering
                  innovative.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#FABB18] rounded-full inline-flex items-center justify-center">
                <Image
                  src="/icons/mission.png"
                  alt="Mission Icon"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">OUR MISSION</h3>
                <p className="text-gray-600 text-base">
                  To be a globally recognized leader in staffing and
                  recruitment, known for our commitment to excellence,
                  integrity, and client success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <GraphComponent />
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-md w-full">
              <h4 className="text-sm text-gray-500">Average Talent Salary</h4>
              <h3 className="text-2xl font-bold">$1,531</h3>
              <p className="text-sm">+5.4%</p>

              <div className="flex items-center gap-2 mt-4">
                <FaFacebook className="text-blue-600 cursor-pointer" />
                <FaTwitter className="text-blue-400 cursor-pointer" />
                <FaInstagram className="text-pink-600 cursor-pointer" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md w-full">
              <h4 className="text-2xl font-bold">218</h4>
              <p className="text-sm text-gray-500">Employed this month</p>
              <button className="bg-gray-200 text-black py-1 px-3 rounded-md mt-2">
                56% ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesStatistics;
