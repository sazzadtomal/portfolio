import {motion} from "framer-motion"
import { memo } from "react"


const animation={
  hidden:{
    opacity:0
  },
  show:{
    opacity:1
  }
}







const Education = () => {
  return (
    <motion.section initial="hidden" whileInView="show" transition={{staggerChildren:0.5}} className=" mt-24 flex flex-col items-center md:items-stretch ">
      <h2 className="text-center text-xl mb-16">Educational Background.</h2>
      <motion.div className='flex md:flex-row flex-col gap-16'>
          <motion.section variants={animation} transition={{duration:0.75}} className='flex flex-col items-center  basis-1/3 text-center justify-between gap-4'>
              <div className='[clip-path:circle(50%_at_50%_50%)]  w-28 h-28   flex justify-center text-[#E0D2C7] items-center bg-[#20242D]'>School</div>
              <div>
                <div>SSC</div>
                <div>Passing Year: 2013</div>
                <div>Dept: Science</div>
              </div>
          </motion.section>
          <motion.section variants={animation} transition={{duration:0.75}} className='flex flex-col items-center  basis-1/3 text-center justify-between  gap-4'>
              <div className='[clip-path:circle(50%_at_50%_50%)] w-28 h-28  flex justify-center text-[#E0D2C7] items-center bg-[#20242D]'>College</div>
              <div>
                <div>HSC</div>
                <div>Passing Year: 2015</div>
                <div>Dept: Science</div>
              </div>
          </motion.section>
          <motion.section variants={animation} transition={{duration:0.75}} className='flex flex-col items-center  basis-1/3 text-center justify-between gap-4'>
              <div className='[clip-path:circle(50%_at_50%_50%)]  w-28 h-28  flex justify-center text-[#E0D2C7] items-center bg-[#20242D]'>University</div>
              <div>
                <div>Graduation</div>
                <div>Passing Year: 2021</div>
                <div>Dept: CSE</div>
              </div>
          </motion.section>
      
      </motion.div>
    </motion.section>
  )
}

export default memo(Education)