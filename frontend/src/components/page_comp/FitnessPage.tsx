import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaDumbbell, 
  FaRunning, 
  FaHandPeace, 
  FaHeartbeat, 
  FaFire, 
  FaApple, 
  FaChartLine, 
  FaUsers, 
  FaBrain, 
  FaComments, 
  FaChevronRight 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Navigation buttons at the bottom for mobile
const BottomNav = ({ navigate }: { navigate: (path: string) => void }) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-4 z-50 px-4 sm:hidden">
      <Button
        onClick={() => navigate('/chat')}
        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg"
      >
        <FaComments className="mr-2" />
        Chat Bot
      </Button>
      <Button
        onClick={() => navigate('/diet')}
        className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-full shadow-lg"
      >
        <FaDumbbell className="mr-2" />
        Fitness
      </Button>
    </div>
  );
};

// Side navigation for desktop
const SideNav = ({ navigate }: { navigate: (path: string) => void }) => {
  return (
    <div className="hidden sm:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
      <Button
        onClick={() => navigate('/chat')}
        className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-[-8px]"
      >
        <FaComments className="text-xl" />
        <span className="hidden group-hover:inline">Chat Bot</span>
        <FaChevronRight className="hidden group-hover:inline" />
      </Button>
      <Button
        onClick={() => navigate('/diet')}
        className="group flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-4 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-[-8px]"
      >
        <FaDumbbell className="text-xl" />
        <span className="hidden group-hover:inline">Fitness</span>
        <FaChevronRight className="hidden group-hover:inline" />
      </Button>
    </div>
  );
};

const workoutCategories = [
  {
    title: "Strength Training",
    icon: FaDumbbell,
    description: "Build muscle and increase strength with our comprehensive weight training programs.",
    color: "from-purple-500 via-pink-500 to-red-500",
    features: ["Custom Programs", "Form Guidance", "Progressive Overload"]
  },
  {
    title: "HIIT Cardio",
    icon: FaRunning,
    description: "High-intensity interval training for maximum fat burn and endurance.",
    color: "from-blue-500 via-cyan-500 to-teal-500",
    features: ["30-min Workouts", "Calorie Burn", "Endurance"]
  },
  {
    title: "Yoga & Flexibility",
    icon: FaHandPeace,
    description: "Improve flexibility, balance, and mental focus with guided yoga sessions.",
    color: "from-green-500 via-emerald-500 to-lime-500",
    features: ["Daily Routines", "Mindfulness", "Flexibility"]
  },
  {
    title: "Cardio Fitness",
    icon: FaHeartbeat,
    description: "Enhance your cardiovascular health with tailored cardio programs.",
    color: "from-orange-500 via-amber-500 to-yellow-500",
    features: ["Heart Health", "Stamina", "Weight Loss"]
  },
  {
    title: "Mental Wellness",
    icon: FaBrain,
    description: "Combine physical fitness with mental well-being through specialized routines.",
    color: "from-indigo-500 via-purple-500 to-pink-500",
    features: ["Stress Relief", "Focus", "Balance"]
  },
  {
    title: "Performance Tracking",
    icon: FaChartLine,
    description: "Track your progress and achieve your fitness goals with smart analytics.",
    color: "from-rose-500 via-red-500 to-orange-500",
    features: ["Goal Setting", "Progress Stats", "Insights"]
  }
];

const FitnessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-16 pb-24 sm:pb-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Fitness Programs
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your body and mind with our comprehensive fitness programs.
            Choose from a variety of workouts designed to help you achieve your goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mb-8">
          {workoutCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full bg-gradient-to-br ${category.color} text-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                <CardHeader className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-4 mt-auto">
                  <Button 
                    className="w-full bg-white/20 hover:bg-white/30 text-white text-sm"
                    onClick={() => navigate('/chat')}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <BottomNav navigate={navigate} />
      <SideNav navigate={navigate} />
    </div>
  );
};

export default FitnessPage;