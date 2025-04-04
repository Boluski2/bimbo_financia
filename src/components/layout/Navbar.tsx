
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-navy-900">Bimbo Oyedotun</span>
              {/* <span className="ml-2 text-gold-500 text-xl">Financial</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-navy-700 transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-navy-700 transition-colors">
              Services
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-navy-700 transition-colors">
              About
            </Link>
            {/* <Link to="/resources" className="font-medium text-gray-700 hover:text-navy-700 transition-colors">
              Resources
            </Link> */}
            <a href="/#contact" className="font-medium text-gray-700 hover:text-navy-700 transition-colors">
              Contact
            </a>
            <Link to="/booking">
              <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-navy-900"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-navy-700 transition-colors px-4 py-2" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/services" className="font-medium text-gray-700 hover:text-navy-700 transition-colors px-4 py-2" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-navy-700 transition-colors px-4 py-2" onClick={toggleMenu}>
                About
              </Link>
              {/* <Link to="/resources" className="font-medium text-gray-700 hover:text-navy-700 transition-colors px-4 py-2" onClick={toggleMenu}>
                Resources
              </Link> */}
              <a href="/#contact" className="font-medium text-gray-700 hover:text-navy-700 transition-colors px-4 py-2" onClick={toggleMenu}>
                Contact
              </a>
              <Link to="/booking" onClick={toggleMenu}>
                <Button className="bg-navy-900 hover:bg-navy-800 text-white w-full">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
