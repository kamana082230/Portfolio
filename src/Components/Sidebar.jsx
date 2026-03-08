import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaDownload,
  FaHome,
  FaBriefcase,
  FaLayerGroup,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import HeroImg from "../assets/img21.jpeg";

const Sidebar = ({ closeSidebar }) => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-4 px-6 py-3 rounded-xl transition-all duration-300 group ${
      isActive
        ? "bg-white text-blue-700 shadow-xl translate-x-2"
        : "text-white/80 hover:bg-white/10 hover:text-white hover:translate-x-1"
    }`;

  return (
    <div className="w-full h-full text-white flex flex-col justify-between px-6 py-10 shadow-2xl bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] border-r border-white/10 overflow-y-auto">
      <div className="text-center">
        <img
          src={HeroImg}
          alt="Yush Maskey"
          className="rounded-full h-28 w-28 lg:h-32 lg:w-32 border-4 border-white/10 mx-auto shadow-2xl object-cover"
        />
        <h2 className="text-xl lg:text-2xl font-black mt-4">Yush Maskey</h2>
        <p className="text-blue-400 font-medium text-xs lg:text-sm tracking-widest uppercase">
          Frontend Developer
        </p>
      </div>

      <nav className="flex flex-col gap-3 my-8">
        <NavLink to="/" className={linkClasses} onClick={closeSidebar}>
          <FaHome className="text-xl" />
          <span className="text-lg font-semibold">Home</span>
        </NavLink>
        <NavLink to="/service" className={linkClasses} onClick={closeSidebar}>
          <FaLayerGroup className="text-xl" />
          <span className="text-lg font-semibold">Services</span>
        </NavLink>
        <NavLink to="/portfolio" className={linkClasses} onClick={closeSidebar}>
          <FaBriefcase className="text-xl" />
          <span className="text-lg font-semibold">Portfolio</span>
        </NavLink>
        <NavLink to="/contact" className={linkClasses} onClick={closeSidebar}>
          <FaEnvelope className="text-xl" />
          <span className="text-lg font-semibold">Contact</span>
        </NavLink>
      </nav>

      <div className="flex flex-col gap-6">
        <div className="flex justify-center gap-5 pt-4">
          <a
            href="https://facebook.com/yush.maskey"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-blue-500 transition-all hover:scale-125"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://instagram.com/yush_maskey"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-purple-300 transition-all hover:scale-125"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://wa.me/9817381181"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-green-500 transition-all hover:scale-125"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-blue-400 transition-all hover:scale-125"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        <a
          href="#"
          className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 to-sky-300 text-white font-bold py-3 lg:py-4 rounded-xl shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 active:scale-95 text-sm lg:text-base"
        >
          <span>Download CV</span>
          <FaDownload className="animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
