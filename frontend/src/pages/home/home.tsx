import { Navbar } from "@/components/layout/NavBar";
import { Button } from "@/components/ui/button";
import FitnessPage from "../fitness/FitnessPage";
import { useRef } from "react";

const HomePage = () => {
  
  const FitnessP = useRef(null);
  const ScrollHandler = (Refname:any) => {
    window.scrollTo({top: Refname.current.offsetTop, behavior: "smooth"  });
  }
  return (
    <div>
      <div className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url(../../public/heroPic.png)" }}
        ></div>
        <div className="relative z-10">
          <Navbar />
        </div>
        <div className="relative w-full h-[calc(100vh-130px)] flex flex-col justify-center items-center z-10">
          <div className="lg:text-7xl font-bold  text-4xl md:text-5xl mb-10  dark:text-white text-white">
            Track your Fitness Level Now!
          </div>
          <Button
            variant="ghost"
            className=" bg-transparent hover:font-bold text-3xl hover:text-4xl hover:text-white hover:bg-gray-700 rounded-lg p-6  ease-in-out duration-200  font-medium text-white"
            onClick={() => ScrollHandler(FitnessP)}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className=" h-screen w-full" ref={FitnessP} >
        <FitnessPage/>
      </div>
    </div>
  );
};

export default HomePage;
