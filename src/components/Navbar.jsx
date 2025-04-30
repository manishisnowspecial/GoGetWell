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
    <nav className={`bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-500 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0" onClick={closeMenu}>
              <img src={logo} alt="GoGetWell Logo" className="h-8 sm:h-10 w-auto transition-all duration-300" />
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            <ul className="flex space-x-4 lg:space-x-6">
              {menu.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `text-white hover:text-cyan-200 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 ${
                        isActive ? 'bg-cyan-800 text-white shadow-sm' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-2 lg:space-x-4 ml-4 lg:ml-6 pl-4 lg:pl-6 border-l border-cyan-500">
              <NavLink
                to="/login"
                className="text-white hover:text-cyan-200 px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 hover:bg-cyan-800/50"
              >
                Login
              </NavLink>
              <NavLink
                to="/demo"
                className="bg-white text-cyan-700 hover:bg-cyan-50 px-3 lg:px-5 py-2 rounded-full text-sm lg:text-base font-semibold shadow-sm transition-all duration-200 hover:shadow-md whitespace-nowrap"
              >
                Get Started
              </NavLink>
            </div>
          </div>

          {/* Tablet menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-200 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
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

      {/* Mobile/Tablet menu */}
      <div 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-cyan-800 transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-cyan-700 transition-all duration-200 ${
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
              className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-cyan-700 transition-all duration-200"
            >
              Login
            </NavLink>
            <NavLink
              to="/demo"
              onClick={closeMenu}
              className="block px-3 py-3 mt-2 rounded-md text-base font-medium bg-white text-cyan-700 hover:bg-cyan-50 transition-all duration-200 text-center"
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