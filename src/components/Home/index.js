import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span> */}
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
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          
        </div>
        <Logo />
        
        {/* <section className = "projectZone">
          <div className = "projects">
          <h2>Check out my projects:</h2>
            <div className = "project1">
              <iframe src = "https://www.youtube.com/embed/2dV2aVI7Omo" title="Last Magus" allowFullScreen></iframe>
              <div className="projectText">
                <h3>The Last Magus</h3>
                <p>A 2D platformer game made using Javascript, HTML, and CSS. 
                  This game features a mage who must journey through various levels and defeat the evil that has consumed the world.</p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      </section>
    </>
      

  )
}

export default Home
