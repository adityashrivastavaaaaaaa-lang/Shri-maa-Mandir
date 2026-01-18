import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Heart, Home, Users } from "lucide-react";
import educationImg from "@/assets/education.jpg";

const projects = [
  {
    icon: GraduationCap,
    titleEn: "Free School",
    titleHi: "निःशुल्क विद्यालय",
    descEn: "Education for underprivileged children"
  },
  {
    icon: Heart,
    titleEn: "Free Hospital",
    titleHi: "निःशुल्क अस्पताल",
    descEn: "Healthcare for the community"
  },
  {
    icon: Users,
    titleEn: "Women Empowerment",
    titleHi: "महिला सशक्तिकरण",
    descEn: "Skills and self-reliance"
  },
  {
    icon: Home,
    titleEn: "Rural Development",
    titleHi: "ग्रामीण विकास",
    descEn: "Sustainable village growth"
  }
];

const ProjectsPreview = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img 
              src={educationImg} 
              alt="Future Projects" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Future Projects
            </h2>
            <h3 className="font-heading text-xl text-gold mb-6">
              भविष्य की योजनाएँ
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our vision extends to creating lasting impact through education, healthcare, 
              and community development initiatives that transform lives.
            </p>

            {/* Project Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-4 border border-border hover:border-gold/30 transition-colors"
                >
                  <project.icon className="h-6 w-6 text-gold mb-2" />
                  <h4 className="font-medium text-foreground text-sm">{project.titleEn}</h4>
                  <p className="text-gold text-xs">{project.titleHi}</p>
                  <p className="text-muted-foreground text-xs mt-1">{project.descEn}</p>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <Link to="/projects">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;