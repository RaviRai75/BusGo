import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white ">
            🚌
          </div>
          BusGo
        </div>


        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#home">Home</a>
          <a href="#routes">Routes</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
             
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur border-t border-gray-200 px-4 py-3 space-y-2">
          <a href="#home" className="block text-gray-700">
            Home
          </a>
          <a href="#routes" className="block text-gray-700">
            Routes
          </a>
          <a href="#about" className="block text-gray-700">
            About
          </a>
          <a href="#contact" className="block text-gray-700">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
