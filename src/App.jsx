import { useState } from "react";
import "./App.css";
// import Sidebar from "./Components/Sidebar";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import { Menu, X } from "lucide-react"; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      
      <button 
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-blue-600 text-white rounded-md shadow-lg"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 transform bg-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}

      <div className="flex-1 bg-gray-100 p-4 lg:p-8 overflow-auto w-full">
        <div className="max-w-7xl mx-auto"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;