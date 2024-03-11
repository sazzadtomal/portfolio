import { motion,AnimatePresence } from "framer-motion"
import StaggeredText from "../Utilities/StaggeredText"
import { useEffect, useState } from "react"



const skillArray=["Website Designer","Frontend Developer","Backend Developer"]




const AnimatedHero = () => {
  const[heading,setHeading]=useState(true) 
  const [skill,setSkill]=useState(0)


  useEffect(()=>{
    setTimeout(()=>setHeading(false),1500)
  },[])


  useEffect(()=>{


    const profession=setInterval(() => {
        setSkill(prev=>
            prev<skillArray.length-1 ? prev+1 :0
        )
    
    }, 3500);


    return ()=>{
       clearInterval(profession)
    }
    

  },[])


  
  return (
    <motion.div className="relative h-[58vh] lg:h-[60vh] flex flex-col justify-center items-center px-8 md:px-16 xl:px-32 text-[#E0D2C7] mb-24 lg:mb-20 overflow-hidden">
     {heading ?<motion.h1 
        key="intro"
        initial="hidden"
        animate="show"
        transition={{staggerChildren:0.08}}
        className="absolute font-semibold"
        >
          {StaggeredText("Welcome!","slide-in")}
        </motion.h1>:<motion.h1 key="final" 
         initial={{fontSize:"3rem",opacity:1}}
         animate={{fontSize:"15rem",opacity:0.02} }
         transition={{delay:1,duration:1}} className="absolute font-semibold">
            Welcome!
           </motion.h1>}

        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.6}} className="flex flex-grow w-full font-semibold
            text-[2rem] md:text-[4rem] lg:text-[5rem] 2xl:text-[8rem]">
           <div className="flex flex-col justify-center">
               <span>I'm</span>
               <span>Sazzad Tomal</span>
           </div>
        </motion.h1>

        
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:4.5}} className="flex items-center gap-2 text-xs md:text-2xl lg:text-3xl self-end">
             <motion.div className="w-[1rem] h-[1rem] bg-[#E0D2C7] rounded-full"></motion.div>
             <motion.span className="min-w-[17ch]" key={skill} initial={{y:20}} animate={{y:0}}>{skillArray[skill]}</motion.span>
        </motion.div>

   </motion.div>
  )
}

export default AnimatedHero