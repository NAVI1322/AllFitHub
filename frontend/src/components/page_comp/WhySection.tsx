import FeelingSad from "../layout/Explore";

const WhySection = () => {
  return (
    <div className=" flex-col justify-center items-baseline  p-10 bg-slate-50 dark:bg-gray-950" 
    // style={{ backgroundImage:"url(../../public/explore_background/img.jpg)" }}
    >
     <div className="flex justify-center">
        <span className="text-4xl font-bold text-center">How are you feeling today?</span>
     </div>
     <div className="flex justify-center mt-8">
        <span className="text-md text-center">We can help you find resources for understanding and managing what you’re experiencing.</span>
     </div>
     <div className="p-6 flex justify-self-center ">
        <FeelingSad />
    </div>
    <div className="flex justify-center">
        <span className="text-4xl font-bold text-center p-10">Not sure where to start?</span>
     </div>
     <div className="flex justify-center mt-8">
        <span className="text-md text-center">Head to Health can connect you to mental health support. </span>
     </div>
    </div>
   
  );
};

export default WhySection;
