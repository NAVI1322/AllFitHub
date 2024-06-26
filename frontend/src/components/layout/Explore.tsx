import  { useState } from 'react';
import { Button } from '../ui/button';

const FeelingSad = () => {
  const [feeling, setFeeling] = useState('sad');

  const handleExplore = () => {
    switch (feeling) {
      case 'anxious':
        window.location.href = 'https://www.anxietycanada.com/';
        break;
      case 'angry':
        window.location.href = 'https://www.apa.org/topics/anger/control';
        break;
      case 'stressed':
        window.location.href = 'https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-relievers/art-20047257';
        break;
      case 'afraid':
        window.location.href = 'hhttps://mhanational.org/what-can-i-do-when-im-afraid';
        break;
      case 'lonely':
        window.location.href = 'https://au.reachout.com/challenges-and-coping/isolation-and-loneliness/what-to-do-when-feeling-lonely-tips';
        break;
      case 'tired':
        window.location.href = 'https://www.healthlinkbc.ca/how-stop-feeling-tired-all-time';
        break;
      default:
        window.location.href = 'https://www.masterclass.com/articles/how-to-be-strong';
    }
  };

  return (
    <div className=" flex  mx-auto p-4 pt-6 md:p-6 lg:p-12 space-x-2 items-center">
      <h1 className="text-3xl font-bold">I'm feeling</h1>
      <div className="flex flex-col gap-4 ">
      <select
  value={feeling}
  onChange={(e) => setFeeling(e.target.value)}
  className="bg-red-100 rounded text-3xl underline font-bold  text-red-500 bg-transparent appearance-none ring-white outline-none focus:ring-0 w-auto cursor-pointer"
>
  <option value="anxious" className="text-yellow-600">Anxious or worried</option>
  <option value="sad" className="text-blue-600">Sad</option>
  <option value="angry" className="text-red-600">Angry</option>
  <option value="stressed" className="text-orange-600">Stressed or overwhelmed</option>
  <option value="afraid" className="text-purple-600">Afraid</option>    
  <option value="lonely" className="text-gray-600">Lonely</option>
  <option value="tired" className="text-green-600">Tired</option>

</select>
      </div>
      <Button variant={"outline"} className='bg-green-500 text-2xl hover:bg-green-600 rounded-full px-6 py-5' onClick={handleExplore}>Explore</Button>
    </div>
  );
};

export default FeelingSad;  