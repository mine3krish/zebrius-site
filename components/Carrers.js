import {
  LucideCpu,
  LucideMail,
  LucideScale,
  LucideShapes,
  LucideSprout,
} from "lucide-react";
import SpotlightCard from "./Spotlight";

export default function Careers() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white text-black py-20 px-6" id="careers">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 text-center lg:text-left">
        {/* Header */}
        <div>
          <h3 className="text-gray-500 font-semibold text-lg uppercase tracking-wide">
            Join Our Team
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
            Be part of an innovative team shaping the future of technology
          </h2>
          <p className="text-gray-600 text-lg font-inter mt-4 max-w-3xl mx-auto lg:mx-0">
            We’re always looking for talented, driven individuals who are
            passionate about technology and innovation. Grow your career with a
            team that values creativity, balance, and continuous learning.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {[
            {
              icon: <LucideCpu className="h-8 w-8 text-black/90" />,
              title: "Cutting-edge Technology",
              desc: "Work with the latest tools and frameworks to build next-generation solutions.",
            },
            {
              icon: <LucideShapes className="h-8 w-8 text-black/90" />,
              title: "Continuous Learning",
              desc: "Access regular training programs and mentorship to keep growing your skills.",
            },
            {
              icon: <LucideScale className="h-8 w-8 text-black/90" />,
              title: "Work-Life Balance",
              desc: "Enjoy flexible hours, hybrid work options, and a supportive team culture.",
            },
            {
              icon: <LucideSprout className="h-8 w-8 text-black/90" />,
              title: "Career Growth",
              desc: "Clear advancement paths and leadership opportunities for every role.",
            },
          ].map((item, i) => (
            <SpotlightCard
              key={i}
              spotlightColor="#00000010"
              className="bg-white border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 hover:shadow-lg transition-all"
            >
              <div className="p-3 rounded-2xl border border-gray-300 bg-gray-50 mx-auto">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Mail to Apply */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <p className="text-gray-500 text-lg md:text-xl font-medium tracking-wide">
            Mail us your resume:
          </p>
          <a
            href="mailto:jobs@zebrious.tech"
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300"
          >
            <LucideMail className="h-6 w-6" />
            <span className="font-semibold text-lg md:text-xl tracking-wide">
              jobs@zebrious.tech
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
