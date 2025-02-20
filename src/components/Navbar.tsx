import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const linkClasses = (path: string) => `
    relative py-2 text-gray-600 transition-colors duration-300
    hover:text-gray-900 
    ${isActive(path) ? 'text-brand-dark font-medium' : ''}
    after:content-[''] 
    after:absolute 
    after:bottom-0 
    after:left-0 
    after:w-full 
    after:h-0.5 
    after:bg-brand-mint 
    after:scale-x-0 
    after:origin-center 
    after:transition-transform 
    after:duration-300
    ${isActive(path) ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
  `;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex-shrink-0 font-bold text-2xl text-gray-800"
          >
            <div className="flex items-center space-x-2">
              <img
                src="/SPH_LOGO.svg"
                alt="Sweet Pea's Home"
                className="h-20 w-50"
              />
              <span className="text-brand-dark">Sweet Pea's Home</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClasses('/')}>
              Home
            </Link>
            <Link to="/collections" className={linkClasses('/collections')}>
              Collections
            </Link>
            <Link to="/about" className={linkClasses('/about')}>
              About
            </Link>
            <Link to="/contact" className={linkClasses('/contact')}>
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:1-800-CABINET"
              className="bg-brand-mint text-brand-dark px-6 py-2 rounded-md hover:opacity-90 transition duration-300"
            >
              Call Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-0 top-20 bg-white border-t border-gray-100 shadow-lg z-50 transition-all duration-300 ease-in-out">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => handleNavigation('/')}
                className={`block w-full text-left px-4 py-3 rounded-lg ${
                  isActive('/')
                    ? 'bg-brand-mint/10 text-brand-dark font-medium border-l-4 border-brand-mint'
                    : 'text-gray-600 hover:bg-gray-50'
                } transition-all duration-300`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/collections')}
                className={`block w-full text-left px-4 py-3 rounded-lg ${
                  isActive('/collections')
                    ? 'bg-brand-mint/10 text-brand-dark font-medium border-l-4 border-brand-mint'
                    : 'text-gray-600 hover:bg-gray-50'
                } transition-all duration-300`}
              >
                Collections
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className={`block w-full text-left px-4 py-3 rounded-lg ${
                  isActive('/about')
                    ? 'bg-brand-mint/10 text-brand-dark font-medium border-l-4 border-brand-mint'
                    : 'text-gray-600 hover:bg-gray-50'
                } transition-all duration-300`}
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className={`block w-full text-left px-4 py-3 rounded-lg ${
                  isActive('/contact')
                    ? 'bg-brand-mint/10 text-brand-dark font-medium border-l-4 border-brand-mint'
                    : 'text-gray-600 hover:bg-gray-50'
                } transition-all duration-300`}
              >
                Contact
              </button>
              <a
                href="tel:1-800-CABINET"
                className="block w-full mt-6 bg-brand-mint text-brand-dark px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 text-center font-medium"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
