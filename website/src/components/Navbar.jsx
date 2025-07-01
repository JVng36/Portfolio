import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-green-600">
              Your Logo
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-green-700 hover:text-green-900 px-3 py-2 text-sm font-medium transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-green-700 hover:text-green-900 px-3 py-2 text-sm font-medium transition duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-green-700 hover:text-green-900 px-3 py-2 text-sm font-medium transition duration-300"
              >
                Services
              </a>
              <a
                href="#"
                className="text-green-700 hover:text-green-900 px-3 py-2 text-sm font-medium transition duration-300"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              >
                Contact
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
