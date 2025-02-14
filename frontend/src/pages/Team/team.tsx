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
    <section className="w-full mt-20 mb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Meet our talented team members!
          </p>
        </div>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {TeamMembers.map((member, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
              className="flex"
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;