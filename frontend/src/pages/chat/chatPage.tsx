import { useState, useEffect, FormEvent, ChangeEvent, useRef } from "react";
import axios from "axios";
import TypingAnimation from "@/components/layout/typingAnimation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ChatMessage {
  type: "user" | "bot";
  message: string;
}

export default function ChatApp() {
  const [inputValue, setInputValue] = useState<string>("");
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const chatLogRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatLog]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);
    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = (message: string) => {
    const url = "https://api.openai.com/v1/chat/completions";
  
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    };
  
    const data = {
      model: "gpt-3.5-turbo-0125",
      messages: [
        {
          role: "system",
          content:
          "You are an AI assistant specializing in mental health and physical fitness. You provide professional advice and guidance on fitness, exercise routines, mental well-being, and overall health. If a question is outside of this scope, politely inform the user that you can only answer questions related to mental health and physical fitness and do not provide a response to unrelated questions." },
        {
          role: "user",
          content: message,
        },
      ],
    };

    setIsLoading(true);

    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="  mx-auto ">
      <div className="flex flex-col h-screen ">
        <div className="p-2 flex items-center justify-between  border-b border-white shadow-md ">
          <h1 className="relative text-5xl font-bold text-center p-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Zen Mentor
            </span>
          </h1>{" "}
          <Button
            variant={"outline"}
            className="text-1xl mr-10"
            onClick={() => navigate("/home")}
          >
            Back
          </Button>
        </div>
        <div
          className="flex-grow p-6 overflow-y-auto container"
          ref={chatLogRef}
        >
          <div className="flex flex-col space-y-4">
            {chatLog.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.type === "user" ? "bg-blue-500" : "bg-gray-600"
                  } rounded-xl px-4 py-2   text-white md:max-w-md max-w-sm lg:max-w-lg` }
                >
                  {message.message}
                </div>
              </div>
            ))}
            {isLoading && (
              <div key={chatLog.length} className="flex justify-start">
                <div className="rounded-lg p-4 text-white max-w-sm">
                  <TypingAnimation />
                </div>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-none p-6">
          <div className="flex rounded-lg border border-gray-4  00 bg-gray-300 text-black">
            <input
              type="text"
              className="flex-grow px-4 py-4 bg-transparent text-black focus:outline-none"
              placeholder="Ask your Fitness Questions Here ...."
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
            <button
              type="submit"
              className="bg-blue-500 rounded-lg px-10 ring-1 py-2 text-white font-semibold focus:outline-none hover:bg-blue-700 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
