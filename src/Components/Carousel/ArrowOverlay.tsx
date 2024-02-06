
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDot,GoDotFill } from "react-icons/go";



interface OverLayProps{
     current:number;
     currentHandler:(current:number)=>void;
     maxItem:number
}



const style='text-white opacity-50 hover:opacity-100 h-full no_selection'

const ArrowOverlay = ({current,currentHandler,maxItem}:OverLayProps) => {
 
  const bubbles=new Array(maxItem);

  const handleForward=()=>{
    currentHandler(current!==maxItem-1 ? current+1 : 0 )
  }
  
  const handleBackward=()=>{
    if(current>0) currentHandler(current-1)
 }


  return (
    <div className='flex w-full absolute h-full justify-between'>
             <IoIosArrowBack size={32} className={style} onClick={handleBackward}/>
             <div className="flex flex-grow justify-center items-end m-8">
                {[...bubbles].map((bubble,index)=> current===index ? <GoDotFill/>: <GoDot onClick={()=>(currentHandler(index))}/> )}
             </div>
             <IoIosArrowForward size={32} className={style} onClick={handleForward}/>
    </div>
  )
}

export default ArrowOverlay