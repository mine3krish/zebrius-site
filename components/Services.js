"use client";

import {
  LucideBrush,
  LucideCircleDollarSign,
  LucideCode,
  LucideGlobe,
  LucideMessageCircleWarning,
  LucideSmartphone,
} from "lucide-react";
import SpotlightCard from "./Spotlight";
import {motion} from "framer-motion"

export default function Services() {
  return (
    <section className="bg-white text-black py-20 px-6 rounded-t-[3rem]" id="services">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 text-center lg:text-left">
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
          <h3 className="text-gray-500 font-semibold text-lg uppercase tracking-wide">
            Our Services
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            We're a Full-Service Software Development Company
          </h2>
          <p className="text-gray-600 text-lg font-inter mt-4 max-w-3xl mx-auto lg:mx-0">
            We offer a wide range of services to help you build, grow, and scale
            your business. Whether you need a custom website, a mobile app, or a
            business management system — we've got you covered.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <LucideCode className="h-8 w-8 text-amber-400" />,
              title: "Software Development",
              desc: "Custom software solutions built with cutting-edge technologies to streamline business processes and enhance productivity.",
            },
            {
              icon: <LucideGlobe className="h-8 w-8 text-cyan-400" />,
              title: "Web Development",
              desc: "Professional websites and web applications that deliver exceptional user experiences and drive growth.",
            },
            {
              icon: <LucideSmartphone className="h-8 w-8 text-red-400" />,
              title: "App Development",
              desc: "Native and cross-platform apps for Android and iOS with seamless performance and intuitive design.",
            },
            {
              icon: <LucideBrush className="h-8 w-8 text-blue-400" />,
              title: "Design Services",
              desc: "Creative design solutions including web, UI/UX, and branding to strengthen your brand identity.",
            },
            {
              icon: <LucideMessageCircleWarning className="h-8 w-8 text-pink-400" />,
              title: "Enterprise Risk Management",
              desc: "Comprehensive solutions to identify, analyze, and mitigate organizational risks effectively.",
            },
            {
              icon: <LucideCircleDollarSign className="h-8 w-8 text-green-400" />,
              title: "Enterprise Resource Planning",
              desc: "Integrated systems that optimize resource allocation and improve operational efficiency.",
            },
          ].map((service, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="#22222210"
              className="bg-white border border-gray-200 rounded-2xl flex flex-col sm:flex-row sm:content-center items-start sm:items-center gap-6 p-6 hover:shadow-lg transition-all"
            >
              <div className="p-3 rounded-2xl border border-gray-300 bg-gray-50 mx-auto">
                {service.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
