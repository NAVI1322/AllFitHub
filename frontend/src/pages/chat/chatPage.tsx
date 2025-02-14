import { useState, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { motion } from "framer-motion";
import { FaRobot, FaKey, FaBrain, FaPaperPlane } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";

interface ChatMessage {
  type: "user" | "bot";
  message: string;
}

export default function ChatApp() {
  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState("");
  const [isKeySet, setIsKeySet] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetApiKey = () => {
    if (apiKey.trim()) {
      setIsKeySet(true);
      localStorage.setItem("openai_key", apiKey);
    }
  };

  useEffect(() => {
    const savedKey = localStorage.getItem("openai_key");
    if (savedKey) {
      setApiKey(savedKey);
      setIsKeySet(true);
    }
  }, []);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatLog(prev => [...prev, { type: "user", message }]);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "I am an AI fitness assistant created by Navneet Sharma for the NCT Hackathon. I specialize in providing personalized fitness advice, workout plans, and exercise recommendations. My knowledge covers strength training, cardio workouts, flexibility exercises, and athletic performance optimization. I can help with workout routines, exercise form, fitness goals, and training schedules. While I can discuss general nutrition in the context of fitness, I'll remind users that I'm primarily focused on exercise and physical training. For any medical or specific dietary concerns, I'll always recommend consulting with healthcare professionals. I aim to provide practical, safe, and evidence-based fitness guidance to help users achieve their fitness goals."
            },
            {
              role: "user",
              content: message
            }
          ]
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const botResponse = response.data.choices[0].message.content;
      setChatLog(prev => [...prev, { type: "bot", message: botResponse }]);
    } catch (error) {
      setChatLog(prev => [...prev, { type: "bot", message: "Sorry, I encountered an error. Please check your API key or try again later." }]);
    }

    setIsLoading(false);
    setMessage("");
  };

  if (!isKeySet) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-200 dark:from-gray-800 dark:to-gray-900">
        <div className="flex flex-col h-screen">
          <div className="p-2 flex items-center justify-between border-b border-white/20 shadow-md backdrop-blur-sm bg-white/10">
            <h1 className="relative text-4xl sm:text-5xl font-bold text-center p-2">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Zen Mentor AI
              </span>
            </h1>
            <div className="flex justify-between items-center space-x-3">
              <ModeToggle />
              <Button
                variant={"outline"}
                className="text-base"
                onClick={() => navigate("/home")}
              >
                Back
              </Button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-purple-500 mb-4">
                  <FaKey className="text-3xl" />
                  <h2 className="text-2xl font-bold">Enter OpenAI API Key</h2>
                </div>
                <Input
                  type="password"
                  placeholder="sk-..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="bg-white/20 border-white/20"
                />
                <Button 
                  onClick={handleSetApiKey}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Start Chatting
                </Button>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                  Your API key is stored locally and never sent to our servers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-200 dark:from-gray-800 dark:to-gray-900">
      <div className="flex flex-col h-screen">
        <div className="p-2 flex items-center justify-between border-b border-white/20 shadow-md backdrop-blur-sm bg-white/10">
          <h1 className="relative text-4xl sm:text-5xl font-bold text-center p-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Zen Mentor AI
            </span>
          </h1>
          <div className="flex justify-between items-center space-x-3">
            <ModeToggle />
            <Button
              variant={"outline"}
              className="text-base"
              onClick={() => {
                localStorage.removeItem("openai_key");
                setIsKeySet(false);
              }}
            >
              Reset Key
            </Button>
            <Button
              variant={"outline"}
              className="text-base"
              onClick={() => navigate("/home")}
            >
              Back
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {chatLog.map((chat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  chat.type === 'user' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20'
                }`}>
                  <p className="whitespace-pre-wrap">{chat.message}</p>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2">
                  <p>Thinking...</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/20 backdrop-blur-sm bg-white/10">
          <div className="max-w-4xl mx-auto flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about fitness, nutrition, or wellness..."
              className="flex-1 bg-white/20 border-white/20"
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              disabled={isLoading}
            >
              <FaPaperPlane className="mr-2" />
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
