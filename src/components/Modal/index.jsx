import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Modal = ({setCloseModal}) => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_ridtmf8', 'template_b7r8ozj', form.current, 'U8r1FMa6zXvHDSneQ')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
    return (
      <>
      <div className='modalContainer'>
      
      <div className="outerModal">
        <div className="contact-form">
          <div className="title">
          <h1>Contact Form</h1>
          </div>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                <button onClick={() => {setCloseModal(false);}}>Close</button>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
          </div>
          </div>
      </>
    );
  }
   
  export default Modal;