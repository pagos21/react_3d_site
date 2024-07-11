/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import  Tilt  from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' variants={fadeIn("right", "spring", 0.5*index, 0.75)}>
        <div style={{backgroundColor: "rgb(24, 33, 54)"}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[145px] flex justify-evenly items-center flex-col' options={{max:45, scale:1, speed: 450}}>
          <img src={icon} alt="icon" className='w-16 h-16 object-contain absolute top-[-33px]' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRO</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <p className='mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]'>I develop software in Angular, Vue3, Flutter, Java, PHP, extJs, Laraver, Typerscript, Python, Flask, Djangon React and some C#. In short a little bit of all frameworks and programming languages because I like to stay always hungry.</p>
        <p className='mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]'>I am also passionate about CyberSecurity and have earned two certifications (eJPT and eCPPTv2) from eLearnSecurity.</p>
      </motion.div>
      <div className='{mt-10 flex flex-wrap gap-10' style={{marginTop: "60px"}}>
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about") 