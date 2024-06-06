import instaSnap from "../assets/instasnap.png"
import { motion } from "framer-motion"
import { useState } from "react"

const ProjectContainer = () => {
    const [loaded,setLoaded]=useState(false)
 
    return (
 
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1}} transition={{delay:2,duration:1}} className='flex items-center flex-col md:flex-row border m-2 px-4 py-8 rounded-lg w-[90%] lg:w-[70%] border-[#20242D]'>
            <div className="w-full mb-4 md:basis-1/2">
                <div className="flex-grow">
                    <h1 className="text-2xl font-bold">InstaSnap</h1>
                    <h2 className="flex-grow">Type: Social Media</h2>
                    <h3>Github: <a href="https://github.com/sazzadtomal/instasnap" className="link">https://github.com/sazzadtomal/instasnap</a></h3>
                    <h3>Tech: NextJS,React,Typescript,Appwrite</h3>
                </div>
                <a className="hidden md:block mt-8" href="https://instasnap-alpha.netlify.app/sign-in" target="_blank" rel="noopener noreferrer" title="https://instasnap-alpha.netlify.app/sign-in" >Live Link</a>
                <div className='hidden flex-col gap-1 w-1/5 md:flex'>
                         <span className='w-full bg-[#20242D] rounded-xl h-[1px] block'></span>
                         <span className='w-[80%] bg-[#20242D] rounded-xl h-[1px] block'></span>
                </div>    
            </div>
            <div className="overflow-hidden shrink-0 md:basis-1/2 flex flex-col md:flex-row justify-center md:border-l-2 border-[#20242D] ">
                <div className="w-full md:w-[360px] relative flex justify-center items-center">
                    {!loaded && <div className="w-full absolute flex justify-center items-center">
                        <div className="loader"></div>
                    </div>}
                    <motion.img initial={{opacity:0,y:20,filter:"blur(5px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} transition={{duration:0.5,delay:2.5}}  className={`transition-all ${loaded ? "opacity-100": "opacity-0"} w-full hover:opacity-9 absolute top-[-8px]`} src={instaSnap} alt="" />
                    <motion.img initial={{opacity:0,y:20,filter:"blur(5px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} transition={{duration:0.5,delay:3}}  className={`transition-all ${loaded ? "opacity-100": "opacity-0"} w-full hover:opacity-9 absolute top-[-4px] `} src={instaSnap} alt="" />
                    <motion.img initial={{opacity:0,y:20,filter:"blur(5px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} transition={{duration:0.5,delay:3.5}} onLoad={()=>setLoaded(true)} className={`transition-all ${loaded ? "opacity-100": "opacity-0"} w-full hover:opacity-9`} src={instaSnap} alt="" />
                </div>
                <a  className="md:hidden mt-6 block"  href="https://instasnap-alpha.netlify.app/sign-in" target="_blank" rel="noopener noreferrer" title="https://instasnap-alpha.netlify.app/sign-in">Live Link</a>
                <div className='flex flex-col gap-1 md:hidden'>
                         <span className='w-full bg-[#20242D] rounded-xl h-[1px] block'></span>
                         <span className='w-[80%] bg-[#20242D] rounded-xl h-[1px] block lg:mx-auto'></span>
                </div>     
            </div>
            
        </motion.div>

  )
}

export default ProjectContainer