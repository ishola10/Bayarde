"use client";

import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
  };

  return (
    <footer className=" text-white font-inter mt-24">
      <div className="container mx-auto ">
        <div className="bg-[#2D2D5A] text-center text-white py-12 rounded-md max-w-6xl mx-auto relative -mb-32">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-2 max-w-xl mx-auto text-sm">
            We facilitate smooth onboarding with ongoing support to ensure every
            hire drives lasting success.
          </p>
          <button className="mt-8 px-6 py-2 bg-black text-white font-semibold rounded-md">
            Contact us
          </button>
        </div>

        <div className="bg-black px-14 py-10 pt-48">
          <div className="grid md:grid-cols-4 gap-8 text-gray-400">
            <div>
              <h3 className="text-xl font-semibold text-white">Bayarde</h3>
              <p className="mt-2">
                We facilitate smooth onboarding with ongoing support to ensure
                every hire.
              </p>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="text-white">
                  🔵
                </a>
                <a href="#" className="text-white">
                  🔵
                </a>
                <a href="#" className="text-white">
                  🔵
                </a>
                <a href="#" className="text-white">
                  🔵
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">Help</h4>
              <p className="mt-2">110W Random Mill Road, Arlington, TX 76011</p>
              <p>info@bayardeservices.com</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">
                Subscribe to Newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="px-2 py-2 rounded-md bg-white text-gray-500 border border-gray-600 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#282867] text-white rounded-md"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
            &copy; Copyright 2024, All Rights Reserved by Bayarde
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
