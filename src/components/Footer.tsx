
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">
                Findery
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Find trusted senior care facilities. Quality, transparency, and peace of mind for families.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-400 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-brand-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/map" className="hover:text-brand-400 transition-colors">Map View</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-brand-400 transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Care Types</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/category/assisted-living" className="hover:text-brand-400 transition-colors">Assisted Living</Link>
              </li>
              <li>
                <Link to="/category/memory-care" className="hover:text-brand-400 transition-colors">Memory Care</Link>
              </li>
              <li>
                <Link to="/category/skilled-nursing" className="hover:text-brand-400 transition-colors">Skilled Nursing</Link>
              </li>
              <li>
                <Link to="/category/home-health" className="hover:text-brand-400 transition-colors">Home Health</Link>
              </li>
              <li>
                <Link to="/categories" className="text-brand-400 hover:underline transition-colors">View All Care Types</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Business St, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:contact@findery.example.com" className="hover:text-brand-400 transition-colors">
                  contact@findery.example.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-brand-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Findery. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
