import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, LinkedinIcon, Twitter } from "lucide-react";
import mmm_logo from "@/assets/MMM_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { to: "/about", label: "About Us" },
      { to: "/services", label: "Services" },
      { to: "/careers", label: "Careers" },
      { to: "/news", label: "News & Insights" },
    ],
    services: [
      { to: "/services", label: "Financial Planning" },
      { to: "/services", label: "Investment Advisory" },
      { to: "/services", label: "Risk Management" },
      { to: "/services", label: "Business Consulting" },
    ],
    resources: [
      { to: "/faq", label: "FAQ" },
      { to: "/resources", label: "Resources" },
      { to: "/blog", label: "Blog" },
      { to: "/testimonials", label: "Testimonials" },
    ],
    legal: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
      { to: "/compliance", label: "Compliance" },
      { to: "/sitemap", label: "Sitemap" },
    ],
  };

  return (
    <footer className="bg-dark-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <img 
              src={mmm_logo} 
              alt="MMM" 
              className="h-20 w-20 sm:h-16q sm:w-64 text-primary flex-shrink-0"
            />
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Empowering individuals and businesses to make smarter financial decisions. 
              We're committed to revolutionizing financial solutions for a more resilient, 
              profitable, and sustainable future.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-base">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>info@multimetricsmarketing.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={`${link.to}-${index}`}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-base text-muted-foreground">
              © {currentYear} Multi Metrics Marketing. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;