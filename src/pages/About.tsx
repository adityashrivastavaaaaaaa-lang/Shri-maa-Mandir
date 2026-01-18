import Layout from "@/components/layout/Layout";
import { Calendar, BookOpen, Award } from "lucide-react";
import templeImg from "@/assets/temple-drone.jpg";
import relicsImg from "@/assets/sacred-relics.jpg";

const milestones = [
  { year: "1994", eventEn: "Foundation vision conceived at Jankinagar", eventHi: "जनकीनगर में संस्थापना दृष्टि की कल्पना" },
  { year: "1996", eventEn: "Land donated and Trust established with 12 trustees", eventHi: "भूमि दान और 12 न्यासियों के साथ ट्रस्ट की स्थापना" },
  { year: "1998", eventEn: "Sacred relics received from Pondicherry", eventHi: "पांडिचेरी से पवित्र अवशेष प्राप्त" },
  { year: "2010", eventEn: "Grand temple construction completed", eventHi: "भव्य मंदिर निर्माण पूर्ण" },
];

const values = [
  {
    icon: BookOpen,
    titleEn: "Knowledge",
    titleHi: "ज्ञान",
    descEn: "Value-based and holistic education integrating academic excellence with moral and spiritual development."
  },
  {
    icon: Calendar,
    titleEn: "Celebration",
    titleHi: "उत्सव",
    descEn: "Annual celebrations of Sri Aurobindo's birthday (15 Aug), The Mother's birthday (21 Feb), and Foundation Day (2 Feb)."
  },
  {
    icon: Award,
    titleEn: "Service",
    titleHi: "सेवा",
    descEn: "Social welfare initiatives including Self-Help Groups, sports events, and community development programs."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Us
            </h1>
            <h2 className="font-heading text-2xl text-gold mb-6">
              हमारे बारे में
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover the spiritual journey and noble mission of Shri Maa Mandir.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Our Story / हमारी कहानी
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Shri Maa Mandir, Jankinagar Khunt is a revered spiritual and social institution 
                established with the noble objective of promoting devotion, social welfare, 
                women empowerment, education, and holistic human development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                श्री माँ मंदिर, जनकीनगर खुंट एक सम्मानित आध्यात्मिक और सामाजिक संस्था है जो 
                भक्ति, समाज कल्याण, महिला सशक्तिकरण, शिक्षा और समग्र मानव विकास को बढ़ावा देने 
                के उद्देश्य से स्थापित की गई है।
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The institution actively undertakes numerous social welfare and women empowerment 
                initiatives, including the formation of Self-Help Groups (SHGs), sports events 
                for youth development, and Yoga Shivirs for physical, mental, and spiritual well-being.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={templeImg} 
                alt="Shri Maa Mandir Temple" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Sacred Relics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-card">
              <img 
                src={relicsImg} 
                alt="Sacred Relics" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Sacred Heritage / पवित्र विरासत
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A spiritually significant moment occurred on 2nd February 1998, when sacred relics 
                were received from Pondicherry. Through years of collective effort, devotion, and 
                community participation, a grand temple structure was eventually constructed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The sacred relics were ceremoniously transferred and installed in the grand temple 
                on 2nd February 2010, marking a defining moment in the institution's journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
              Our Journey / हमारी यात्रा
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-gold">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pt-4">
                    <p className="text-foreground font-medium">{milestone.eventEn}</p>
                    <p className="text-gold text-sm">{milestone.eventHi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
              Our Values / हमारे मूल्य
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-card border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-1">{value.titleEn}</h4>
                <p className="text-gold text-sm mb-4">{value.titleHi}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-to-br from-gold/10 via-saffron/5 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Vision & Mission / दृष्टि और मिशन
            </h2>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-gold/20">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Shri Maa Mandir Jan Kalyan Trust continues to operate in alignment with the spiritual 
                and humanistic principles inspired by Auroville, emphasizing unity, integral development, 
                collective harmony, and selfless service to humanity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                श्री माँ मंदिर जनकल्याण ट्रस्ट ऑरोविल से प्रेरित आध्यात्मिक और मानवतावादी सिद्धांतों 
                के अनुरूप कार्य करता है, जो एकता, समग्र विकास, सामूहिक सद्भाव और मानवता की 
                निःस्वार्थ सेवा पर जोर देता है।
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;