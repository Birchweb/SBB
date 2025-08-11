import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <span className="font-heading font-semibold text-xl">Support binnen bereik</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Praktische en resultaatgerichte ondersteuning voor midden- en kleinbedrijven. 
              Betrokken, persoonlijk en zonder onnodige ruis.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">info@supportbinnenbereik.nl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+31 6 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">Nederland</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Snelle links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/over-mij" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Over mij
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Diensten</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Advies & Consultancy</li>
              <li>Interim Management</li>
              <li>Coaching & Training</li>
              <li>Projectbegeleiding</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Support binnen bereik. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;