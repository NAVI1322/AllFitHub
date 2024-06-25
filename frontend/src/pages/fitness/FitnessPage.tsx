import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FitnessPage = () => {
  return (
    <div
      className="bg-slate-300 dark:bg-slate-800 h-screen w-full transition-colors dark:backdrop-brightness-50"
      style={{ backgroundImage: "url(../../../public/fitPic.webp)" }}
    >
      <div className="text-5xl font-bold px-20 pt-20 pb-10">What we Offer</div>
      <div className="flex gap-9">
        <Card className="h-[400px] w-[460px] ml-[60px] rounded-xl backdrop-blur-sm bg-white/60 dark:bg-orange-900/60 flex flex-col justify-between transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500/40 duration-300 hover:text-white">
          <div>
            <CardHeader>
              <CardTitle className="font-semibold text-3xl">
                AI ChatBot
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-500 dark:text-slate-300 flex-grow text-xl">
              Get personalized fitness and health advice instantly. Our AI
              ChatBot is here to answer your questions, provide tips, and guide
              you through your fitness journey.
            </CardContent>
          </div>
          <CardFooter className="flex justify-end mx-5 my-4 align-bottom">
            <Button className="">Try Now!</Button>
          </CardFooter>
        </Card>
        <Card className="h-[400px] w-[460px] rounded-xl backdrop-blur-sm bg-white/60 dark:bg-orange-900/60  flex flex-col justify-between transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500/40 duration-300 hover:text-white">
          <CardHeader>
            <CardTitle className=" font-semibold text-3xl">
              Meal Preparation
            </CardTitle>
          </CardHeader>
          <CardContent className=" text-slate-500 dark:text-slate-300 flex-grow text-xl">
            Discover nutritious and delicious meal plans tailored to your
            dietary needs and fitness goals. Simplify your meal planning with
            our easy-to-follow recipes and preparation guides.
          </CardContent>
          <CardFooter className="flex justify-end mx-5 my-4">
            <Button className="">Try Now!</Button>
          </CardFooter>
        </Card>
        <Card className="h-[400px] w-[460px] rounded-xl backdrop-blur-sm bg-white/60 dark:bg-orange-900/60  flex flex-col justify-between transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500/40 duration-300 hover:text-white">
          <CardHeader>
            <CardTitle className=" font-semibold text-3xl ">
              Fitness Tracker
            </CardTitle>
          </CardHeader>
          <CardContent className=" text-slate-500 dark:text-slate-300 flex-grow text-xl">
            Monitor your progress with our comprehensive fitness tracker. Track
            your workouts, set goals, and stay motivated with real-time data and
            insights.
          </CardContent>
          <CardFooter className="flex justify-end mx-5 my-4">
            <Button className="">Try Now!</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FitnessPage;
