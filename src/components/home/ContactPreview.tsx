import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const ContactPreview = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                Get in Touch
              </h2>
              <h3 className="font-heading text-xl text-gold mb-6">
                हमसे संपर्क करें
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We welcome devotees, volunteers, and seekers. Reach out to us to learn more 
                about our programs or to contribute to our mission.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address / पता</p>
                    <p className="text-sm text-muted-foreground">
                      Sri Arvind Nagar, Jankinagar,<br />
                      Purnia, Bihar – 854102
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email / ईमेल</p>
                    <a 
                      href="mailto:shrimaamandir@gmail.com"
                      className="text-sm text-gold hover:underline"
                    >
                      shrimaamandir@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Decorative Box */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-gold/10">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🙏</span>
                </div>
                <p className="font-heading text-lg text-foreground mb-2">
                  "In the pursuit of divine consciousness, we find our true purpose"
                </p>
                <p className="text-gold text-sm mb-6">
                  "दिव्य चेतना की खोज में, हम अपना सच्चा उद्देश्य पाते हैं"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">
                    Inspired by Sri Aurobindo & The Mother
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;