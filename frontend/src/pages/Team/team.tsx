import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TeamMembers } from "@/assets/TeamData/team_data";
import TeamCard from "@/components/layout/team_card";

const TeamPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-slate-300 to-slate-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 min-h-screen">
        <div className="mx-auto max-w-2xl text-center mb-8 lg:mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Meet our talented team members!
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {TeamMembers.map((member, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
              className="h-full"
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;