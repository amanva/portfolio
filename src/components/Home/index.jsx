import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logoAVblank.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['', 'A', 'm', 'a', 'n']
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
      <Logo />
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
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            /> */}
            Hi, I'm Aman Vahora, a very passionate software engineer
          </h2>
          
          {/* <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> */}
          <div className = "skills">
          <p>Skills</p>
        </div>
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
    </>
      

  )
}

export default Home
