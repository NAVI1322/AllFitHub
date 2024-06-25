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
    <div className="container m-20 mx-auto p-4 mt-20">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16" data-aos="fade-up">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Meet our talented team members!
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {TeamMembers.map((member, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;