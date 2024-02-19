import Navbar from "./Components/Navbar"
import { useState } from "react"
import { Outlet } from "react-router-dom"



function App() { 

   const [heroView,setHeroView]=useState(true)



  return (
 
     <div>
        <Navbar showName={heroView}/>
        <main className=" py-16 md:py-20">
           <Outlet/>
        </main>
     </div>


  )
}

export default App
