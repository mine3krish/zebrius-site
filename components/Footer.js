"use client";

import { Facebook, Instagram, Linkedin, XIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full mt-20 text-gray-300 border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Zebrius Tech.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with modern technology solutions. We craft
              digital experiences that inspire innovation and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
            {[{name: "Home", link: "#home"}, 
            {name: "About", link: "#about"}, 
            {name: "Services", link: "#services"}, 
            {name: "Careers", link: "#careers"},
            {name: "Privacy Policy", link: "/privacy-policy"}].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <span className="text-gray-300">contact@zebriustechnologies.com</span></li>
              <li>Phone: <span className="text-gray-300">+91 7980286979</span></li>
              <li>Address: <span className="text-gray-300">Cuttack, Odisha</span></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            ©{new Date().getFullYear()} Zebrius Technologies Pvt Ltd. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "https://instagram.com/zebriustechnologiespvtltd" },
              { icon: Linkedin, href: "https://linkedin.com/company/zebrius-technologies-pvt-ltd" },
              { icon: XIcon, href: "#" }
            ].map(({ icon: Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <Icon className="h-5 w-5 text-gray-300 hover:text-white transition" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
