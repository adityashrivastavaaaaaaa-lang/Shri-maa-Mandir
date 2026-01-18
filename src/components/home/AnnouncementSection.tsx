import { Bell, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const announcements = [
    {
        id: 1,
        date: "2024-03-25",
        titleEn: "Holi Mahotsav Celebration",
        titleHi: "होली महोत्सव समारोह",
        descriptionEn: "Join us for the grand Holi celebration with colors and devotional music.",
        descriptionHi: "रंगों और भक्ति संगीत के साथ भव्य होली समारोह में शामिल हों।",
    },
    {
        id: 2,
        date: "2024-04-10",
        titleEn: "Navratri Special Puja",
        titleHi: "नवरात्रि विशेष पूजा",
        descriptionEn: "Nine days of spiritual awakening and special aarti.",
        descriptionHi: "आध्यात्मिक जागृति और विशेष आरती के नौ दिन।",
    },
    {
        id: 3,
        date: "2024-04-15",
        titleEn: "Free Health Checkup Camp",
        titleHi: "निःशुल्क स्वास्थ्य जांच शिविर",
        descriptionEn: "General health checkup for all devotees.",
        descriptionHi: "सभी भक्तों के लिए सामान्य स्वास्थ्य जांच।",
    },
];

export const AnnouncementSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-cream to-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-gold">
                            <Bell className="w-5 h-5" />
                            <span className="font-medium uppercase tracking-wider text-sm">Latest Updates</span>
                        </div>
                        <h2 className="font-heading text-4xl font-bold text-foreground">
                            Announcements & News
                            <span className="block text-2xl text-gold mt-2">सूचनाएं और समाचार</span>
                        </h2>
                    </div>
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                        View All Updates
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {announcements.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-gold/10 group"
                        >
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                                <Calendar className="w-4 h-4 text-gold" />
                                <span>{item.date}</span>
                            </div>

                            <h3 className="font-heading text-xl font-bold mb-1 text-foreground group-hover:text-gold transition-colors">
                                {item.titleEn}
                            </h3>
                            <h4 className="text-lg text-gold mb-3 font-medium">
                                {item.titleHi}
                            </h4>

                            <p className="text-muted-foreground mb-1">
                                {item.descriptionEn}
                            </p>
                            <p className="text-muted-foreground/80 text-sm italic">
                                {item.descriptionHi}
                            </p>

                            <div className="mt-6 pt-4 border-t border-border flex justify-end">
                                <Button variant="ghost" size="sm" className="text-gold hover:text-gold/80 hover:bg-gold/5 p-0 bg-transparent flex items-center gap-1">
                                    Read More <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
