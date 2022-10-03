import { useEffect, useState } from 'react'
import { motion} from "framer-motion";

import AnimatedLetters from '../../components/animatedLetters/AnimatedLetters';

import { 
  faNodeJs,faCss3,faGitAlt,faHtml5,faJsSquare,faReact
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//scss
import './home.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [nameClass, setNameClass] = useState('text-animate')
  const skillArray = 'Full stack'.split('')
  const jobArray = 'Web Developer'.split('')

   useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
      setNameClass('myName')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])



  return (
    <>
        <div className="container-main-home">
       
          <div className="container-text">
            
            <div className="text-zone">
               <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <motion.div
                  className={`${letterClass} _14`}
                  style={{ display: "inline-block" }}
                  animate={{ rotate: [0, 50, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
                >
                  👋
                </motion.div>
                <br/>
                <h1 className={`${nameClass} _15`}>EMRAN </h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={skillArray}
                  idx={22}
                 />
                <br/>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={22}
                />
               </h1>
               <h2>Full Stack Developer/ Avid Learner</h2>
            </div>
          </div>

          <div className="container-cube">
           <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#6cc24a" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          </div>

        </div>
     
  
      
    </>
  )
}

export default Home