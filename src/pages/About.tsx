import React from 'react'
import Banner from '../Components/Banner'
import { motion } from 'framer-motion'
import staggeredText from '../Utilities/StaggeredText'

const About = () => {
  return (
    <div>
      <Banner title="About Me."/>
      <motion.div initial={{scaleY:0}} animate={{scaleY:1}} transition={{delay:2,duration:1.5}} className="p-8 origin-top h-[100vh] bg-[#E0D2C7]">

      <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5}}>The</motion.h2>
               <div className='flex'>
                            <motion.span>
                                <motion.span initial="hidden" animate="show" transition={{delayChildren:3,staggerChildren:0.06}} className=' text-3xl md:text-5xl lg:px-4 lg:pl-8 lg:text-6xl '>
                                    {staggeredText("Introduction","pop-up")}
                                </motion.span>
                            </motion.span>
              </div>

              <div className='md:p-8 my-8 md:my-4'>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:4,duration:1}} className='w-full flex md:justify-center text-medium md:text-2xl'>
                  <span className='md:px-2'>Personal</span>
                  <span className='px-1'>/</span>
                  <span className='md:px-2'>Technical</span>
                </motion.div>
              </div>
        </motion.div>
    </div>
  )
}

export default About