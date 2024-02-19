import {motion,useInView} from "framer-motion"
import HeroAnimation from "./HeroAnimation";
import { useEffect, useRef,memo } from "react";
import StaggeredText from "../Utilities/StaggeredText";



interface Props{
  setView:(status:boolean)=>void

}


const Hero = ({setView}:Props) => {

  const ref = useRef(null)
  const isInView = useInView(ref,{
  
      margin: "-80px"
    
  })



  useEffect(()=>{
       setView(isInView)
  },[isInView])


  return (
    <motion.section  className="relative w-full  h-[80vh] lg:h-[75vh] text-center flex gap-4 flex-col  mx-auto mt-8 bg-[#2E3138] background justify-center items-center mb-16">
 
        <motion.h1 ref={ref}
        initial="hidden"
        animate="show"
        transition={{staggerChildren:0.075}}
        className="text-3xl md:text-5xl font-semibold tracking-wider backface-invisible "
        >
          {StaggeredText("Sazzad Alam Tomal","slide-in")}
        </motion.h1>
        <motion.h2
        className="relative z-30 text-sm md:text-lg"
        initial={{opacity:0}}
        animate={{opacity:2}}
        transition={{duration:1,delay:1}}
       >Full Stack Developer</motion.h2>

        <HeroAnimation/>
    </motion.section>
  )
}

export default memo(Hero)