import React from "react";
import { Typewriter } from "react-simple-typewriter";
import mainImg from "../assets/abc.jpg";
import { Link } from "react-router-dom";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiAdobecreativecloud } from "react-icons/si";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-[#f8fafc] relative px-6 md:px-10 lg:px-20 overflow-hidden py-20 lg:py-0">
      <div className="flex-1 flex flex-col gap-4 lg:gap-6 justify-center z-10 text-center lg:text-left order-2 lg:order-1">
        <div className="space-y-2">
          <p className="text-blue-600 font-bold tracking-widest uppercase text-xs lg:text-sm">
            Welcome to my world
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Hi! I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-sky-400">
              kamana bhandari
            </span>
          </h1>
        </div>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-700 min-h-[60px] lg:h-10">
          a professional{" "}
          <span className="text-blue-600 block lg:inline">
            <Typewriter
              words={["Web Developer.", "Video Editor.", "Graphics Designer."]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
          I bridge the gap between complex code and stunning visuals. Whether
          it's building{" "}
          <span className="font-semibold text-slate-800">
            high-performance websites
          </span>
          , editing{" "}
          <span className="font-semibold text-slate-800">cinematic videos</span>
          , or creating{" "}
          <span className="font-semibold text-slate-800">
            bold brand identities
          </span>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
          <Link
            to="/contact"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 text-center"
          >
            Hire Me Now
          </Link>
          <Link
            to="/portfolio"
            className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition-all duration-300 text-center"
          >
            View Projects
          </Link>
        </div>

        {/* Tech Stack Icons Section */}
        <div className="mt-12 lg:mt-16 w-full animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mb-6 text-center lg:text-left">
            My Tech Stack
          </p>
          <div className="flex flex-wrap gap-6 lg:gap-8 justify-center lg:justify-start items-center">
            {[
              {
                icon: <FaHtml5 />,
                color: "hover:text-orange-500",
                label: "HTML5",
              },
              {
                icon: <FaCss3Alt />,
                color: "hover:text-blue-500",
                label: "CSS3",
              },
              {
                icon: <FaJs />,
                color: "hover:text-yellow-400",
                label: "JavaScript",
              },
              {
                icon: <FaReact />,
                color: "hover:text-cyan-400",
                label: "React",
              },
              {
                icon: <SiTailwindcss />,
                color: "hover:text-sky-400",
                label: "Tailwind",
              },
              {
                icon: <FaFigma />,
                color: "hover:text-purple-500",
                label: "Figma",
              },
              {
                icon: <SiAdobecreativecloud />,
                color: "hover:text-red-500",
                label: "Adobe CC",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div
                  className={`text-3xl lg:text-4xl text-slate-400 transition-all duration-300 transform group-hover:scale-110 ${tech.color}`}
                >
                  {tech.icon}
                </div>

                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex-1 relative flex justify-center items-center mb-10 lg:mb-0 order-1 lg:order-2 group">
        <div className="absolute w-48 h-48 lg:w-72 lg:h-72 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-colors duration-700"></div>

        <div className="relative">
          <img
            src={mainImg}
            alt="Yush Maskey"
            className="w-56 md:w-64 lg:w-96 rounded-3xl shadow-[20px_20px_50px_rgba(0,0,0,0.1)] object-cover z-20 transition-transform duration-500 group-hover:scale-[1.02] border-4 lg:border-8 border-white"
          />
          <div className="absolute -bottom-3 -left-3 lg:-bottom-5 lg:-left-5 bg-white p-2 lg:p-4 rounded-2xl shadow-xl z-30 animate-bounce">
            <p className="text-xl lg:text-2xl">🚀</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
