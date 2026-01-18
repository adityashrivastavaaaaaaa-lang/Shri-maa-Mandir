import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Message = {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
};

const INITIAL_MESSAGES: Message[] = [
    {
        id: 1,
        text: "Jai Shri Maa! Welcome to Shri Maa Mandir. How can I assist you today? You can ask about Timings, Location, or Donations.",
        sender: "bot",
        timestamp: new Date(),
    },
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue("");

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: newUserMessage.text }),
            });
            const data = await response.json();

            const newBotMessage: Message = {
                id: messages.length + 2,
                text: data.reply,
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, newBotMessage]);
        } catch (error) {
            console.error("Chat API Error:", error);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg transition-transform duration-300 ${isOpen ? "bg-red-500 hover:bg-red-600 rotate-90" : "bg-gold hover:bg-gold/90 scale-100"
                    }`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </Button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-border animate-in slide-in-from-bottom-10 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-gold p-4 flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-full">
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-white">Shri Maa Assistant</h3>
                            <p className="text-white/80 text-xs">Always here to help</p>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <ScrollArea className="h-80 p-4 bg-gray-50">
                        <div className="flex flex-col gap-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex items-start gap-2 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                                        }`}
                                >
                                    <Avatar className="w-8 h-8 border border-border">
                                        <AvatarImage src={msg.sender === "bot" ? "/bot-avatar.png" : ""} />
                                        <AvatarFallback className={msg.sender === "bot" ? "bg-gold text-white" : "bg-primary text-primary-foreground"}>
                                            {msg.sender === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                                ? "bg-gold text-white rounded-tr-none"
                                                : "bg-white border border-gray-200 text-foreground rounded-tl-none shadow-sm"
                                            }`}
                                    >
                                        {msg.text}
                                        <div className={`text-[10px] mt-1 text-right ${msg.sender === "user" ? "text-white/70" : "text-gray-400"}`}>
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={scrollRef} />
                        </div>
                    </ScrollArea>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-border">
                        <div className="flex items-center gap-2">
                            <Input
                                placeholder="Type a message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 rounded-full border-gray-200 focus:ring-gold focus:border-gold"
                            />
                            <Button
                                onClick={handleSendMessage}
                                size="icon"
                                className="rounded-full bg-gold hover:bg-gold/90 shrink-0"
                                disabled={!inputValue.trim()}
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="text-center mt-2">
                            <p className="text-[10px] text-muted-foreground">
                                Powered by Faith & AI
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
