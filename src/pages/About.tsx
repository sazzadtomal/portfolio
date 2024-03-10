import Banner from "../Components/Banner";
import BasicInfo from "../Components/BasicInfo";
import { motion } from "framer-motion";
import InformationDescription from "../Components/InformationDescription";
import AnimatedSection from "../Components/AnimatedSection";

const About = () => {
  return (
    <div className="">
      <Banner title="About Me." />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="p-8 origin-top bg-[#E0D2C7] "
      >
        <AnimatedSection/>
        <BasicInfo/>
        <InformationDescription/>
       </motion.div>
    </div>
  );
};

export default About;
