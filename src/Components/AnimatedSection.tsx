import {motion} from "framer-motion"
import staggeredText from "../Utilities/StaggeredText"
const AnimatedSection = () => {
  return (
    <>
    <motion.h2
          initial={{ opacity: 0,y:-20 }}
          animate={{ opacity: 1,y:0}}
          transition={{ delay: 3,duration:0.5 }}
        >
          The
        </motion.h2>
        <div className="flex">
          <motion.span>
            <motion.span
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 4, staggerChildren: 0.06 }}
              className=" text-3xl md:text-5xl lg:px-4 lg:pl-8 lg:text-6xl "
            >
              {staggeredText("Introduction", "pop-up")}
            </motion.span>
          </motion.span>
        </div>
</>
  )
}

export default AnimatedSection