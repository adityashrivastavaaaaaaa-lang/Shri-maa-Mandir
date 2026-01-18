import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, hsla(30, 20%, 15%, 0.5) 0%, hsla(30, 20%, 15%, 0.75) 100%)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* English Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 leading-tight">
            Shri Maa Mandir
          </h1>
          
          {/* Hindi Heading */}
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-gold mb-6">
            श्री माँ मंदिर
          </h2>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-cream/90 mb-4 font-light">
            A Center for Spirituality and Service
          </p>
          <p className="text-lg md:text-xl text-gold/90 mb-8">
            साधना और सेवा का केंद्र
          </p>
          
          {/* Inspiration text */}
          <div className="mb-10 space-y-2">
            <p className="text-cream/80 text-base md:text-lg">
              Inspired by Sri Aurobindo, The Mother, and the Spirit of Auroville
            </p>
            <p className="text-gold/80 text-sm md:text-base">
              श्री अरविंद, श्री माँ और ऑरोविल की प्रेरणा से
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/about">
                Explore Our Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/donate">
                Support Us / सहयोग करें
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;