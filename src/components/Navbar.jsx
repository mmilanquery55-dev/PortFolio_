
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.webp"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/80 backdrop-blur-md py-3 shadow-2xl" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
          />
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            MILAN
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
                } group`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {/* Animated Underline */}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400 transform origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between items-center">
            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } md:hidden`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition-all duration-300 ${
                  isActive ? "text-cyan-400 pl-2 border-l-2 border-cyan-400" : "text-gray-300 hover:text-white hover:pl-2"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
  
export default Navbar; 

