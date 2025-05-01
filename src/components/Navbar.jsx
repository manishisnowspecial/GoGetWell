import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { scrollToTop } from '../utils/scrollUtils';
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
    { to: '/features', label: 'Features' },
    { to: '/support', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    scrollToTop();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-cyan-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center" onClick={closeMenu}>
              <img src={logo} alt="GoGetWell Logo" className="h-8 w-auto" />
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <ul className="flex items-center space-x-4">
              {menu.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md
                      ${isActive
                        ? 'text-white bg-white/20'
                        : 'text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-white/20">
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="text-white hover:bg-white/10 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200"
              >
                Login
              </NavLink>
              <NavLink
                to="/demo"
                onClick={closeMenu}
                className="bg-white text-cyan-600 hover:bg-cyan-50 px-4 py-2 text-sm font-medium rounded-md shadow-sm hover:shadow transition-all duration-200"
              >
                Get Started
              </NavLink>
            </div>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 transition-all duration-200"
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
      {isOpen && (
        <div className="lg:hidden bg-cyan-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menu.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200
                  ${isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="border-t border-white/10 mt-4 pt-4">
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-all duration-200"
              >
                Login
              </NavLink>
              <NavLink
                to="/demo"
                onClick={closeMenu}
                className="block px-3 py-2 mt-2 rounded-md text-base font-medium bg-white text-cyan-600 hover:bg-cyan-50 transition-all duration-200 text-center"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 