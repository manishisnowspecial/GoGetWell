import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../logo/logo-dark-full.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/support', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-500 sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0" onClick={closeMenu}>
              <img src={logo} alt="GoGetWell Logo" className="h-8 w-auto" />
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <ul className="flex space-x-4">
              {menu.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `text-white hover:text-cyan-200 px-3 py-2 rounded-md text-sm font-medium transition ${
                        isActive ? 'bg-cyan-800 text-white' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-cyan-500">
              <NavLink
                to="/login"
                className="text-white hover:text-cyan-200 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/demo"
                className="bg-white text-cyan-700 hover:bg-cyan-50 px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition-all"
              >
                Get Started
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-200 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-cyan-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-cyan-700 transition ${
                  isActive ? 'bg-cyan-900' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="border-t border-cyan-700 mt-4 pt-4">
            <NavLink
              to="/login"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-cyan-700 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/demo"
              onClick={closeMenu}
              className="block px-3 py-2 mt-2 rounded-md text-base font-medium bg-white text-cyan-700 hover:bg-cyan-50 transition text-center"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 