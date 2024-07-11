/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react"
import {motion} from 'framer-motion'
import { styles } from "../styles"
// import {EarthCanvas} from './canvas'
import { EarthCanvasLazy } from './canvas'
import  {SectionWrapper} from "../hoc"
import { slideIn } from "../utils/motion"
import {github, linkedin} from '../assets'
import Tilt from 'react-parallax-tilt'
import { getAnalytics, logEvent } from "firebase/analytics"

const Contact = () => {
  const analytics = getAnalytics()
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=> {
    const mq = window.matchMedia('(max-width: 920px)');
    setIsMobile(mq.matches);
    const handleMqChange = (event)=> {
      setIsMobile(event.matches);
    }
    mq.addEventListener('change', handleMqChange)
    return () => {
      mq.removeEventListener('change', handleMqChange)
    }
  }, [])
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-5 rounded-2xl">
        <p className={styles.sectionSubText}>Contact me now!</p>
        <h3 className={styles.sectionHeadTextText}>Here&apos;s some social links where you can get in touch with me.</h3>
        <h3 className={styles.sectionHeadTextText}>If you have solved the enigma, you can DM me at the solution address.</h3>
        {/* <h3 className={styles.sectionHeadTextText}>Currently, I only evaluate full-remote position or smart working positions(3+2).</h3> */}
        <Tilt option={{max:45, scale:1, speed: 450}} className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card" style={{marginTop: 20, cursor: "pointer"}}>
        <div onClick={() => {
          logEvent(analytics, "GitHub Visit")
          window.open("https://github.com/pagos21", "_blank")
        } } style={{backgroundColor: "rgb(24, 33, 54)"}} className='rounded-[20px] py-2 px-3 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </Tilt>
        <Tilt option={{max:45, scale:1, speed: 450}} className="green-pink-gradient p-[1px] rounded-[20px] shadow-card" style={{marginTop: 20, cursor: "pointer"}}>
        <div onClick={() => {
          logEvent(analytics, "LinkedIn Visit")
          window.open("https://www.linkedin.com/in/nicolas-p-b0a7b994?utm_source=share&utm_campaign=share_via&utm_content=profile", "_blank")}
        } style={{backgroundColor: "rgb(24, 33, 54)"}} className='rounded-[20px] py-2 px-3 min-h-[280px] flex justify-evenly items-center flex-col' >
            <img src={linkedin} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </Tilt>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className={!isMobile ? "xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" : "xl:flex-1 xl:h-auto"}>
        <EarthCanvasLazy/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")