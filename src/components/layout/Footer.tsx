import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-cream-dark border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shri Maa Mandir" className="h-14 w-14 object-contain" />
              <div>
                <h3 className="font-heading text-xl font-semibold text-gold">Shri Maa Mandir</h3>
                <p className="text-sm text-muted-foreground">श्री माँ मंदिर</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A spiritual and social center inspired by Sri Aurobindo, The Mother, and the spirit of Auroville.
            </p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              श्री अरविंद, श्री माँ और ऑरोविल की प्रेरणा से।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links / त्वरित लिंक
            </h4>
            <ul className="space-y-2">
              {[
                { path: "/about", label: "About Us / परिचय" },
                { path: "/activities", label: "Activities / गतिविधियाँ" },
                { path: "/projects", label: "Future Projects / योजनाएँ" },
                { path: "/gallery", label: "Gallery / गैलरी" },
                { path: "/donate", label: "Donate / दान करें" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Contact / संपर्क
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Sri Arvind Nagar, Jankinagar,<br />
                    Purnia, Bihar – 854102
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a
                  href="mailto:shrimaamandir@gmail.com"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  shrimaamandir@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Our Mission / हमारा उद्देश्य
            </h4>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "Service • Spirituality • Social Harmony"
            </p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              सेवा • साधना • सामाजिक सद्भाव
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Inspired by the Spirit of Auroville
              </p>
              <p className="text-xs text-muted-foreground">
                ऑरोविल की भावना से प्रेरित
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shri Maa Mandir Jan Kalyan Trust. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            श्री माँ मंदिर जनकल्याण ट्रस्ट
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;