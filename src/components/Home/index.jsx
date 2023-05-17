import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoA from '../../assets/images/logoAVblank.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import BallHolder from "../BallHolder"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r'
  ]

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
   <>
<section id ="home" className = "homepage">
      <div className="container">
        <div className="homeComp">
          <div className="noSkill">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
            </h1>
            <br />
            <h2>
            Hi, I'm Aman Vahora, a very passionate software engineer from Seattle, Washington
          </h2>
          </div>
          <div className="logoImage">
      <img
        className="solid-logo"
        src={LogoA}
        alt="dev"
      />
      </div>
        </div>
        <div className = "skills">
          <p>Skills</p>
        
        {/* <div className="stage-cube-cont">
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
           </div> */}
         </div>  
      </div>
      <div className="circles">
         <BallHolder />
          </div> 
      </div>
      </section>
    </>
      

  )
}

export default Home
