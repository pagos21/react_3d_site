/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {useEffect, useState} from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import {technologies} from '../constants'

const Tech = () => {
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
  if (isMobile) {
    return(
      <div className="flex flex-row flex-wrap justify-center gap-10">
      </div>
    )
  } else {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tec) => (
          <div className="w-28 h-28" key={tec.name}>
            <BallCanvas icon={tec.icon} />
          </div>
        ))}
      </div>
    )
  }
}

export default SectionWrapper(Tech, "tech")