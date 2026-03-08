import React, { useState } from "react";
import img1 from "../assets/portfolio1.jpeg";
import img2 from "../assets/portfolio2.jpeg";
import img3 from "../assets/portfolio3.jpeg";
import img4 from "../assets/portfolio4.jpeg";
import img5 from "../assets/portfolio5.jpeg";
import img6 from "../assets/portfolio6.jpeg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img4, img5, img6];
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 lg:py-16 px-4 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
        <h2 className="text-xs lg:text-sm font-bold text-purple-300 uppercase tracking-[0.2em] mb-3">
          Work Showcase
        </h2>
        <div className="text-3xl lg:text-5xl font-black text-slate-800">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-sky-400">
            Portfolio
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className="group relative h-64 lg:h-72 w-full overflow-hidden rounded-3xl shadow-lg cursor-pointer bg-slate-200"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Project ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-sm">
                View Project
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-black/80 transition-all duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-blue-400 text-2xl lg:text-4xl font-light transition-colors flex items-center gap-2"
            >
              <span className="text-sm uppercase tracking-widest hidden lg:inline">
                close
              </span>{" "}
              ×
            </button>

            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto max-h-[80vh] lg:max-h-[85vh] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-contain border-2 lg:border-4 border-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
