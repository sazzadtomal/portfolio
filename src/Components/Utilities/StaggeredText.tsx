import {motion} from 'framer-motion'

const animation={
    hidden:{
      opacity:0
    },
    show:{
      opacity:1
    }
  }




const staggeredText = (text:string,key:number) => {
  
    return text.split("").map((letter,index)=>(<motion.span
          className="relative z-30" variants={animation} 
          key={letter+index+key}>{letter}</motion.span>))
}

export default staggeredText