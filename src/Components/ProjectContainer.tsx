import instaSnap from "../assets/instasnap.png"
import { useState } from "react"

const ProjectContainer = () => {
    const [loaded,setLoaded]=useState(false)
 
    return (
 
        <div className='flex items-center flex-col md:flex-row border m-2 px-4  w-[80%]'>
            <div className="w-full py-8">
                <h1 className="flex-grow text-2xl font-bold">InstaSnap</h1>
                <h2 className="flex-grow">Type: Social Media</h2>
                <h3>Github: <a href="https://github.com/sazzadtomal/instasnap">https://github.com/sazzadtomal/instasnap</a></h3>
                <h3>Tech: NextJS,React,Typescript,Appwrite</h3>
            </div>
            <div className="w-[360px] relative flex justify-center items-center">
                {!loaded && <div className="w-full absolute flex justify-center items-center">
                    <div className="loader"></div>
                </div>}
                <img onLoad={()=>setLoaded(true)} className={`transition-all ${loaded ? "opacity-100": "opacity-0"} w-full hover:opacity-9`} src={instaSnap} alt="" />
            </div>
        </div>

  )
}

export default ProjectContainer