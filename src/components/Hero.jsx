/* eslint-disable no-unused-vars */
import {motion}  from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import {useEffect, useState} from 'react'


const Hero = () => {
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
    return (
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
            <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text-[#5e61ff]'>Nicolas </span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am an enthusiast web e mobile developer with a lot of passion in different IT fields.
            </p>
            <div className='absolute left-[0] right-[0] bottom-[12rem] ml-auto mr-auto w-full flex justify-center'>
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                  animate={{
                    y:[0,24,0]
                  }}
                  transition={{
                    duration:1.5,
                    repeat:Infinity,
                    repeatType: 'loop'
                  }}
                  className='w-3 h-3 rounded-full bg-secondary mb-1'
                />
              </div>
            </a>
          </div>
          </div>
        </div>
        </section>
    )
  } else {
    return (
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#5e61ff]'></div>
            <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text-[#5e61ff]'>Nicolas </span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am an enthusiast web e mobile developer with a lot of passion in different IT fields.
            </p>
          </div>
        </div>
          <ComputersCanvas />
          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                  animate={{
                    y:[0,24,0]
                  }}
                  transition={{
                    duration:1.5,
                    repeat:Infinity,
                    repeatType: 'loop'
                  }}
                  className='w-3 h-3 rounded-full bg-secondary mb-1'
                
                />
              </div>
            </a>
          </div>
      </section>
    )
  }
}

export default Hero