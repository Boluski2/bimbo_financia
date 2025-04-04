
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bimbo Oyedotun Financial</h3>
            <p className="text-gray-300 mb-4">
              Providing expert financial guidance and wealth building strategies for a secure future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/financial-planning" className="text-gray-300 hover:text-white transition-colors">
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link to="/services/investment-strategies" className="text-gray-300 hover:text-white transition-colors">
                  Investment Strategies
                </Link>
              </li>
              <li>
                <Link to="/services/retirement-planning" className="text-gray-300 hover:text-white transition-colors">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link to="/services/debt-management" className="text-gray-300 hover:text-white transition-colors">
                  Debt Management
                </Link>
              </li>
              <li>
                <Link to="/services/wealth-building" className="text-gray-300 hover:text-white transition-colors">
                  Wealth Building
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-gold-400" />
                <p className="text-gray-300">123 Financial District, Lagos, Nigeria</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold-400" />
                <p className="text-gray-300">+234 123 4567 890</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold-400" />
                <p className="text-gray-300">contact@bimbooyedotun.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bimbo Oyedotun Financial. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
