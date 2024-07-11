import {useEffect} from 'react';
import {About, Contact, Experience, Hero, Tech, Works, StarsCanvas, Navbar} from '../components'

const Site = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech></Tech>
            <Works></Works>
            <div className="relative z-0" >
                <Contact />
                <StarsCanvas></StarsCanvas>
            </div>
        </div>
    )
}
export default Site;