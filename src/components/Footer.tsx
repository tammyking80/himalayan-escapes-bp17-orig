import { Link } from 'react-router-dom';
import { Mountain, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { generateWhatsAppLink, generalInquiryMessage } from '../utils/whatsapp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/packages', label: 'Tour Packages' },
    { path: '/activities', label: 'Activities' }
  ];

  const popularDestinations = [
    { path: '/destinations', label: 'Shimla' },
    { path: '/destinations', label: 'Manali' },
    { path: '/destinations', label: 'Dharamshala' },
    { path: '/destinations', label: 'Spiti Valley' }
  ];

  const helpLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/blog', label: 'Travel Guide' },
    { path: '/gallery', label: 'Gallery' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
                <Mountain className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Himalayan Escapes</h3>
              </div>
            </div>
            <p className="text-sm mb-4 text-slate-400">
              Your trusted travel partner for unforgettable Himachal Pradesh experiences. Based in Shimla, we offer curated tours across the beautiful state.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-emerald-600 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-emerald-600 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-emerald-600 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-emerald-600 transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-emerald-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              {popularDestinations.map((dest, index) => (
                <li key={index}>
                  <Link
                    to={dest.path}
                    className="text-sm hover:text-emerald-400 transition"
                  >
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-4">Help & Support</h4>
              <ul className="space-y-2">
                {helpLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-emerald-400 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Mall Road, Shimla, Himachal Pradesh 171001</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-emerald-400 transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={18} className="text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@himalayanescapes.com" className="hover:text-emerald-400 transition">
                  info@himalayanescapes.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Quick Inquiry</h4>
              <a
                href={generateWhatsAppLink(generalInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} Himalayan Escapes. All rights reserved. | Designed for premium travel experiences</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
