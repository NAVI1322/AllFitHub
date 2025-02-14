import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-200 dark:from-gray-800 dark:to-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Coming Soon!
          </h1>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            Thank you for exploring our AI Zen Mentor feature. We're working hard to bring you an amazing AI-powered chat experience. Stay tuned!
          </p>
          <Button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatPage; 