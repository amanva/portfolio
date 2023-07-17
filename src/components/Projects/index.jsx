import Adder from '../Adder'
import {Adder2} from '../Adder'
import frage from '../../assets/images/frage.png'
import animal from '../../assets/images/animal.jpg'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'


import './index.scss'

function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
    return (
      <>
        <section id="projects" className="project">
          <div className="container">
            <div className="project-content">
            <h1>
             <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e','c','t', 's']}
              idx={15}
            />
          </h1>
              <h2>Check out my Javascript projects. If you want to see my Java projects, take a peek at my github</h2>
              <div className="projects-grid">
                <Adder 
                title="The Last Magus"
                desc="A 2D platformer game made using Javascript, HTML, and CSS. This game features a mage who must journey through various levels and defeat the evil that has consumed the world."
                git = "https://github.com/amanva/The-Last-Magus"
                web = "https://amanva.github.io/The-Last-Magus/"
                />
                <Adder2 
                title="Frage"
                desc="The player must shoot fruits that are falling down. The levels get progressively harder as the games goes on"
                git = "https://github.com/amanva/Mini_Game"
                web = "https://amanva.github.io/Mini_Game/"
                imgLink = {frage}
                />
                <Adder2 
                title="Trivia Maze"
                desc="A trivia maze where the user must navigate a maze and answer questions when prompted. The maze is generated randomly in which the exit is hidden."
                git = "https://github.com/amanva/Trivia_Maze_Game"
                web = "https://github.com/amanva/Trivia_Maze_Game"
                imgLink = {animal}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
   
  export default Projects;