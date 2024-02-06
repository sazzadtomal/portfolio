import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Introduction from "./Components/Introduction"
import Education from "./Components/Education"
import { useState } from "react"



function App() { 

   const [heroView,setHeroView]=useState(true)



  return (
 
     <div>
        <Navbar showName={heroView}/>
        <main className="w-[90%] md:w-[80%] m-auto py-16">
          <Hero setView={(status)=>setHeroView(status)}/>
          <Introduction/>
          <Education/>
         
        </main>
     </div>


  )
}

export default App
