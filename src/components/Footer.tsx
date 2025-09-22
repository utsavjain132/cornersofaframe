import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-terracotta">
              cornersofaframe
            </h3>
            <p className="text-cream/80 mb-4 leading-relaxed">
              Handcrafted treasures made with love and attention to detail. 
              Bringing warmth and beauty to your everyday life.
            </p>
            <div className="flex items-center text-cream/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-terracotta fill-current" />
              <span>in our workshop</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-cream/80 hover:text-terracotta transition-colors">
                Home
              </a>
              <a href="#products" className="block text-cream/80 hover:text-terracotta transition-colors">
                Products
              </a>
              <a href="#about" className="block text-cream/80 hover:text-terracotta transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-cream/80 hover:text-terracotta transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-terracotta" />
                <span className="text-cream/80">hello@cornersofaframe.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-terracotta" />
                <span className="text-cream/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-terracotta" />
                <span className="text-cream/80">Our Artisan Workshop</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60">
            © 2024 cornersofaframe. All rights reserved. Handcrafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;