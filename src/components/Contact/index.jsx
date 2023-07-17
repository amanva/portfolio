import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import Modal from '../Modal'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocation,
  faPhone,
  faEnvelope,
  faArrowPointer
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate')
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
    <section id="contact" className="contact">
    <div className="container">
      <div className="contact-info">
        <div className="contact-head">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C','o', 'n', 't', 'a', 'c', 't','', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am looking for software engineering positions. If you want to get in contact with me or have any requests or
            questions, don't hesitate to contact me using the form underneath.
          </p>
          </div>
          <div className='contact-icons'>
            <div className='contact-sepIcon'>
            <span className='inner'>
            <FontAwesomeIcon className = "icon" icon={faLocation}  />
            </span>
            <div className='contact-text'>
            <h1>Location</h1>
            <p>Seattle, Washington</p>
            </div>
            </div>
            <div className='contact-sepIcon'>
            <span className='inner'>
            <FontAwesomeIcon className = "icon" icon={faPhone}  />
            </span>
            <div className='contact-text'>
            <h1>Phone</h1>
            <p>+1 206-504-0268</p>
            </div>
            </div>
            <div className='contact-clickIcon'>
            <span className="outerSpan">
            <span className='inner'>
            <FontAwesomeIcon className = "hand" icon={faArrowPointer} />
            <FontAwesomeIcon className = "icon" icon={faEnvelope} onClick={() => {
        setOpenForm(true);
      }}>
      </FontAwesomeIcon>
      
            </span>
            </span>
            <div className='contact-text'>
            <h1>Email</h1>
            <p>Amanvahora4@gmail.com</p>
            </div>
            </div>
          </div>
          {openForm && <Modal setCloseModal={setOpenForm}/>}
      </div>
      </div>
      </section>
    </>
    
  )
}

export default Contact