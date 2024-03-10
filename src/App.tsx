import Navbar from "./Components/Navbar"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"



function App() { 

   const [heroView,setHeroView]=useState(true)



  return (
 
     <div>
        <Navbar showName={heroView}/>
        <main className=" pt-16 md:pt-20">
           <Outlet/>
        </main>
        <Footer/>
     </div>


  )
}

export default App
