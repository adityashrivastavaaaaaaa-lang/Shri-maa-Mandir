import { useState } from "react";
import Layout from "@/components/layout/Layout";
import meditationImg from "@/assets/meditation.jpg";
import yogaImg from "@/assets/yoga.jpg";
import communityImg from "@/assets/community.jpg";
import celebrationImg from "@/assets/celebration.jpg";
import educationImg from "@/assets/education.jpg";
import womenImg from "@/assets/women-empowerment.jpg";
import healthImg from "@/assets/health.jpg";
import templeImg from "@/assets/temple-drone.jpg";
import relicsImg from "@/assets/sacred-relics.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const categories = [
  { id: "all", labelEn: "All", labelHi: "सभी" },
  { id: "meditation", labelEn: "Meditation", labelHi: "ध्यान" },
  { id: "yoga", labelEn: "Yoga", labelHi: "योग" },
  { id: "events", labelEn: "Events", labelHi: "कार्यक्रम" },
  { id: "service", labelEn: "Community Service", labelHi: "सेवा" },
];

const galleryImages = [
  { src: templeImg, category: "events", titleEn: "Shri Maa Mandir Temple", titleHi: "श्री माँ मंदिर" },
  { src: meditationImg, category: "meditation", titleEn: "Meditation Session", titleHi: "ध्यान सत्र" },
  { src: yogaImg, category: "yoga", titleEn: "Yoga Camp", titleHi: "योग शिविर" },
  { src: communityImg, category: "events", titleEn: "Community Gathering", titleHi: "सामुदायिक सभा" },
  { src: celebrationImg, category: "events", titleEn: "Spiritual Celebration", titleHi: "आध्यात्मिक उत्सव" },
  { src: relicsImg, category: "events", titleEn: "Sacred Relics", titleHi: "पवित्र अवशेष" },
  { src: educationImg, category: "service", titleEn: "Education Program", titleHi: "शिक्षा कार्यक्रम" },
  { src: womenImg, category: "service", titleEn: "Women Empowerment", titleHi: "महिला सशक्तिकरण" },
  { src: healthImg, category: "service", titleEn: "Health Camp", titleHi: "स्वास्थ्य शिविर" },
  { src: gallery1, category: "events", titleEn: "Temple Premises", titleHi: "मंदिर का परिसर" },
  { src: gallery2, category: "events", titleEn: "Evening View", titleHi: "शाम का दृश्य" },
  { src: gallery3, category: "events", titleEn: "Temple Architecture", titleHi: "मंदिर की वास्तुकला" },
  { src: gallery4, category: "events", titleEn: "Sacred Atmosphere", titleHi: "पवित्र वातावरण" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gallery
            </h1>
            <h2 className="font-heading text-2xl text-gold mb-6">
              गैलरी
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Glimpses of our spiritual journey, community activities, and moments of devotion.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                  ? "bg-gold text-primary-foreground"
                  : "bg-cream text-foreground hover:bg-gold/10"
                  }`}
              >
                {category.labelEn}
                <span className="text-xs ml-1 opacity-70">({category.labelHi})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={image.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-primary-foreground font-medium">{image.titleEn}</p>
                      <p className="text-primary-foreground/80 text-sm">{image.titleHi}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-primary-foreground text-lg hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              Close ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.titleEn}
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-primary-foreground text-lg font-heading">{selectedImage.titleEn}</p>
              <p className="text-gold">{selectedImage.titleHi}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;