import Adder from '../Adder'
import './index.scss'

function Projects() {
    return (
      <>
        <section id="projects" className="project">
          <div className="container">
            <div className="project-content">
              <h1>projects</h1>
              <h2>Check out my Javascript projects. If you want to see my Java projects, take a peek at my github</h2>
              <div className="projects-grid">
                <Adder 
                title="The Last Magus"
                desc="A 2D platformer game made using Javascript, HTML, and CSS. This game features a mage who must journey through various levels and defeat the evil that has consumed the world."
                git = "https://github.com/amanva/The-Last-Magus"
                web = "https://amanva.github.io/The-Last-Magus/"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
   
  export default Projects;