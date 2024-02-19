import useMousePosition from "../Utilities/useMousePosition"
import {motion} from "framer-motion"
import { useState } from "react"

const Alchemy = () => {

  const {x,y}=useMousePosition()




  return (
    <section className=' basis-1/2 lg:px-32 mb-16 lg:mb-0 relative'>
        <h3 className='text-xl md:text-4xl mb-4 font-bold'>"Alchemy"</h3>
        <section className='flex flex-col lg:items-center lg:justify-center'>
            <p>{"Alchemy/ /design/ /seeks/ /to/ /turn/ /ordinary/ /into/ /gold/,/ /pushing/ /boundaries/ /with/ /unconventional/ /ideas/ /and/ /experimentation/./ /It's/ /about/ /innovation/ /and/ /transformation/,/ /creating/ /valuable/ /and/ /extraordinary/ /designs/ /from/ /basic/ /materials/ /and/ /concepts/./".split("/")
            .map(letter=> letter===" " ? <span>{letter}</span>:<motion.span transition={{duration:0.3}} whileHover={{backgroundColor:"#20242D",color:"#E0D2C7",padding:"1px 7px",borderRadius:"5px"}}>{letter}</motion.span>)}</p>
        </section>
    </section>
  )
}

export default Alchemy