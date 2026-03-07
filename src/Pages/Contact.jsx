import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 lg:py-12 px-4 md:px-6 lg:px-20 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl h-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden border border-gray-100">
        {/* Left Side: Visual/Image */}
        <div className="w-full lg:flex-1 h-64 md:h-80 lg:h-auto relative group">
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="contact"
          />
          <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-blue-900/20 transition-colors"></div>
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 text-white z-10">
            <h3 className="text-xl lg:text-3xl font-black mb-1 lg:mb-2 italic tracking-tight">
              Let's build something
            </h3>
            <p className="text-blue-100 text-sm lg:text-base font-medium">
              Available for freelance & collaborations.
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:flex-1 bg-white flex flex-col items-center justify-center p-6 md:p-10 lg:p-16">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:mb-10 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-800 mb-3 lg:mb-4">
                Get in <span className="text-blue-600">Touch</span> 👋
              </h2>
              <p className="text-slate-500 text-sm lg:text-lg">
                Have a project in mind? Fill out the form and I'll get back to
                you within 24 hours.
              </p>
            </div>

            <form
              action="https://formsubmit.co/serjoramos4444@gmail.com"
              method="POST"
              className="flex flex-col gap-4 lg:gap-5"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 font-bold text-[10px] lg:text-sm uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="bg-gray-50 border border-gray-200 p-3 lg:p-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all duration-300 text-sm"
                  placeholder="e.g. Charles Darwin"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 font-bold text-[10px] lg:text-sm uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="bg-gray-50 border border-gray-200 p-3 lg:p-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all duration-300 text-sm"
                  placeholder="project@example.com"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 font-bold text-[10px] lg:text-sm uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="3"
                  required
                  className="bg-gray-50 border border-gray-200 p-3 lg:p-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all duration-300 resize-none text-sm"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-600 w-full py-3 lg:py-4 rounded-xl text-white font-bold text-base lg:text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 active:scale-95 transition-all duration-300 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
