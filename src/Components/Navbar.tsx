import {
  useScroll,
  motion,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import StaggeredText from "../Utilities/StaggeredText";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface Props {
  showName: boolean;
}

const animation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const Navbar = ({ showName }: Props) => {
  const { pathname } = useLocation();

  const { scrollYProgress } = useScroll();
  const newPosition = useTransform(() =>
    (scrollYProgress.get() * 100).toFixed(1)
  );

  return (
    <motion.div className="fixed flex items-center w-full  top-0 bg-[#20242D] z-50 md:border-b shadow-lg border-[#E0D2C7] text-[#E0D2C7] py-2 md:py-4">
      <motion.div
        className="hidden md:block absolute right-0 pr-8 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
      >
        <motion.span>{newPosition}</motion.span> <motion.span>%</motion.span>
      </motion.div>

      <motion.ul className="flex flex-grow justify-center [&>*]:px-6 p-2">
        <motion.li
          initial={{ opacity: 0, x: -5, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <NavLink to="/">
            <span>Home</span>
            {pathname === "/" && (
              <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:1}} className="w-full bg-[#E0D2C7] h-[2px]"></motion.div>
            )}
          </NavLink>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, x: -5, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          <NavLink to="/projects">
            <span>Projects</span>
            {pathname === "/projects" && (
              <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:1}} className="w-full bg-[#E0D2C7] h-[2px]"></motion.div>
            )}
          </NavLink>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, x: -5, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <NavLink to="/about">
            <span>About</span>
            {pathname === "/about" && (
              <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:1}} className="w-full bg-[#E0D2C7] h-[2px]"></motion.div>
            )}
          </NavLink>
        </motion.li>
      </motion.ul>

      <AnimatePresence>
        {!showName && (
          <motion.h1
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            variants={animation}
            transition={{ staggerChildren: 0.03, duration: 0.5 }}
            className="absolute pl-8 hidden md:block"
          >
            {StaggeredText("Sazzad Alam Tomal", "slide-in")}
          </motion.h1>
        )}
      </AnimatePresence>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="w-full h-[2px] absolute bg-[#E0D2C7] top-14 md:hidden"
      ></motion.div>
    </motion.div>
  );
};

export default Navbar;
