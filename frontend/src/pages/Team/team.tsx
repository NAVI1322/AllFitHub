
import TeamCard from '@/components/layout/team_card'; // Adjust path as per your file structure
import { TeamMembers } from '@/assets/TeamData/team_data'; // Adjust path as per your file structure

const Team = () => {
  return (
    <div className="container m-20 mx-auto p-4">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Meet our talented team members!
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {TeamMembers.map((member) => (
          <TeamCard member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;