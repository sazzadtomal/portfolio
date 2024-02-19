import { motion } from "framer-motion";
import StaggeredText from "../Utilities/StaggeredText";


interface Props{
  title: string
}




const Banner = ({title}:Props) => {
  return (
    <div className="text-[#E0D2C7]">
      <motion.div
        initial={{opacity: 0.5 }}
        animate={{opacity: 1 }}
        transition={{ duration: 1 }}
        className="origin-left mt-24 mb-28 lg:mt-48 lg:mb-52"
      >
        <motion.h1
          key="intro"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09 }}
          className="font-semibold px-8 md:px-16 xl:px-32 text-[2rem] md:text-[4rem] lg:text-[5rem]"
        >
          {StaggeredText(title, "pop-up")}
        </motion.h1>
      </motion.div>

      <motion.div
        className="w-full h-[1px] bg-[#E0D2C7]"
        initial={{ scale: 0,opacity:0.5 }}
        animate={{ scale: 1,opacity:1 }}
        transition={{ duration: 0.5, delay: 1 }}
      ></motion.div>
    </div>
  );
};

export default Banner;
