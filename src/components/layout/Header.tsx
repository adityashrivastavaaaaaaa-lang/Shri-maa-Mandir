import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { path: "/", labelEn: "Home", labelHi: "होम" },
  { path: "/about", labelEn: "About", labelHi: "परिचय" },
  { path: "/activities", labelEn: "Activities", labelHi: "गतिविधियाँ" },
  { path: "/projects", labelEn: "Future Projects", labelHi: "भविष्य की योजनाएँ" },
  { path: "/donate", labelEn: "Donate", labelHi: "दान करें" },
  { path: "/gallery", labelEn: "Gallery", labelHi: "गैलरी" },
  { path: "/contact", labelEn: "Contact", labelHi: "संपर्क" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Shri Maa Mandir Logo" 
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg font-semibold text-gold leading-tight">
                Shri Maa Mandir
              </h1>
              <p className="text-xs text-muted-foreground">श्री माँ मंदिर</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-gold bg-gold/10"
                    : "text-foreground/80 hover:text-gold hover:bg-gold/5"
                }`}
              >
                <span>{item.labelEn}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button variant="gold" size="sm" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-gold bg-gold/10"
                      : "text-foreground/80 hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  <span>{item.labelEn}</span>
                  <span className="text-muted-foreground text-sm ml-2">({item.labelHi})</span>
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/donate" onClick={() => setIsOpen(false)}>
                    Donate Now / दान करें
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;