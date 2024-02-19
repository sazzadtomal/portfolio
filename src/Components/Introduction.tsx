import {motion} from "framer-motion"

import { useState,memo } from "react"



const frontend=["HTML","CSS","React","NextJS","React Router","React Query"]
const backend=["NodeJS","Express","MongoDB","Spring Boot","MySQL","Rest","GrpahQL"]
const uxUi=["Photoshop","Figma","XD","Illustrator","UX Research","Mood Boarding","User Persona"]
const designThinking=["Empathy","Non-Biased","Attention-to-detail","Prototyping","Color Science"]
const testing=["Debugging","Mannual Tesing","Jest","Selenium","Bug Tracking"]


interface stringArray{
  [key:string]:Array<string>
}




const objectMap:stringArray={
  frontend,
  backend,uxUi,designThinking,testing
}


const Introduction = () => {
 
  const [isHovering,setHovering]=useState("frontend")


  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:0.95}} transition={{duration:2}} className=" relative flex flex-col p-8 overflow-hidden my-16">
      <h2 className="text-center text-xl mb-8 text-[#E0D2C7]">Expertise in a Glance.</h2>
      <div className="flex flex-col md:flex-row border border-[#E0D2C7] rounded-lg overflow-hidden my-8 ">
        <div className="flex flex-col justify-between md:max-w-[50%] basis-1/2 bg-[#20242D] text-[#E0D2C7]  px-2 py-8 md:p-16">
          <ul className="md:[&>*]:p-4 [&>*]:px-6 [&>*]:py-4 [&>*]:rounded-2xl flex flex-wrap md:block justify-center items-center">
            <li className="hover:border border-[#E0D2C7]  transition" onMouseOver={()=>setHovering("frontend")}>Frontend</li>
            <li className="hover:border border-[#E0D2C7]  transition" onMouseOver={()=>setHovering("backend")}>Backend</li>
            <li className="hover:border border-[#E0D2C7]  transition" onMouseOver={()=>setHovering("uxUi")} >UX/UI Design</li>
            <li className="hover:border border-[#E0D2C7]  transition" onMouseOver={()=>setHovering("designThinking")} >Design Thinking</li>
            <li className="hover:border border-[#E0D2C7]  transition" onMouseOver={()=>setHovering("testing")}>Testing</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center basis-1/2 md:max-w-[50%] pl-4 p-2 md:p-16 py-8 bg-[#E0D2C7]">
          <motion.ul>
          {objectMap[isHovering].map((item,index)=>(<motion.li key={item} initial={{opacity:0}} viewport={{once:true}} whileInView={{opacity:1}} transition={{duration:0.7,delay:index*0.1}}   className="mb-2">{item}</motion.li>))}
          </motion.ul>
    
        </div>
      </div>
      
    </motion.div>
  )
}

export default memo(Introduction)