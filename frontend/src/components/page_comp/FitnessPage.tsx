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

const FitnessPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1800 }); // Initialize AOS with a duration of 1200ms
  }, []);

  return (
    <div className=" bg-slate-300 dark:bg-gray-800 h-full min-h-screen w-full transition-colors">
      <div className="text-center px-20 pt-20 pb-10" data-aos="fade-right">
        <div className="text-6xl   dark:text-gray-100 font-bold text-white mb-4 shadow-lg p-5 font-sans  rounded-xl w-full">
          What We Offer
        </div>
        <div data-aos="fade-left" className="text-md font-sans text-sm font-extralight dark:text-slate-100 text-black">
          We promote the health and mental health of all mankind.
        </div>
      </div>
      <div className="flex  space-x-6 px-20 pb-20 justify-center bg-fixed container">
        <div data-aos="fade-up" >
          <Card className="h-[400px] w-[400px] rounded-2xl shadow-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex flex-col justify-between transition transform hover:scale-105 duration-300">
            <div>
              <CardHeader>
                <CardTitle className="font-semibold text-3xl">
                  AI Zen Mentor
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-lg">
                Get personalized fitness and health advice instantly. Our AI
                ChatBot is here to answer your questions, provide tips, and guide
                you through your fitness journey.
              </CardContent>
            </div>
            <CardFooter className="flex justify-end p-4">
              <Button className="bg-white text-gray-900 px-6 py-2 rounded-full transition duration-300 hover:bg-gray-200">
                Try Now!
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="flex-shrink-0">
          <Card className="h-[400px] w-[400px] rounded-2xl shadow-xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white flex flex-col justify-between transition transform hover:scale-105 duration-300">
            <div>
              <CardHeader>
                <CardTitle className="font-semibold text-3xl">
                  Meal Preparation
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-lg">
                Discover nutritious and delicious meal plans tailored to your
                dietary needs and fitness goals. Simplify your meal planning with
                our easy-to-follow recipes and preparation guides.
              </CardContent>
            </div>
            <CardFooter className="flex justify-end p-4">
              <Button className="bg-white text-gray-900 px-6 py-2 rounded-full transition duration-300 hover:bg-gray-200">
                Try Now!
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="flex-shrink-0">
          <Card className="h-[400px] w-[400px] rounded-2xl shadow-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white flex flex-col justify-between transition transform hover:scale-105 duration-300">
            <div>
              <CardHeader>
                <CardTitle className="font-semibold text-3xl">
                  Fitness Tracker
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-lg">
                Monitor your progress with our comprehensive fitness tracker.
                Track your workouts, set goals, and stay motivated with real-time
                data and insights.
              </CardContent>
            </div>
            <CardFooter className="flex justify-end p-4">
              <Button className="bg-white text-gray-900 px-6 py-2 rounded-full transition duration-300 hover:bg-gray-200">
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