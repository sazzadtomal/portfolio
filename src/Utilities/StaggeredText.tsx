import {easeIn, motion,cubicBezier} from 'framer-motion'

const slideIn={
    hidden:{
      opacity:0,
      fontSize:"3rem"
    },
    show:{
      opacity:1,
      fontSize:"3rem"
    }
  }

  const popUp={
    hidden:{
      opacity:0,
      top:20
    },
    show:{
      opacity:1,
      top:0
    }
  }
  








const staggeredText = (text:string,type:"slide-in"|"pop-up") => {
  
    return text.split("").map((letter,index)=>(<motion.span
          className="relative z-30" variants={type==="slide-in" ? slideIn : popUp} 
          key={letter+index+text}>{letter}</motion.span>))
}

export default staggeredText