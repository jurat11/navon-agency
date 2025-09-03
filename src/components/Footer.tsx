import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">NAVON Agency</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crafting innovative digital solutions for businesses worldwide. 
              We transform ideas into reality with cutting-edge technology and creative design.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-xl font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail className="w-5 h-5 mr-3" />
                <span>hello@navonagency.com</span>
              </div>
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                <Phone className="w-5 h-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                <MapPin className="w-5 h-5 mr-3" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          
          {/* Services Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Websites for Businesses", "Telegram Bots", "Designs", "Other Solutions"].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 NAVON Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;