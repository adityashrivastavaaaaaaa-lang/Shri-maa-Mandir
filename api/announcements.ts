import type { VercelRequest, VercelResponse } from '@vercel/node';

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

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.status(200).json(announcements);
}
