import FeelingSad from "../layout/Explore";
import { motion } from "framer-motion";

const WhySection = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900 py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)]"></div>
      
      <div className="relative flex flex-col items-center justify-center px-4 sm:px-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 font-inter tracking-tight">
            How are you feeling today?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-12 font-inter leading-relaxed">
            We can help you find resources for understanding and managing what you're experiencing.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto px-4 sm:px-6"
        >
          <FeelingSad />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto mt-12 sm:mt-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white font-inter tracking-tight">
            Not sure where to start?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
            Head to Health can connect you to mental health support.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhySection;
