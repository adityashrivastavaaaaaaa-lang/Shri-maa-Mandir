import Layout from "@/components/layout/Layout";
import { BookOpen, Heart, Music, Users, Sparkles, Calendar } from "lucide-react";
import meditationImg from "@/assets/meditation.jpg";
import yogaImg from "@/assets/yoga.jpg";
import communityImg from "@/assets/community.jpg";
import celebrationImg from "@/assets/celebration.jpg";

const activities = [
  {
    icon: Sparkles,
    image: meditationImg,
    titleEn: "Meditation Sessions",
    titleHi: "ध्यान सत्र",
    descEn: "Regular meditation sessions guided by experienced practitioners for inner peace, mental clarity, and spiritual awakening. Sessions include Pathchakra and various contemplative practices.",
    descHi: "आंतरिक शांति, मानसिक स्पष्टता और आध्यात्मिक जागृति के लिए अनुभवी साधकों द्वारा संचालित नियमित ध्यान सत्र। सत्रों में पाठचक्र और विभिन्न चिंतन अभ्यास शामिल हैं।"
  },
  {
    icon: Heart,
    image: yogaImg,
    titleEn: "Yoga Shivirs",
    titleHi: "योग शिविर",
    descEn: "Comprehensive yoga camps focusing on physical, mental, and spiritual well-being. These camps include asanas, pranayama, and meditation techniques suitable for all age groups.",
    descHi: "शारीरिक, मानसिक और आध्यात्मिक स्वास्थ्य पर केंद्रित व्यापक योग शिविर। इन शिविरों में सभी आयु वर्गों के लिए उपयुक्त आसन, प्राणायाम और ध्यान तकनीकें शामिल हैं।"
  },
  {
    icon: Users,
    image: communityImg,
    titleEn: "Community Gatherings",
    titleHi: "सामुदायिक कार्यक्रम",
    descEn: "Social gatherings that bring the community together for spiritual discourse, collective meditation, and sharing of knowledge. These events foster unity and collective harmony.",
    descHi: "सामाजिक सभाएँ जो आध्यात्मिक प्रवचन, सामूहिक ध्यान और ज्ञान के आदान-प्रदान के लिए समुदाय को एक साथ लाती हैं। ये कार्यक्रम एकता और सामूहिक सद्भाव को बढ़ावा देते हैं।"
  },
  {
    icon: BookOpen,
    image: null,
    titleEn: "Spiritual Discourses",
    titleHi: "आध्यात्मिक प्रवचन",
    descEn: "Regular discourses on the teachings of Sri Aurobindo and The Mother, exploring topics of integral yoga, consciousness evolution, and spiritual transformation.",
    descHi: "श्री अरविंद और श्री माँ की शिक्षाओं पर नियमित प्रवचन, जिसमें इंटीग्रल योग, चेतना विकास और आध्यात्मिक परिवर्तन के विषयों का अन्वेषण किया जाता है।"
  },
  {
    icon: Music,
    image: null,
    titleEn: "Value-Based Education",
    titleHi: "मूल्य आधारित शिक्षा",
    descEn: "Educational programs that integrate academic learning with moral, cultural, and spiritual development, inspired by the ideals of Sri Aurobindo's integral education.",
    descHi: "शैक्षिक कार्यक्रम जो श्री अरविंद की समग्र शिक्षा के आदर्शों से प्रेरित होकर शैक्षणिक शिक्षा को नैतिक, सांस्कृतिक और आध्यात्मिक विकास के साथ एकीकृत करते हैं।"
  },
  {
    icon: Calendar,
    image: celebrationImg,
    titleEn: "Annual Celebrations",
    titleHi: "वार्षिक उत्सव",
    descEn: "Celebration of important spiritual occasions including Sri Aurobindo's Birthday (15 August), The Mother's Birthday (21 February), and Foundation Day (2 February).",
    descHi: "महत्वपूर्ण आध्यात्मिक अवसरों का उत्सव जिसमें श्री अरविंद जयंती (15 अगस्त), श्री माँ जयंती (21 फरवरी) और स्थापना दिवस (2 फरवरी) शामिल हैं।"
  }
];

const Activities = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Activities
            </h1>
            <h2 className="font-heading text-2xl text-gold mb-6">
              हमारी गतिविधियाँ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover the various spiritual and social activities we organize for the community's 
              physical, mental, and spiritual well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Activities List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image or Icon Card */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {activity.image ? (
                    <div className="rounded-2xl overflow-hidden shadow-card">
                      <img 
                        src={activity.image} 
                        alt={activity.titleEn}
                        className="w-full h-full object-cover aspect-[4/3]"
                      />
                    </div>
                  ) : (
                    <div className="rounded-2xl bg-gradient-to-br from-gold/10 via-saffron/5 to-gold/10 aspect-[4/3] flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center">
                        <activity.icon className="h-12 w-12 text-gold" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <activity.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">
                        {activity.titleEn}
                      </h3>
                      <p className="text-gold">{activity.titleHi}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {activity.descEn}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.descHi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Join Our Activities / हमारी गतिविधियों में शामिल हों
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              All activities are open to the community. We welcome devotees, seekers, and anyone 
              interested in spiritual growth and social service. Contact us to learn about 
              schedules and participation.
            </p>
            <div className="bg-card rounded-xl p-6 shadow-soft border border-gold/20">
              <p className="text-foreground font-medium mb-2">
                📍 Location: Sri Arvind Nagar, Jankinagar, Purnia, Bihar
              </p>
              <p className="text-muted-foreground text-sm">
                📧 Email: shrimaamandir@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;