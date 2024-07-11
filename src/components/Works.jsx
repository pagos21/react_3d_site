/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import Tilt from 'react-parallax-tilt'
import {motion } from 'framer-motion'
import {styles} from '../styles'
import { SectionWrapper } from '../hoc'
import {projects} from '../constants'
import { slideIn } from '../utils/motion'
import { useRef } from "react";
import "./worksStyle.css"


const ProjectCard = ({index, name, description, tags, image, image_alt, source_code_link}) => {
  const imageRef=useRef(image);
  const active=useRef(false);
  let image2 = image;
  let counter = 0
  function ss(){
    if (counter == 10) {
      active.current = true
      imageRef.current.src = image_alt
      document.querySelector("#theimg-"+index).classList.add("myimg")
      counter = 0;
    } else {
      document.querySelector("#theimg-"+index).classList.remove("myimg")
      active.current = false
      imageRef.current.src = image
      counter++
    }
  }
  return (
    // <motion.div variants={fadeIn("up", "string", index * 0.5, 0.75)}>
      <Tilt options={{max: 45, scale:1, speed: 450}} style={{backgroundColor: "rgb(24, 33, 54)"}} className='bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img id={`theimg-${index}`} onClick={ss} ref={imageRef} src={image2} alt={name} className='w-full h-full object-cover rounded-2xl'/>
        </div>
        <div className='mt-5'>
          <h3 className='font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) =>(
            <p key={`card-item-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    // </motion.div>
  )
}
const Works = () => {
  return (
    <>
    <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
    <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Works.</h2>
    </motion.div>
    <div className='w-full flex'>
      <motion.div className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' >
      Here is a list of all the projects I have created completely independently. Each project is briefly described. It reflects all my skills in working with different technologies (even simultaneously) and solving problems of a complex nature. Each project was planned, designed and created by me, always keeping in mind development best practices and IT security rules.
      </motion.div>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard key={`card-${project.id}`} index={index} {...project}></ProjectCard>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, 'work') 