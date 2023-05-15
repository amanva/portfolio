
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
    faExternalLink
  } from '@fortawesome/free-solid-svg-icons'
function Adder({title, desc, git, web}){
    return (
        <>
        <div className="AdderWrap">
        <div className="vid">
        <iframe src = "https://www.youtube.com/embed/2dV2aVI7Omo" className = "MagusVid" title="Last Magus" allowFullScreen></iframe>
        </div>
        <div className="texts">
        <h1>
            {title}
          </h1>
          <p>{desc}</p>
          <div className="link">
            <a target="_blank" href={git} rel="noreferrer">
              Source <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
            </a>
            <a target="_blank" href={web} rel="noreferrer">
              Demo
              <FontAwesomeIcon
              icon={faExternalLink}
              color="#4d4d4e"
              className="anchor-icon"
            />
            </a>
          </div>
        </div>
        </div>
        
        </>


    )


}

function Adder2({title, desc, git, web, imgLink}){
  return (
      <>
      <div className="AdderWrap">
      <div className="vid">
      <img src= {imgLink} alt="React Image" />
      </div>
      <div className="texts">
      <h1>
          {title}
        </h1>
        <p>{desc}</p>
        <div className="link">
          <a target="_blank" href={git} rel="noreferrer">
            Source <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
            className="anchor-icon"
          />
          </a>
          <a target="_blank" href={web} rel="noreferrer">
            Demo
            <FontAwesomeIcon
            icon={faExternalLink}
            color="#4d4d4e"
            className="anchor-icon"
          />
          </a>
        </div>
      </div>
      </div>
      
      </>


  )


}
export default Adder;
export {Adder2};