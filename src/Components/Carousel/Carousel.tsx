import { useEffect, useState } from "react"
import CarouselItems from "./CarouselItems"
import ArrowOverlay from "./ArrowOverlay"
import CupCoffee from "../../assets/CupCoffee.jpg"
import CoffeeBeans from "../../assets/CoffeeBeans.jpg"
import Cupbeans from "../../assets/CupBeans.jpg"


const imageArray=[CupCoffee,CoffeeBeans,Cupbeans]




const Carousel = () => {

  const [position,setPositon]=useState(0)


  const currentHandler=(current:number)=>{
       setPositon(current)
  }

  useEffect(()=>{

     const slide=setInterval(()=>{
        setPositon(prev=>prev===imageArray.length-1? 0: prev+1)
     },5000)

     return ()=>{
        clearInterval(slide)
     }

  },[])



  return (
    <section className='h-[28rem] flex justify-between relative overflow-hidden mb-16'>
         <CarouselItems image={imageArray[position]} headings={{h1:"Do You Like Coffee",h2:"Finest Coffee"}}/>
        <ArrowOverlay current={position} currentHandler={currentHandler} maxItem={imageArray.length}  />
    </section>
  )
}

export default Carousel