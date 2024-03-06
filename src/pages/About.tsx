import Banner from "../Components/Banner";
import { motion } from "framer-motion";
import staggeredText from "../Utilities/StaggeredText";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div>
      <Banner title="About Me." />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="p-8 origin-top bg-[#E0D2C7]"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          The
        </motion.h2>
        <div className="flex">
          <motion.span>
            <motion.span
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 3, staggerChildren: 0.06 }}
              className=" text-3xl md:text-5xl lg:px-4 lg:pl-8 lg:text-6xl "
            >
              {staggeredText("Introduction", "pop-up")}
            </motion.span>
          </motion.span>
        </div>

        <div className="md:p-8 my-8 md:my-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="w-full flex md:justify-center text-lg md:text-2xl"
          >
            <span className="md:px-2 underline">Personal</span>
            <span className="px-1">/</span>
            <span className="md:px-2">Technical</span>
          </motion.div>

          <motion.div initial={{ opacity: 0,y:20 }}
            animate={{ opacity: 1,y:0 }}
            transition={{ delay: 5, duration: 1.5 }} className="mt-12 border border-[#20242D] xl:mx-12">
            <div className="bg-[#20242D] text-[#E0D2C7] xl:text-xl flex justify-between">
              <div className="p-2 xl:px-4">Basic Info</div>
              <div className="hidden xl:basis-2/5 border-l   xl:block p-2 xl:px-4">
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
              </div>
              <div className="flex  text-xl justify-between  xl:border-l xl:border-black p-4 xl:basis-2/5 xl:px-16 xl:items-center">
                <FaFacebook />
                <FaGithub />
                <FaLinkedin />
                <FaSquareXTwitter />
                <SiGmail />
              </div>
            </div>
          </motion.div>

          
          
          <motion.div initial={{ opacity: 0,y:20}}
            animate={{ opacity: 1,y:20 }}
            transition={{ delay: 6, duration: 1.5 }} className="mt-16">
            <motion.div
              className="w-full flex md:justify-center text-medium md:text-2xl"
            >
              <span className="md:px-2 underline text-2xl md:text-3xl font-bold">Qualities</span>
            </motion.div>

            <div className="xl:flex flex-wrap xl:px-8 md:text-center mt-12">
              <motion.div className="w-full flex flex-col mt-8 xl:w-1/2 flex-grow shrink-0  md:px-16 mb-2">
                <span className="text-xl font-bold md:text-3xl mb-2">
                  Empathetic
                </span>
                <p>
                  Connecting with others is deeply important to me. I listen
                  intently, not just to what's said, but to the feelings behind
                  the words. Understanding different perspectives and
                  experiences comes naturally to me, and I approach everyone
                  without judgment. My actions are driven by empathy, and I
                  believe in building a sense of community wherever I go.
                </p>
              </motion.div>
              <motion.div className="w-full flex flex-col mt-8 xl:w-1/2 flex-grow shrink-0  md:px-16 mb-2">
                <span className="text-xl font-bold md:text-3xl mb-2">
                  Non-biased
                </span>
                <p>
                  I don't let biases cloud my judgment. I approach each
                  situation with a fresh perspective, free from preconceived
                  notions. I believe in analyzing information objectively,
                  considering all sides of the story, and making decisions based
                  on reason and evidence. This ability to see the world through
                  different lenses allows me to collaborate effectively and
                  contribute meaningfully to any team.
                </p>
              </motion.div>
              <motion.div className="w-full flex flex-col mt-8 xl:w-1/2 flex-grow shrink-0 md:px-16 mb-2">
                <span className="text-xl font-bold md:text-3xl mb-2">
                  Pragmatic
                </span>
                <p>
                  Here's the thing, I'm a pragmatist. I believe in finding the
                  most practical and efficient solutions, whether it's code,
                  design, or anything in between. I'm not afraid to get
                  creative, but I also keep the project's goals and technical
                  limitations in mind. This way, I can create solutions that not
                  only look good and work well but are also easy to maintain and
                  scale down the road.
                </p>
              </motion.div>
              <motion.div className="w-full flex flex-col mt-8 xl:w-1/2 flex-grow shrink-0 md:px-16 mb-2">
                <span className="text-xl font-bold md:text-3xl mb-2">
                  Robustness
                </span>
                <p>
                  I am the architect ensuring application robustness. I leverage
                  secure and scalable back-end development practices to craft
                  solutions that prioritize code quality, rigorous testing, and
                  comprehensive documentation. Proactive in anticipating
                  potential issues, I design systems that can handle unexpected
                  loads and future growth, guaranteeing reliable performance in
                  the long term.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
