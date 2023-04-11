import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <section className="about" id="about">
      <div className="container about-page">
         <div className="text-zone">
           <h1>
             <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Hey there, I'm Aman Vahora and a recent University of Washington graduate. I do many activites in my free time such
          as playing videos games or connecting with nature. I also play various sports to get the adrenaline pumping.
          </p>
          <p align="LEFT">
          I love learning new skills and can quickly pick up new things. I also love tackling interesting problems and figuring out how to solve them. 
          I've always been passionate when it has come to programming and I have built many different projects ranging from javascript games to websites.
          </p>
          <p>
            
          </p>
        </div> 
         <div className="stage-cube-cont">
           <div className="cubespinner">
           <div className="face1">
               <FontAwesomeIcon icon={faJava} color="#F06529" />
             </div>
             <div className="face2">
               <FontAwesomeIcon icon={faHtml5} color="#F06529" />
             </div>
             <div className="face3">
               <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
             </div>
             <div className="face4">
               <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
             </div>
             <div className="face5">
               <FontAwesomeIcon icon={faJs} color="#EFD81D" />
             </div>
           </div>
         </div>   
      </div>
      </section>
 {/* //      <Loader type="pacman" /> */}
    </>
  )
}

export default About


