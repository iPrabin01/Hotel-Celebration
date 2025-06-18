import { Menu, X } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center mr-3">
              <img src="/images/k2.png" alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">katiya House</h1>
              <p className="text-amber-300 font-mono text-xs font-light">
                Test the Treditions
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 space-x-8 items-center">
            <a
              href="#home"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#menu"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Menu
            </a>
            <a
              href="#events"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Events
            </a>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Reserve Table
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-300 py-2 border-b border-gray-700 hover:text-amber-400"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 py-2 border-b border-gray-700 hover:text-amber-400"
              >
                About
              </a>
              <a
                href="#menu"
                className="text-gray-300 py-2 border-b border-gray-700 hover:text-amber-400"
              >
                Menu
              </a>
              <a
                href="#events"
                className="text-gray-300 py-2 hover:text-amber-400"
              >
                Events
              </a>
              <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md font-medium">
                Reserve Table
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
