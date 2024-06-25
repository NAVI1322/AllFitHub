import FeelingSad from "../layout/Explore";

const WhySection = () => {
  return (
    <div className="bg-white  flex-col justify-center items-baseline mt-4 p-10 ">
     <div className="flex justify-center">
        <span className="text-4xl font-bold text-center">How are you feeling today?</span>
     </div>
     <div className="flex justify-center mt-8">
        <span className="text-md text-center">We can help you find resources for understanding and managing what you’re experiencing.</span>
     </div>
     <div className="p-6 flex  justify-self-center">
        <FeelingSad />
    </div>
    </div>
   
  );
};

export default WhySection;
