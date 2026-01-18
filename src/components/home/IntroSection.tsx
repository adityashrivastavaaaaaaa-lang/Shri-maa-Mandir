import { Heart, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    titleEn: "Spirituality",
    titleHi: "आध्यात्मिकता",
    descEn: "A path of inner awakening through meditation, yoga, and spiritual practices.",
    descHi: "ध्यान, योग और आध्यात्मिक साधनाओं के माध्यम से आंतरिक जागृति का मार्ग।"
  },
  {
    icon: Heart,
    titleEn: "Service",
    titleHi: "सेवा",
    descEn: "Dedicated to social welfare, education, and community development.",
    descHi: "समाज कल्याण, शिक्षा और सामुदायिक विकास के लिए समर्पित।"
  },
  {
    icon: Users,
    titleEn: "Harmony",
    titleHi: "सद्भाव",
    descEn: "Creating unity and collective harmony inspired by Auroville's ideals.",
    descHi: "ऑरोविल के आदर्शों से प्रेरित एकता और सामूहिक सद्भाव का निर्माण।"
  }
];

const IntroSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Welcome to Shri Maa Mandir
          </h2>
          <h3 className="font-heading text-xl md:text-2xl text-gold mb-6">
            श्री माँ मंदिर में आपका स्वागत है
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Shri Maa Mandir is a spiritual and social center dedicated to inner awakening, 
            meditation, yoga, education, and social welfare. Inspired by Sri Aurobindo and 
            The Mother, it works to create harmony, happiness, and prosperity in society.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            श्री माँ मंदिर एक आध्यात्मिक एवं सामाजिक केंद्र है, जो ध्यान, योग, शिक्षा और 
            समाज सेवा के माध्यम से समाज के कल्याण के लिए कार्य करता है।
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border group"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="h-7 w-7 text-gold" />
              </div>
              <h4 className="font-heading text-xl font-semibold text-foreground mb-1">
                {feature.titleEn}
              </h4>
              <p className="text-gold text-sm mb-4">{feature.titleHi}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                {feature.descEn}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.descHi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;