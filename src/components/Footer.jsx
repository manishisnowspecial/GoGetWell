import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'FAQ', href: '/support' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Login', href: '/login' },
  { label: 'Get Started', href: '/demo' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Security', href: '/security' },
  { label: 'Resources', href: '/resources' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Editorial Policy', href: '/resources#editorial-policy' },
  { label: 'Pricing Policy', href: '/pricing#pricing-policy' },
];

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-cyan-800 to-cyan-950 text-white pt-12 pb-6 px-4 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-cyan-700 pb-8">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="text-2xl font-extrabold tracking-tight mb-2">GoGetWell.AI</div>
          <div className="text-cyan-100 text-sm mb-2">Empowering healthcare facilitators with AI-driven tools for growth, efficiency, and patient care.</div>
          <div className="flex space-x-4">
            <a 
              href="https://x.com/gogetwellai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-300 text-2xl" 
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.linkedin.com/company/gogetwellai/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-300 text-2xl" 
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <div className="font-bold mb-2 text-cyan-200">Product</div>
            <ul className="space-y-1">
              {links.slice(0, 6).map(link => (
                <li key={link.href}><a href={link.href} className="hover:underline hover:text-cyan-300 transition">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 text-cyan-200">Company</div>
            <ul className="space-y-1">
              {links.slice(6, 11).map(link => (
                <li key={link.href}><a href={link.href} className="hover:underline hover:text-cyan-300 transition">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 text-cyan-200">Legal & More</div>
            <ul className="space-y-1">
              {links.slice(11).map(link => (
                <li key={link.href}><a href={link.href} className="hover:underline hover:text-cyan-300 transition">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-sm opacity-80 mt-6">
        Made with <span className="text-pink-300 text-lg align-middle">♥</span> for your well-being — GoGetWell.AI
      </div>
    </footer>
  );
}

export default Footer; 