import type { VercelRequest, VercelResponse } from '@vercel/node';

const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("namaste")) {
        return "Namaste! How may I help you with your spiritual journey today?";
    }
    if (lowerInput.includes("time") || lowerInput.includes("timing") || lowerInput.includes("open")) {
        return "The Mandir is open daily from 5:00 AM to 9:00 PM. Morning Aarti is at 6:00 AM and Evening Aarti is at 7:00 PM.";
    }
    if (lowerInput.includes("location") || lowerInput.includes("address") || lowerInput.includes("where")) {
        return "We are located at: Near Devsthali Vidyapeeth, Lalpur, Rudrapur, Uttarakhand. You can find us on Google Maps!";
    }
    if (lowerInput.includes("donate") || lowerInput.includes("donation") || lowerInput.includes("contribute")) {
        return "Thank you for your generosity! You can donate via our website's 'Donate' page or visit the Mandir office.";
    }
    if (lowerInput.includes("event") || lowerInput.includes("festival")) {
        return "Upcoming events include Holi Mahotsav and Navratri Puja. Check our Announcements section for more details!";
    }

    return "I apologize, I didn't quite catch that. Could you please ask about Timings, Location, Events, or Donations?";
};

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'POST') {
        const { message } = req.body;
        const reply = getBotResponse(message || "");
        res.status(200).json({ reply });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
