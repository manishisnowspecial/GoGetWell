import React from 'react';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  };

  return (
    <footer className="bg-cyan-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">GoGetWell</h3>
            <p className="text-cyan-200 mb-4">
              Empowering healthcare facilitators with innovative solutions for medical tourism.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/gogetwellai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-600 hover:text-cyan-700 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/gogetwellai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-600 hover:text-cyan-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:hello@gogetwell.ai" 
                className="text-cyan-600 hover:text-cyan-700 transition-colors"
                aria-label="Email"
              >
                <EnvelopeIcon className="h-6 w-6" />
              </a>
              <a 
                href="tel:+919811396858" 
                className="text-cyan-600 hover:text-cyan-700 transition-colors"
                aria-label="Phone"
              >
                <PhoneIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/features" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Features</Link>
              </li>
              <li>
                <Link to="/pricing" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Pricing</Link>
              </li>
              <li>
                <Link to="/careers" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Careers</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="/resources" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Resources</Link>
              </li>
              <li>
                <Link to="/integrations" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Integrations</Link>
              </li>
              <li>
                <Link to="/editorial-policy" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Editorial Policy</Link>
              </li>
              <li>
                <Link to="/support" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Terms of Service</Link>
              </li>
              <li>
                <Link to="/security" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Security</Link>
              </li>
              <li>
                <Link to="/pricing" onClick={handleLinkClick} className="text-cyan-200 hover:text-white">Pricing Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-800 mt-12 pt-8 text-center text-cyan-200">
          <p>&copy; {new Date().getFullYear()} GoGetWell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 