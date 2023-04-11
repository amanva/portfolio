import { useEffect, useState } from 'react'
import Work from '../../assets/images/person.png'

// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

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
    <div className="container">
      <div className = "aboutPage">
        <div className="image">
          <img className = "avatar"src = {Work} alt = "pers"/>

        </div>
         <div className="text-zone">
           <h1>
             <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', 'm', 'e']}
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
        </div>
      </div>
      </section>
 {/* //      <Loader type="pacman" /> */}
    </>
  )
}

export default About


