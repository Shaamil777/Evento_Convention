import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Facilities', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
        {/* Animated Background Layer */}
        <div
          className={`absolute inset-0 bg-white/10 backdrop-blur-md shadow-lg transition-transform duration-500 ease-out ${
            scrolled ? 'translate-y-0' : '-translate-y-full'
          }`}
        />

        {/* Content Layer */}
        <div className="relative container mx-auto px-6 py-3"> {/* 👈 Reduced from py-4 to py-3 */}
          <div className="flex items-center justify-between">
            {/* Logo Image */}
            <div className="flex items-center">
              <a href="#">
                <img
                  src={logo}
                  alt="Seaside Logo"
                  className="w-24 h-auto object-contain transition-all duration-300" // 👈 Slightly smaller width (was w-28)
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center navbar-links space-x-8 text-white text-md">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-gray-300 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Booking Button & Menu */}
            <div className="flex items-center space-x-4">
              <button className="hidden lg:block bg-orange-500 navbar-booking hover:bg-orange-600 text-white px-5 py-1.5 text-sm font-medium transition rounded-full"> {/* 👈 Smaller padding */}
                BOOKING
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white"
              >
                {menuOpen ? <X size={26} /> : <Menu size={26} />} {/* 👈 Slightly smaller icons */}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 lg:hidden">
          <nav className="flex flex-col navbar-links items-center justify-center h-full space-y-8 text-white text-xl">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-gray-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
