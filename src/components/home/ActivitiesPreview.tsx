import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import meditationImg from "@/assets/meditation.jpg";
import yogaImg from "@/assets/yoga.jpg";
import communityImg from "@/assets/community.jpg";

const activities = [
  {
    image: meditationImg,
    titleEn: "Meditation Sessions",
    titleHi: "ध्यान सत्र",
    descEn: "Regular meditation sessions for inner peace and spiritual growth.",
    descHi: "आंतरिक शांति और आध्यात्मिक विकास के लिए नियमित ध्यान सत्र।"
  },
  {
    image: yogaImg,
    titleEn: "Yoga Shivirs",
    titleHi: "योग शिविर",
    descEn: "Yoga camps for physical, mental, and spiritual well-being.",
    descHi: "शारीरिक, मानसिक और आध्यात्मिक स्वास्थ्य के लिए योग शिविर।"
  },
  {
    image: communityImg,
    titleEn: "Community Gatherings",
    titleHi: "सामुदायिक कार्यक्रम",
    descEn: "Spiritual discourses and celebrations of Sri Aurobindo & The Mother.",
    descHi: "आध्यात्मिक प्रवचन और श्री अरविंद एवं श्री माँ के जयंती उत्सव।"
  }
];

const ActivitiesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Activities
          </h2>
          <h3 className="font-heading text-xl text-gold mb-6">
            हमारी गतिविधियाँ
          </h3>
          <p className="text-muted-foreground">
            Discover the various spiritual and social activities we organize for the community.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="group rounded-xl overflow-hidden bg-card shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {activity.titleEn}
                </h4>
                <p className="text-gold text-sm mb-3">{activity.titleHi}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  {activity.descEn}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.descHi}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gold" size="lg" asChild>
            <Link to="/activities">
              View All Activities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesPreview;