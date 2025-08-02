import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-wood-900 text-wood-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-wood-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-xl text-wood-100">WoodCraft</span>
            </div>
            <p className="text-wood-200 text-sm leading-relaxed">
              Handcrafted wooden furniture made with passion and precision. 
              Each piece tells a story of traditional craftsmanship and modern design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-wood-300 hover:text-wood-100 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-wood-300 hover:text-wood-100 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-wood-300 hover:text-wood-100 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-wood-100">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/furniture" className="block text-wood-200 hover:text-wood-100 transition-colors text-sm">
                Our Furniture
              </Link>
              <Link to="/custom" className="block text-wood-200 hover:text-wood-100 transition-colors text-sm">
                Custom Orders
              </Link>
              <Link to="/about" className="block text-wood-200 hover:text-wood-100 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-wood-200 hover:text-wood-100 transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-wood-100">Services</h3>
            <div className="space-y-2">
              <p className="text-wood-200 text-sm">Custom Furniture Design</p>
              <p className="text-wood-200 text-sm">Furniture Restoration</p>
              <p className="text-wood-200 text-sm">Wood Finishing</p>
              <p className="text-wood-200 text-sm">Installation Service</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-wood-100">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-wood-400 flex-shrink-0" />
                <span className="text-wood-200 text-sm">
                  123 Craftsman Lane<br />
                  Woodville, WV 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-wood-400 flex-shrink-0" />
                <span className="text-wood-200 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-wood-400 flex-shrink-0" />
                <span className="text-wood-200 text-sm">hello@woodcraft.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-wood-800 mt-8 pt-8 text-center">
          <p className="text-wood-300 text-sm">
            © 2024 WoodCraft. All rights reserved. Handcrafted with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
