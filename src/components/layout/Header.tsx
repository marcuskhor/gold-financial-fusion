import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import mmm_logo from "@/assets/MMM_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo Space */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
              src={mmm_logo} 
              alt="MMM" 
              className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain flex-shrink-0"
            />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-sm">
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-xl font-medium transition-colors hover:text-primary ${
                    isActive(link.to) ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
                <Button size="sm" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;