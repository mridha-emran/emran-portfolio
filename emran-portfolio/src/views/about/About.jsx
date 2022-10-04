
import {useTypedText} from "../../components/typingText/TypingText"
import "./about.scss"
import Image from "../../assest/phNew.png"
import { motion } from 'framer-motion'
const About = () => {
  
  return (
    <>
     <div className="container-main about">
        <div className="container-left introduction">
          <div className="about-text">
              <h1 className= "header text-H1-color">
                {useTypedText("Hello everyone!", 50)}
                <br/>
                {useTypedText("I'm emran.", 50, 200)}
              </h1>
              <br/>
              <h2>
                {useTypedText("I graduated as a full-stack web developer and iam now looking for a job. You may have noticed it in mon portfolio, I did a few projects during my training. I enjoy creating interesting designs and user-friendly features. If you're looking for a developer to add to your team, I'd love to hear from you!", 30, 350)}
              </h2>

          </div> 
        </div>
        <div className="container-right my-image">
          <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1,1]}}
            transition={{type:'spring', duration:1, delay:2}}
            >
            <img src={Image} alt="cv"  />
           
          </motion.div>
          <motion.div  className='top-right-box' 
            initial={{height:"0"}}
            animate={{height: '12rem'}}
            transition={{type:'spring', duration:1, delay:3.3}}>
              
          </motion.div>
          <motion.div  className='bottom-left-box' 
            initial={{height:"0"}}
            animate={{height: '12rem'}}
            transition={{type:'spring', duration:1, delay:3.12}}>

            </motion.div>
        </div>
     </div>
      
    </>
  )
}

export default About