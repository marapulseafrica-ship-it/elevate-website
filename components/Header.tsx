
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { View } from '../types';

interface HeaderProps {
  onNavigate: (view: View) => void;
  currentView: View;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (view: View) => {
    onNavigate(view);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo Section */}
          <button 
            onClick={() => handleNavigate('home')}
            className="flex items-center py-2 text-left hover:opacity-80 transition-opacity"
          >
            <Logo className="h-12 w-auto" />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => handleNavigate('home')}
              className={`font-medium transition-colors ${currentView === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-900'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigate('about')}
              className={`font-medium transition-colors ${currentView === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-900'}`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigate('services')}
              className={`font-medium transition-colors ${currentView === 'services' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-900'}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigate('faq')}
              className={`font-medium transition-colors ${currentView === 'faq' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-900'}`}
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavigate('contact')}
              className={`font-medium transition-colors ${currentView === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-900'}`}
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavigate('booking')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-semibold transition-all shadow-sm"
            >
              Book a Call
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button 
              onClick={() => handleNavigate('home')}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${currentView === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigate('about')}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${currentView === 'about' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigate('services')}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${currentView === 'services' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigate('faq')}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${currentView === 'faq' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavigate('contact')}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${currentView === 'contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Contact
            </button>
            <div className="pt-4">
              <button 
                onClick={() => handleNavigate('booking')}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-md font-bold text-center shadow-lg active:scale-95 transition-transform"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
