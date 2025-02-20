import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-brand-mint">Sweet Pea's Cabinetry</h3>
            <p className="text-gray-400 mb-4">
              Transforming kitchens with premium cabinetry and countertop solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-mint transition-colors duration-300"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-brand-mint transition-colors duration-300"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-brand-mint transition-colors duration-300"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 text-brand-mint">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/collections" className="text-gray-400 hover:text-brand-mint transition-colors duration-300">Collections</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-mint transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-mint transition-colors duration-300">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-brand-mint transition-colors duration-300">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 text-brand-mint">Hours & Location</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Monday - Friday: 8am - 5pm</li>
              <li className="text-gray-400">Saturday: 10am - 3pm</li>
              <li className="text-gray-400">Sunday: Closed</li>
              <li className="text-gray-400 mt-4">24 Molter Place</li>
              <li className="text-gray-400">Bloomfield, NJ 07003</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 text-brand-mint">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-brand-mint text-white w-full"
              />
              <button className="bg-brand-mint text-brand-dark px-4 py-2 rounded hover:opacity-90 transition duration-300 font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400">
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Link to="/privacy" className="hover:text-brand-mint transition-colors duration-300">Privacy Policy</Link>
            <span className="hidden sm:block">|</span>
            <p>&copy; {new Date().getFullYear()} Sweet Pea's Cabinetry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;