import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaRobot, FaUtensils, FaHeartbeat } from "react-icons/fa"; // Import icons from react-icons

const FitnessPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1800 }); // Initialize AOS with a duration of 1800ms
  }, []);

  return (
    <div className="bg-slate-300 dark:bg-gray-800 h-full min-h-screen w-full transition-colors bg-fixed">
      <div className="text-center px-20 pt-20 pb-10" data-aos="fade-right">
        <div className="text-6xl dark:text-gray-100 font-bold text-white mb-4 shadow-lg p-5 font-sans rounded-xl w-full">
          What We Offer
        </div>
        <div data-aos="fade-left" className="text-md font-sans text-sm font-extralight dark:text-slate-100 text-black">
        <p className="mb-2">
            We promote the health and mental health of all mankind by providing
            a variety of services designed to enhance your well-being. Whether
            you're looking for personalized fitness advice, nutritious meal
            plans, or tools to track your progress, we've got you covered.
          </p>
          <p>
            Our offerings are designed to help you achieve your health goals
            with ease and confidence. Explore what we have to offer and take the
            first step towards a healthier, happier you.
          </p>
        </div>
      </div>
      <div className="flex space-x-6 px-20 pb-20 justify-center bg-fixed container">
        <div data-aos="fade-up">
          <Card className="h-[400px] w-[400px] rounded-2xl shadow-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex flex-col justify-between transition transform hover:scale-105 duration-300">
            <div className="p-4">
              <CardHeader className="flex items-center">
                <FaRobot className="text-4xl mr-3" />
                <CardTitle className="font-semibold text-3xl">
                  AI Zen Mentor
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-lg mt-4">
                <p>
                  Get personalized fitness and health advice instantly. Our AI
                  ChatBot is here to answer your questions, provide tips, and guide
                  you through your fitness journey.
                </p>
              </CardContent>
            </div>
            <CardFooter className="flex justify-end p-4">
              <Button className="bg-white text-gray-900 px-6 py-2 rounded-full shadow-lg transform transition duration-300 hover:bg-gray-300 hover:scale-105">
                Try Now!
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="flex-shrink-0">
          <Card className="h-[400px] w-[400px] rounded-2xl shadow-xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white flex flex-col justify-between transition transform hover:scale-105 duration-300">
            <div className="p-4">
              <CardHeader className="flex items-center">
                <FaUtensils className="text-4xl mr-3" />
                <CardTitle className="font-semibold text-3xl">
                  Meal Preparation
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-lg mt-4">
                <p>
                  Discover nutritious and delicious meal plans tailored to your
                  dietary needs and fitness goals. Simplify your meal planning with
                  our easy-to-follow recipes and preparation guides.
                </p>
              </CardContent>
            </div>
            <CardFooter className="flex justify-end p-4">
              <Button className="bg-white text-gray-900 px-6 py-2 rounded-full shadow-lg transform transition duration-300 hover:bg-gray-300 hover:scale-105">
                Try Now!
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="flex-shrink-0">
          <Card className="h-[400px] w-[400px] rounded-2xl shadow-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white flex flex-col justify-between transition transform hover:scale-105 duration-300">
            <div className="p-4">
              <CardHeader className="flex items-center">
                <FaHeartbeat className="text-4xl mr-3" />
                <CardTitle className="font-semibold text-3xl">
                  Fitness Tracker
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-lg mt-4">
                <p>
                  Monitor your progress with our comprehensive fitness tracker.
                  Track your workouts, set goals, and stay motivated with real-time
                  data and insights.
                </p>
              </CardContent>
            </div>
            <CardFooter className="flex justify-end p-4">
              <Button className="bg-white text-gray-900 px-6 py-2 rounded-full shadow-lg transform transition duration-300 hover:bg-gray-300 hover:scale-105">
                Try Now!
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FitnessPage;