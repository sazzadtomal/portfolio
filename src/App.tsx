import Navbar from "./Components/Navbar"
import { useState } from "react"
import Footer from "./Components/Footer"
import MainOutlet from "./MainOutlet"



function App() { 

   const [heroView,setHeroView]=useState(true)


  return (
 
     <div>
        <Navbar showName={heroView}/>
        <main className=" pt-16 md:pt-20">
           <MainOutlet/>
        </main>
        <Footer/>
     </div>


  )
}

export default App
