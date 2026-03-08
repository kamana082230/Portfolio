import React from "react";
import {
  BiSolidUserVoice,
  BiCodeAlt,
  BiPaint,
  BiCamera,
  BiMobileAlt,
  BiBullseye,
  BiSearchAlt2,
  BiBookAlt,
  BiBarChartAlt2,
} from "react-icons/bi";

const Service = () => {
  const services = [
    {
      icon: <BiSolidUserVoice size={32} />, 
      name: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with seamless user experiences.",
    },
    {
      icon: <BiCodeAlt size={32} />,
      name: "Web Development",
      description: "Building fast, responsive, and scalable websites tailored to your business needs.",
    },
    {
      icon: <BiPaint size={32} />,
      name: "Graphic Design",
      description: "Designing eye-catching graphics, branding materials, and visual content that stand out.",
    },
    {
      icon: <BiCamera size={32} />,
      name: "Photography/Videography",
      description: "Capturing high-quality photos and videos to elevate your brand’s visual identity.",
    },
    {
      icon: <BiMobileAlt size={32} />,
      name: "Mobile App Development",
      description: "Developing user-friendly mobile applications for both iOS and Android platforms.",
    },
    {
      icon: <BiBullseye size={32} />,
      name: "Digital Marketing",
      description: "Driving growth through targeted digital strategies and social media campaigns.",
    },
    {
      icon: <BiSearchAlt2 size={32} />,
      name: "SEO Optimization",
      description: "Improving search engine rankings to increase visibility and attract organic traffic.",
    },
    {
      icon: <BiBookAlt size={32} />,
      name: "Content Writing",
      description: "Crafting engaging, informative, and SEO-friendly content for websites and blogs.",
    },
    {
      icon: <BiBarChartAlt2 size={32} />,
      name: "Analytics/Reporting",
      description: "Providing detailed insights and performance reports to guide data-driven decisions.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 lg:py-16 px-4 md:px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
        <h2 className="text-[10px] lg:text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">What I Offer</h2>
        <div className="text-3xl lg:text-5xl font-black text-slate-700">
          My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-sky-400">Services</span>
        </div>
        <p className="mt-4 text-slate-600 text-sm lg:text-lg px-2">
          I provide a wide range of creative and technical services to help your business grow in the digital world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-2 flex flex-col items-start"
          >
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-inner">
              {service.icon}
            </div>

            <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
              {service.name}
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm lg:text-[15px]">
              {service.description}
            </p>

            <div className="mt-6 w-8 h-1 bg-slate-200 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;