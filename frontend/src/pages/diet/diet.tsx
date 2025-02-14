import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  FaDumbbell, FaHandPeace, FaHeartbeat, FaFire, FaApple, 
  FaWeight,  FaClock, FaChartLine, FaUsers 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const workoutCategories = [
  {
    title: "Strength Training",
    icon: FaDumbbell,
    description: "Build muscle and increase strength with personalized weight training programs designed for your fitness level.",
    color: "from-purple-500 to-pink-500",
    features: ["Customized Programs", "Video Guidance", "Progress Tracking"]
  },
  {
    title: "HIIT Cardio",
    icon: FaFire,
    description: "High-intensity interval training sessions to maximize calorie burn and boost your metabolism.",
    color: "from-orange-500 to-red-500",
    features: ["30-min Workouts", "Fat Burning", "Endurance Building"]
  },
  {
    title: "Yoga & Mindfulness",
    icon: FaHandPeace,
    description: "Combine physical postures, breathing techniques, and meditation for total mind-body wellness.",
    color: "from-blue-500 to-indigo-500",
    features: ["Guided Sessions", "Stress Relief", "Flexibility"]
  }
];

const nutritionCategories = [
  {
    title: "Smart Meal Planning",
    icon: FaApple,
    description: "AI-powered meal plans customized to your preferences, allergies, and fitness goals.",
    color: "from-green-500 to-emerald-500",
    features: ["Weekly Plans", "Shopping Lists", "Recipe Database"]
  },
  {
    title: "Weight Management",
    icon: FaWeight,
    description: "Evidence-based strategies for sustainable weight loss or muscle gain, tailored to your body.",
    color: "from-cyan-500 to-blue-500",
    features: ["Goal Setting", "Progress Tracking", "Expert Support"]
  },
  {
    title: "Performance Nutrition",
    icon: FaHeartbeat,
    description: "Optimize your athletic performance with targeted nutrition strategies and timing.",
    color: "from-violet-500 to-purple-500",
    features: ["Pre/Post Workout", "Supplements Guide", "Hydration Tips"]
  }
];

const additionalFeatures = [
  {
    title: "Quick Recipes",
    icon: FaClock,
    description: "15-30 minute healthy recipes for busy lifestyles",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Progress Analytics",
    icon: FaChartLine,
    description: "Detailed tracking and visualization of your fitness journey",
    color: "from-teal-500 to-cyan-500"
  },
  {
    title: "Community Support",
    icon: FaUsers,
    description: "Connect with like-minded individuals on similar fitness paths",
    color: "from-pink-500 to-rose-500"
  }
];

const DietPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-200 dark:from-gray-800 dark:to-gray-900 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Your Fitness Evolution Starts Here
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover a revolutionary approach to fitness and nutrition, powered by AI and backed by science. 
            Transform your lifestyle with personalized programs coming soon!
          </motion.p>
        </div>

        {/* Workout Section */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Elite Workout Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workoutCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className={`h-full shadow-xl bg-gradient-to-r ${category.color} text-white transition transform hover:scale-105 duration-300`}>
                  <CardHeader className="flex items-center space-x-4">
                    <category.icon className="text-4xl" />
                    <CardTitle className="text-2xl font-semibold">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-4">{category.description}</p>
                    <div className="border-t border-white/20 pt-4">
                      <ul className="space-y-2">
                        {category.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-white/60" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full px-6 py-2">
                      Coming Soon
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nutrition Section */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600"
          >
            Smart Nutrition Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nutritionCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className={`h-full shadow-xl bg-gradient-to-r ${category.color} text-white transition transform hover:scale-105 duration-300`}>
                  <CardHeader className="flex items-center space-x-4">
                    <category.icon className="text-4xl" />
                    <CardTitle className="text-2xl font-semibold">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-4">{category.description}</p>
                    <div className="border-t border-white/20 pt-4">
                      <ul className="space-y-2">
                        {category.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-white/60" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full px-6 py-2">
                      Coming Soon
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Extra Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`shadow-lg bg-gradient-to-r ${feature.color} text-white transition transform hover:scale-105 duration-300`}>
                  <CardHeader className="flex items-center space-x-3">
                    <feature.icon className="text-3xl" />
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DietPage;
