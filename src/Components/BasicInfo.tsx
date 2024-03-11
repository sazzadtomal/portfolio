import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const BasicInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 5.5, duration: 1 }}
      className="mt-16 border border-[#20242D] xl:mx-12"
    >
      <div className="bg-[#20242D] text-[#E0D2C7] xl:text-xl flex justify-between p-2">
        <div className="">Basic Info</div>
        <div className="hidden xl:basis-2/5 border-l   xl:block  xl:px-4">
          Socials
        </div>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col gap-3 xl:flex-grow p-4 md:text-lg">
          <div>
            <p className="font-bold ">Full Name</p>
            <p className="">Sazzad Alam Tomal</p>
          </div>
          <div>
            <p className="font-bold ">Religion</p>
            <p className="">Islam</p>
          </div>
          <div>
            <p className="font-bold ">Age</p>
            <p className="">26</p>
          </div>
          <div>
            <p className="font-bold ">Nationality</p>
            <p className="">Bangladeshi</p>
          </div>
          <div>
            <p className="font-bold ">Email</p>
            <a href="mailto:sazzadalamtomal00786@gmail.com" target="_blank" className="text-[#3366CC] underline">sazzadalamtomal00786@gmail.com</a>
          </div>
        </div>
        <div className="flex  text-xl justify-between  xl:border-l xl:border-black p-4 xl:basis-2/5 xl:px-16 xl:items-center">
          <a href="https://www.facebook.com/sazzad.alam.71/" target="_blank" >
            <FaFacebook />
          </a>
          <a href="https://github.com/sazzadtomal" target="_blank" >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sazzad-alam-tomal/" target="_blank"  >
            <FaLinkedin />
          </a>
          <FaSquareXTwitter />
          <a href="mailto:sazzadalamtomal00786@gmail.com">
            <SiGmail />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BasicInfo;
