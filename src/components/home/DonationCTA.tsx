import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const DonationCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gold/10 via-saffron/5 to-gold/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-8">
            <Heart className="h-10 w-10 text-gold" />
          </div>

          {/* Headings */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Support Shri Maa Mandir – Support Humanity
          </h2>
          <h3 className="font-heading text-xl md:text-2xl text-gold mb-8">
            श्री माँ मंदिर को सहयोग दें – मानवता की सेवा करें
          </h3>

          {/* Message */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            Your generous contribution helps us continue our mission of spirituality, 
            education, and social welfare. Every donation makes a difference.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            आपका उदार योगदान आध्यात्मिकता, शिक्षा और समाज कल्याण के हमारे मिशन को 
            जारी रखने में मदद करता है। हर दान से फर्क पड़ता है।
          </p>

          {/* Trust message */}
          <div className="bg-card rounded-xl p-6 mb-10 shadow-soft border border-gold/20 max-w-xl mx-auto">
            <p className="text-sm text-foreground font-medium mb-2">
              🕉️ We maintain complete transparency in our operations
            </p>
            <p className="text-xs text-muted-foreground">
              All donations are used for spiritual programs, education, healthcare, and community development.
            </p>
          </div>

          {/* CTA */}
          <Button variant="gold" size="xl" asChild>
            <Link to="/donate">
              Donate Now / दान करें
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;