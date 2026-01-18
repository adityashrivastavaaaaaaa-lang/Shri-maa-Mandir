import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Shield, BookOpen, Stethoscope, Users, Home } from "lucide-react";

const impactAreas = [
  { icon: BookOpen, label: "Education", labelHi: "शिक्षा" },
  { icon: Stethoscope, label: "Healthcare", labelHi: "स्वास्थ्य" },
  { icon: Users, label: "Women Empowerment", labelHi: "महिला सशक्तिकरण" },
  { icon: Home, label: "Community Development", labelHi: "सामुदायिक विकास" },
];

const Donate = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gold/10 via-saffron/5 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Support Shri Maa Mandir
            </h1>
            <h2 className="font-heading text-2xl text-gold mb-6">
              श्री माँ मंदिर को सहयोग दें
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Support Humanity – मानवता की सेवा करें
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your generous contribution helps us continue our mission of spirituality, 
              education, healthcare, and social welfare. Every donation makes a difference 
              in the lives of those we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
              Your Donation Supports
            </h2>
            <h3 className="font-heading text-xl text-gold">
              आपका दान इन क्षेत्रों में सहायता करता है
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-soft border border-border">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <area.icon className="h-7 w-7 text-gold" />
                </div>
                <p className="font-medium text-foreground text-sm">{area.label}</p>
                <p className="text-gold text-xs">{area.labelHi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Information */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-gold/20">
              <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-6">
                How to Donate / दान कैसे करें
              </h2>
              
              <div className="space-y-6">
                {/* Bank Transfer */}
                <div className="bg-cream rounded-xl p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Bank Transfer / बैंक ट्रांसफर
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Account Name:</span> Shri Maa Mandir Jan Kalyan Trust
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Bank:</span> [Contact for details]
                    </p>
                    <p className="text-muted-foreground">
                      Please contact us at <a href="mailto:shrimaamandir@gmail.com" className="text-gold hover:underline">shrimaamandir@gmail.com</a> for complete bank details.
                    </p>
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="bg-cream rounded-xl p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Direct Contact / सीधा संपर्क
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Visit our center in person or reach out via email to discuss donation options and make arrangements.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Address:</span> Sri Arvind Nagar, Jankinagar, Purnia, Bihar – 854102
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Email:</span>{" "}
                      <a href="mailto:shrimaamandir@gmail.com" className="text-gold hover:underline">
                        shrimaamandir@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-gold" />
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Trust & Transparency
              </h2>
            </div>
            <h3 className="font-heading text-lg text-gold mb-6">
              विश्वास और पारदर्शिता
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-xl p-5 border border-border">
                <p className="font-medium text-foreground mb-1">Legal Trust</p>
                <p className="text-sm text-muted-foreground">Registered charitable trust with legal documentation</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <p className="font-medium text-foreground mb-1">Annual Audits</p>
                <p className="text-sm text-muted-foreground">Regular financial audits for transparency</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <p className="font-medium text-foreground mb-1">Proper Banking</p>
                <p className="text-sm text-muted-foreground">Formal banking system for all transactions</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Shri Maa Mandir Jan Kalyan Trust operates with complete transparency. All donations are used 
              exclusively for spiritual programs, education, healthcare, and community development activities.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-foreground font-heading mb-2">
              "The giver of life is blessed with life"
            </p>
            <p className="text-gold mb-8">
              "जो जीवन देता है, उसे जीवन का आशीर्वाद मिलता है"
            </p>
            <Button variant="gold" size="xl" asChild>
              <a href="mailto:shrimaamandir@gmail.com?subject=Donation Inquiry">
                Contact to Donate / दान के लिए संपर्क करें
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;