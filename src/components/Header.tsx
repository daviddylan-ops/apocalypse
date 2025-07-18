
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-black-900/90 backdrop-blur-sm border-b border-neon-green-300/20 screen-noise">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Glitch Effect */}
          <div className="glitch-text font-display text-2xl font-bold" data-text="APOCALYPSE & ART">
            APOCALYPSE & ART
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 font-cyber text-sm tracking-wider">
            <a 
              href="#about" 
              className="nav-fracture relative text-neon-green-300 hover:text-neon-green-400 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neon-green-300 after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              [ABOUT]
            </a>
            <a 
              href="#services" 
              className="nav-fracture relative text-neon-green-300 hover:text-neon-green-400 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neon-green-300 after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              [SERVICES]
            </a>
            <a 
              href="#portfolio" 
              className="nav-fracture relative text-neon-green-300 hover:text-neon-green-400 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neon-green-300 after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              [PORTFOLIO]
            </a>
            <a 
              href="#contact" 
              className="nav-fracture relative text-neon-green-300 hover:text-neon-green-400 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-neon-green-300 after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              [CONTACT]
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-neon-green-300 hover:text-neon-green-400 transition-colors">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-current transform transition-transform"></div>
              <div className="w-full h-0.5 bg-current transform transition-transform"></div>
              <div className="w-full h-0.5 bg-current transform transition-transform"></div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
