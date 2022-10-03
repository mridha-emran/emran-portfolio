import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub,faTwitter } from '@fortawesome/free-brands-svg-icons'
import './socialMediaIcon.scss'
const SocialMediaIcon = () => {
    return (
        < div className="icons">
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:3}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:""}}>
                    <FontAwesomeIcon icon={faGithub} color="#fff"  width={25} height={25} />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:3.2}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:""}}>
                    <FontAwesomeIcon icon={faTwitter} color="#fff"  width={25} height={25} />
                </NavLink>
            </motion.div>
            
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:3.4}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:""}}>
                    <FontAwesomeIcon icon={faLinkedin} color="#fff"  width={25} height={25}  />
                </NavLink>
            </motion.div>
    
            <motion.div 
                className='line' initial={ {height:0 }}
                animate={{height: '10rem'}}
                transition={{type:'spring', duration:1, delay:0.8}}
            >
           
            </motion.div>
            
        </div>
    )
}

export default SocialMediaIcon
