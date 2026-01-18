import Layout from "@/components/layout/Layout";
import { GraduationCap, Heart, Home, Users, Briefcase, Target } from "lucide-react";
import educationImg from "@/assets/education.jpg";
import healthImg from "@/assets/health.jpg";
import womenImg from "@/assets/women-empowerment.jpg";

const projects = [
  {
    icon: GraduationCap,
    image: educationImg,
    titleEn: "Free School for Poor Children",
    titleHi: "गरीब बच्चों के लिए निःशुल्क विद्यालय",
    descEn: "Establishing a comprehensive educational institution that provides quality, value-based education to underprivileged children. The school will integrate Sri Aurobindo's integral education principles, combining academic excellence with moral, physical, and spiritual development.",
    descHi: "एक व्यापक शैक्षणिक संस्थान की स्थापना जो वंचित बच्चों को गुणवत्तापूर्ण, मूल्य-आधारित शिक्षा प्रदान करे। विद्यालय श्री अरविंद की समग्र शिक्षा के सिद्धांतों को एकीकृत करेगा।",
    status: "Planned"
  },
  {
    icon: Heart,
    image: healthImg,
    titleEn: "Free Hospital and Health Center",
    titleHi: "निःशुल्क अस्पताल और स्वास्थ्य केंद्र",
    descEn: "Creating a healthcare facility that provides free medical services to the community, including regular health camps, preventive care, and treatment for common ailments. The center will also promote holistic health through yoga and natural healing.",
    descHi: "एक स्वास्थ्य सुविधा का निर्माण जो समुदाय को मुफ्त चिकित्सा सेवाएं प्रदान करे, जिसमें नियमित स्वास्थ्य शिविर, निवारक देखभाल और सामान्य बीमारियों का उपचार शामिल है।",
    status: "Planned"
  },
  {
    icon: Users,
    image: womenImg,
    titleEn: "Women Empowerment Programs",
    titleHi: "महिला सशक्तिकरण कार्यक्रम",
    descEn: "Expanding Self-Help Groups (SHGs) and skill development programs to empower women economically and socially. Programs include vocational training, financial literacy, and entrepreneurship development to help women become self-reliant.",
    descHi: "महिलाओं को आर्थिक और सामाजिक रूप से सशक्त बनाने के लिए स्वयं सहायता समूहों (SHGs) और कौशल विकास कार्यक्रमों का विस्तार। कार्यक्रमों में व्यावसायिक प्रशिक्षण, वित्तीय साक्षरता शामिल है।",
    status: "Expanding"
  },
  {
    icon: Briefcase,
    image: null,
    titleEn: "Home-Based Businesses",
    titleHi: "घरेलू व्यवसाय",
    descEn: "Supporting community members, especially women, in establishing sustainable home-based businesses. This includes providing training, resources, and market linkages for products like handicrafts, food processing, and other cottage industries.",
    descHi: "समुदाय के सदस्यों, विशेष रूप से महिलाओं को टिकाऊ घरेलू व्यवसाय स्थापित करने में सहायता। इसमें हस्तशिल्प, खाद्य प्रसंस्करण जैसे उत्पादों के लिए प्रशिक्षण प्रदान करना शामिल है।",
    status: "Planned"
  },
  {
    icon: Home,
    image: null,
    titleEn: "Rural Development",
    titleHi: "ग्रामीण विकास",
    descEn: "Comprehensive rural development initiatives including infrastructure improvement, sustainable agriculture practices, clean water access, and sanitation programs. Creating model villages inspired by Auroville's sustainable living principles.",
    descHi: "व्यापक ग्रामीण विकास पहल जिसमें बुनियादी ढांचे में सुधार, टिकाऊ कृषि प्रथाएं, स्वच्छ पानी की पहुंच और स्वच्छता कार्यक्रम शामिल हैं।",
    status: "Planned"
  }
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Future Projects
            </h1>
            <h2 className="font-heading text-2xl text-gold mb-6">
              भविष्य की योजनाएँ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our vision extends beyond spiritual practice to create lasting social impact through 
              education, healthcare, and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gold/10 via-saffron/5 to-gold/10 rounded-2xl p-8 text-center">
              <Target className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Our Long-Term Vision / हमारी दीर्घकालिक दृष्टि
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To transform the region into a model of integrated development where spirituality, 
                education, health, and prosperity work together for the upliftment of all sections 
                of society, inspired by the ideals of Auroville.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Image or Icon Card */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {project.image ? (
                    <div className="rounded-2xl overflow-hidden shadow-card">
                      <img 
                        src={project.image} 
                        alt={project.titleEn}
                        className="w-full h-full object-cover aspect-[4/3]"
                      />
                    </div>
                  ) : (
                    <div className="rounded-2xl bg-cream aspect-[4/3] flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center">
                        <project.icon className="h-12 w-12 text-gold" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      project.status === 'Expanding' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gold/10 text-gold'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <project.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">
                        {project.titleEn}
                      </h3>
                      <p className="text-gold">{project.titleHi}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.descEn}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.descHi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Help Us Realize This Vision
            </h2>
            <h3 className="font-heading text-xl text-gold mb-8">
              इस दृष्टि को साकार करने में हमारी सहायता करें
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              These ambitious projects require community support, donations, and dedicated volunteers. 
              Your contribution, no matter how small, brings us closer to making these dreams a reality.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;