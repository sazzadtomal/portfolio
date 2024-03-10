import { motion } from "framer-motion";
import Qualities from "./Qualities";
import Interests from "./Interests";
import Education from "./Education";

const InformationDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 5, duration: 1.5 }}
      className="md:p-8 my-8 md:my-4"
    >
      <motion.div className="w-full mt-16 flex justify-center text-xl md:text-2xl bg-[#20242D] text-[#E0D2C7] p-2">
        <span className="md:px-2 underline">Personal</span>
        <span className="px-1">/</span>
        <span className="md:px-2">Technical</span>
      </motion.div>

      <Qualities />
      <Interests />
      <Education />
    </motion.div>
  );
};

export default InformationDescription;
