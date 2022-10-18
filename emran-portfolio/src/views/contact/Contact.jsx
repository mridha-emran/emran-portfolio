import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import "./contact.scss"
import Map from "../../components/map/Map"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PageTitle from '../../components/pageTitel/Pagetitel'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
         process.env.REACT_APP_SERVICE_ID,
         process.env.REACT_APP_TEMPLATE_ID,
         form.current,
         process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
       
          toast.success('Message successfully sent!')
          const timeout = setTimeout(() => {
            window.location.reload(false)
          }, 5600)

          return () => clearTimeout(timeout)
        },
        () => {
          toast.error('Failed to send the message, please try again')

        }
      )
  }
  return (
    <>  
    <div className="container-main">
      <PageTitle text ="CONTACT" />
      <div className="container-left">     
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
               <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
               />
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
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
      </div>
    
       <div className="container-right map">
        <div className="info-map">
          Emran Mridha
          <br />
          Paris, <br />
          noisy-le-sec
          <br />
        </div>
        <div className="map-wrap">
          <Map />
        </div>   
       </div>
    </div> 
    </>
  )
}

export default Contact







// // Email js

// import './contact.scss'

// const Contact = React.memo(() => {
//   const [letterClass, setLetterClass] = React.useState('text-animate')
//   React.useEffect(() => {
//     const interval = setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 3000)

//     return () => {
//       clearInterval(interval)
//     }
//   }, [])

//   const [validInpt, setValidInpt] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   })



//   // select all the input with useRef Hook
//   const emailRef = useRef(null)
//   const TextAreaRef = useRef(null)
//   const MessageRef = useRef(null)

//   const form = useRef(null)

//   // show Message function
  
//   // Error function
  
//   // success Function
 
  

//   return (
//     <>
//       <section className="contact-section">
//         <div className="fake-big">@</div>
//         <form ref={form} className="contact-form">
//           <div>
          
//               <p>
//                 I’m interested in freelance opportunities and I am always ready
//                 to build projects at anytime, if you have any job offer for me,
//                 you could use the form below to react out to me.
//               </p>
    
//           </div>
//             <div className="input-wrapper">
//               <div className="form-input-group">
//                 <input
//                   autoComplete="false"
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                 />
//                 <span className="switch__bg"></span>
//               </div>

//               <div className="form-input-group">
//                 <input
//                   autoComplete="false"
//                   ref={emailRef}
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                 />
//                 <span className="switch__bg"></span>
//               </div>
//             </div>
//             <div className="form-input-group">
//               <input
//                 autoComplete="false"
//                 type="text"
//                 placeholder="Subject"
//                 name="subject"
//               />
//               <span className="switch__bg"></span>
       
//             </div>

//             <div className="form-input-group">
//               <textarea
//                 autoComplete="false"
//                 ref={TextAreaRef}
//                 type="text"
//                 placeholder="Message"
//                 name="message"
//               />
//               <span className="switch__bg"></span>
            
//             </div>
      
//             <button type="submit" className="contact-button submit-button">
//               <div>
//                 <span className="bg switch__bg"></span>
//                 <span className="base switch__border-color"></span>
//                 <span className="text">
//                   Send Message
          
//                 </span>
//               </div>
//             </button>
//             <footer className="footer">
//               <p> &copy; copyright All Right Reserved Almarex - 2022</p>
//             </footer>
//         </form>
//         <div className="google-map">
//           <Map />
//         </div>
//         <div ref={MessageRef} className="message"></div>
//       </section>
//     </>
//   )
// })

// export default Contact


