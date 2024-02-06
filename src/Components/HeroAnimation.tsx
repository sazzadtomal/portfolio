import Car from "../assets/running2.svg"
import Mountain from "../assets/mountain.svg"
import megh from "../assets/megh.png"
import {motion} from "framer-motion"

const HeroAnimation = () => {
  return (
    <motion.div
    initial={{opacity:0,scale:4}}
    animate={{opacity:1,scale:0.7}}
    transition={{duration:0.75}} className="flex scale-[0.7] md:scale-[0.8] items-center justify-center absolute z-10">
    <motion.div className='[clip-path:circle(48%)] flex flex-col justify-end h-[24rem] w-[24rem] md:w-[27rem] md:h-[27rem] bg-[#FF8552] sky relative overflow-hidden'>
     <img className='h-[100px] w-[100px] relative top-[-28px] left-[32px] filter opacity-80' src={megh} alt="mountain" />
     <img className='h-[100px] w-[100px] relative top-[-80px] left-[280px] opacity-80 filter ' src={megh} alt="mountain" />
        <div className='overflow-hidden whitespace-nowrap relative bottom-[-32px]'>
          <div className='inline-block logos-slide' >
            <img className='h-[100px] w-[100px]' src={Mountain} alt="mountain" />
            <img className='h-[100px] w-[100px]' src={Mountain} alt="mountain" />
            <img className='h-[100px] w-[100px]' src={Mountain} alt="mountain" />
            <img className='h-[100px] w-[100px]' src={Mountain} alt="mountain" />
          
          </div>
          <div className='inline-block logos-slide' >
            <img className='h-[100px] w-[100px]' src={Mountain} alt="mountain" />
            <img className='h-[100px] w-[100px]' src={Mountain} alt="mountain" />
            <img className='h-[100px] w-[100px]' src={Mountain} alt="mountain" />
            <img className='h-[100px] w-[100px]' src={Mountain} alt="mountain" />
         </div>
         <img className='absolute right-48 bottom-[16px] h-[72px] w-[72px]' src={Car} alt="Car" />
        </div>
        <div className='bg-black w-full h-16 relative bottom-[5px]'></div>
    </motion.div>
    
   
  </motion.div>
  )
}

export default HeroAnimation