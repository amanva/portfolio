// import {Link, NavLink} from 'react-router-dom'
// import { useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/logoAVblank.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
return (
    <>
  <nav className="sidebar">
  <h1 className="logo" to = '/'>
  <img src={LogoS} alt="Logo" />
  </h1>
  <ul>
  <li><a href = "#home">Home</a></li>
    <li><a href = "#about">About</a></li>
    <li><a href = "#projects">Projects</a></li>
    <li><a href = "#contact">Contact</a></li>
  </ul>
  <div className="external">
  <ul2>
         <li>
           <a
            href="https://www.linkedin.com/in/aman-vahora"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/amanva"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
          </ul2>
  </div>
  </nav>
  
 
    </>
)
  }

export default Sidebar