import Banner from "../Components/Banner"
import {motion} from "framer-motion"
import ProjectContainer from "../Components/ProjectContainer"



const Projects = () => {
  return (
    <div>
        <Banner title="Projects."/>
        <motion.div initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1, duration: 1.5 }}  className="origin-top h-[100vh] bg-[#E0D2C7]">
          <div className="flex justify-center"><ProjectContainer/></div>
        </motion.div>
    </div>
  )
}

export default Projects