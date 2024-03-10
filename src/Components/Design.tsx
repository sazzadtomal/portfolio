import { motion } from 'framer-motion'
import staggeredText from '../Utilities/StaggeredText'
import { useState } from 'react';
import Alchemy from './Alchemy';
import { Link } from 'react-router-dom';







const Design = () => {

  const [subtle,changeSubtle]=useState(1)  
  


  return (
    <motion.div initial={{opacity:0,scale:0}} animate={{opacity:0.95,scale:1}} transition={{duration:1,delay:3}} className="origin-left relative flex flex-col p-8 overflow-hidden bg-[#E0D2C7] mt-16">
        <div className='flex flex-col'>
            <h2>Design</h2>
               <div className='flex'>
                            <motion.span>
                                <motion.span initial="hidden" animate="show" transition={{delayChildren:4,staggerChildren:0.05}} className=' text-3xl md:text-5xl lg:px-4 lg:pl-8 lg:text-6xl '>
                                    {staggeredText("The Approach","pop-up")}
                                </motion.span>
                            </motion.span>
                        </div>
                </div>

                <div className='flex flex-col lg:text-center my-16 lg:my-8'>
                    <motion.section initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}} className='lg:w-1/2 lg:mx-auto lg:px-32 mb-16 '>
                        <h3  className={`text-xl md:text-4xl mb-4 font-bold`}>"Responsive"</h3>
                        <p>Screens shift, site adjusts! Responsive magic adapts content to phones, tablets, laptops, no zoom required. Seamless flow, effortless navigation, happy users, sky-high engagement. The future of browsing, accessible to all.</p>
                    </motion.section>
                    <motion.div initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1.5}} className='flex flex-col lg:flex-row'>

                        <Alchemy/>

                        <section className='basis-1/2 mb-8 lg:px-32 lg:mb-16'>
                            <h3 onMouseOver={()=>changeSubtle(Math.random()*15)} className='text-xl md:text-4xl mb-4 font-semibold'>"Immersive"</h3>
                            <motion.p  key={subtle} initial="hidden" animate="show" transition={{staggerChildren:0.025}}>Forget buttons, dive deep! Immersive web design captivates with interactive elements.Imagine: subtle animations 
                                 {staggeredText(" tell dynamic stories, sounds react to your touch","pop-up")} , and the site feels alive. It's a journey, not just browsing,
                                 leaving a lasting emotional impact.</motion.p>
                        </section>
                    </motion.div>
                </div>

                 <Link to="/" className='lg:absolute bottom-2 lg:right-8 pb-1 flex flex-col lg:justify-center'>
                     <motion.span initial="hidden" whileInView="show" transition={{staggerChildren:0.05,repeat:Infinity}} className='text-lg md:text-xl lg:px-4 '>
                                        {staggeredText("Learn more.","pop-up")}
                                     </motion.span>
                     <div className='flex flex-col gap-1'>
                         <span className='w-full bg-[#20242D] rounded-xl h-[1px] block'></span>
                         <span className='w-[80%] bg-[#20242D] rounded-xl h-[1px] block lg:mx-auto'></span>
                     </div>               
                 </Link>
                  
        
           
            
        </motion.div>
  )
}

export default Design