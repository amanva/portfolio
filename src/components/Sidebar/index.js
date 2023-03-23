import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logoAVblank.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  // faEnvelope,
  faSuitcase,
  // faBars,
  // faClose,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
<Link 
        className="logo" to = '/'>
        <img src={LogoS} alt="Logo" />
      </Link>
    <nav>
      <NavLink
          exact="true"
          activeclassname="active"
          to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          // onClick={() => setShowNav(false)}>
          >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
      <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
    </nav>
    </div>

)

export default Sidebar