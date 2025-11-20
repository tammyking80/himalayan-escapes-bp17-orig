import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/packages', label: 'Tour Packages' },
    { path: '/activities', label: 'Activities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Travel Guide' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <div className="bg-slate-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-emerald-400 transition">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@himalayanescapes.com" className="flex items-center gap-2 hover:text-emerald-400 transition">
              <Mail size={14} />
              <span>info@himalayanescapes.com</span>
            </a>
          </div>
          <div className="text-xs">
            <span>Open: Mon - Sat 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Mountain className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                  Himalayan Escapes
                </h1>
                <p className="text-xs text-slate-600 hidden md:block">Your Gateway to Himachal</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-emerald-600 transition"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      location.pathname === link.path
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
