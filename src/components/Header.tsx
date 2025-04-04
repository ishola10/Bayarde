"use client";

import React, { useState } from "react";
import { routes } from "@/helpers/util";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const displayedRoutes = routes.slice(0, 3);

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-6">
      <Link href="/home">
        <Image
          src="/icons/Bayarde_whitetransparent (1).png"
          width={100}
          height={40}
          alt="Bayarde Logo"
        />
      </Link>

      <nav className="hidden md:flex gap-8">
        {displayedRoutes.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className={`text-sm font-medium transition-colors ${
              pathname.includes(item.route) ? "text-white" : "text-gray-400"
            } hover:text-white`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-2xl z-50"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 z-40">
          {displayedRoutes.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="text-2xl font-semibold text-white hover:text-gray-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
