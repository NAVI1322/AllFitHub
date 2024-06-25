import React, { useRef, useState, useEffect, RefObject } from "react";
import { Navbar } from "@/components/layout/NavBar";
import { Button } from "@/components/ui/button";
import FitnessPage from "../../components/page_comp/FitnessPage";
import WhySection from "@/components/page_comp/WhySection";
import TeamPage from "../Team/team";
import ContactUs from "@/components/page_comp/contactUs";
import Footer from "@/components/page_comp/contactUs";



// Interface for the HomePage component's props
interface HomePageProps {}

// Interface for the scroll handler function
interface ScrollHandler {
  (ref: RefObject<HTMLDivElement>): void;
}

const HomePage: React.FC<HomePageProps> = () => {
  const FitnessP = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "url(../../public/HeroSlides/HeroImages/img3.webp)",
    "url(../../public/HeroSlides/HeroImages/img2.jpg)",
    "url(../../public/HeroSlides/HeroImages/img1.webp)",
  ];

  
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const scrollHandler: ScrollHandler = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
    }
  };
  

  return (
    <div>
      <div className="fixed top-0 z-40 w-full">
        <Navbar /> {/* Ensure Navbar component is correctly imported and rendered */}
      </div>
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 bg-fixed"
          style={{ backgroundImage: slides[currentSlide] }}
        ></div>
        <div className="relative w-full h-screen flex flex-col justify-center items-center z-10 bg-black bg-opacity-50">
          <div className="text-center px-4">
            <h1 className="lg:text-7xl font-bold text-4xl md:text-5xl mb-4 text-white poppins-bold">
              Welcome to   <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animated-background">
             ALL FIT HUB
            </span>
            </h1>
            <p className="text-white font-thin text-lg mb-8 poppins-verylight">
            “Your fitness and mental health journey starts here. Embrace the challenge, nurture your mind, and transform your life.”
            </p>
          </div>
          <Button
            variant="ghost"
            className="bg-transparent poppins-regular text-3xl  hover:bg-white  hover:text-black  rounded-lg p-6 ease-in-out duration-200 font-medium text-white border-2 border-white"
            onClick={() => scrollHandler(FitnessP)}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="w-full">
        <WhySection />
      </div>
      <div className="h-screen w-full " ref={FitnessP}>
        <FitnessPage />
      </div>
      <div className="h-screen w-full " >
        <TeamPage />
      </div>
      <div className=" w-full border-t " >
        <Footer/>
      </div>
      
    </div>
  );
};

export default HomePage;