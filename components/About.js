"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 flex justify-center text-white" id="about">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        {/* Left Column */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-10">
          <h3 className="font-semibold text-lg text-gray-400 uppercase tracking-wide">
            About Us
          </h3>
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight">
            About Zebrius Technologies
          </h2>
        </motion.div>

        {/* Right Column */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-2/3 text-gray-300 text-base sm:text-lg leading-relaxed font-inter">
          Founded with a vision to bridge the gap between cutting-edge
          technology and business excellence,{" "}
          <span className="text-white font-semibold">
            Zebrius Technologies Pvt. Ltd.
          </span>{" "}
          is an innovative startup ready to become your trusted partner in
          digital transformation. Our passionate team of developers, designers,
          and IT specialists brings together fresh thinking and modern expertise
          to deliver solutions that drive real business value. We're excited to
          start our journey and help businesses grow through technology.
        </motion.div>
      </div>
    </section>
  );
}
