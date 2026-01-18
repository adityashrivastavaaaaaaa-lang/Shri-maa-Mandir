import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import meditationImg from "@/assets/meditation.jpg";
import yogaImg from "@/assets/yoga.jpg";
import communityImg from "@/assets/community.jpg";
import celebrationImg from "@/assets/celebration.jpg";

const images = [
  { src: meditationImg, alt: "Meditation session" },
  { src: yogaImg, alt: "Yoga camp" },
  { src: communityImg, alt: "Community gathering" },
  { src: celebrationImg, alt: "Spiritual celebration" },
];

const GalleryPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Gallery
          </h2>
          <h3 className="font-heading text-xl text-gold mb-6">
            गैलरी
          </h3>
          <p className="text-muted-foreground">
            Glimpses of our spiritual journey and community activities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="spiritual" size="lg" asChild>
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;