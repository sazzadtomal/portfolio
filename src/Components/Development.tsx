import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import staggeredText from "../Utilities/StaggeredText";
import Alchemy from "./Alchemy";

const Development = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.95, scale: 1 }}
      transition={{ duration: 1, delay: 3 }}
      className="origin-left relative flex flex-col p-8 overflow-hidden bg-[#E0D2C7] mt-16"
    >
      <div className="flex flex-col">
        <h2>Development</h2>
        <div className="flex">
          <motion.span>
            <motion.span
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 4, staggerChildren: 0.05 }}
              className=" text-3xl md:text-5xl lg:px-4 lg:pl-8 lg:text-6xl "
            >
              {staggeredText("The Implementation", "pop-up")}
            </motion.span>
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col lg:text-center my-16 lg:my-8">
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 lg:mx-auto lg:px-32 mb-16 "
        >
          <h3 className={`text-xl md:text-4xl mb-4 font-bold`}>
            "Scalibility"
          </h3>
          <p>
            Scalability in development is about building applications that can
            handle growth gracefully. Think of it like a building with a strong
            foundation and modular floors. You can easily add new features
            (floors) without compromising the overall structure (codebase) or
            user experience (performance).
          </p>
        </motion.section>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col lg:flex-row"
        >
          <section className="basis-1/2  lg:px-32 mb-16">
            <h3 className="text-xl md:text-4xl mb-4 font-semibold">
              "Clean Code"
            </h3>
            <p>
              Clean code isn't just functional, it's readable! Imagine a
              well-organized toolbox – everything has a clear purpose and is
              easy to find. Clean code uses clear names, avoids complexity, and
              breaks things down into manageable parts. This makes it easier to
              understand, modify, and extend in the future, saving time and
              reducing errors for everyone involved.
            </p>
          </section>
          <section className="basis-1/2 lg:px-32">
            <h3 className="text-xl md:text-4xl mb-4 font-semibold">
              "Problem Solving"
            </h3>
            <p>
              Problem solving is like taming a dragon. You define the beast (the
              problem!), then get creative with ways to conquer it. You weigh
              options, pick the best plan, and attack! If it doesn't work, adapt
              and try again. It's all about thinking critically, being creative,
              and communicating clearly - leading to better decisions and
              innovation.
            </p>
          </section>
        </motion.div>
      </div>

      <Link
        to="/"
        className="lg:absolute bottom-2 lg:right-8 pb-1 flex flex-col lg:justify-center"
      >
        <motion.span
          initial="hidden"
          whileInView="show"
          transition={{ staggerChildren: 0.05, repeat: Infinity }}
          className="text-lg md:text-xl lg:px-4 "
        >
          {staggeredText("Learn more.", "pop-up")}
        </motion.span>
        <div className="flex flex-col gap-1">
          <span className="w-full bg-[#20242D] rounded-xl h-[1px] block"></span>
          <span className="w-[80%] bg-[#20242D] rounded-xl h-[1px] block lg:mx-auto"></span>
        </div>
      </Link>
    </motion.div>
  );
};

export default Development;
