"use client";

import { useState } from "react";
import { LucideChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] z-50 
      bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]
      rounded-2xl transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-semibold text-white tracking-wide"
          >
            Zebrious Tech.
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {[{name: "Home", link: "#home"}, 
            {name: "About", link: "#about"}, 
            {name: "Services", link: "#services"}, 
            {name: "Careers", link: "#careers"}].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-gray-200 hover:bg-white/10 px-3 py-2 rounded-md transition-colors duration-200"
                
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              className="bg-white text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md flex items-center gap-1 transition-all duration-200"
              
            >
              Contact Us
              <LucideChevronRight className="h-5 text-gray-500" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 hover:text-white transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3 pb-4">
            {[{name: "Home", link: "#home"}, 
            {name: "About", link: "#about"}, 
            {name: "Services", link: "#services"}, 
            {name: "Careers", link: "#careers"}].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-gray-200 hover:bg-white/10 px-3 py-2 rounded-md transition-colors duration-200"
                
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              className="bg-white text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md flex items-center gap-1 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
              <LucideChevronRight className="h-5 text-gray-500" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
