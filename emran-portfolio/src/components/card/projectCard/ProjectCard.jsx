import React from 'react';
import './projectCard.scss';
import {
  faPlay,faCode

} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion";

function ProjectCard({ id, name, desc, tags, code, demo, image,delay=0}) {
    return (
           
            <motion.div
                initial={{x: "-100%",opacity: 0,}}
                whileInView={{x: 0,opacity: 1,}}
                transition={{delay,}}
                key={id}
                className='ProjectCard'
            >
                <div className='projectContent'>
                    <h2>{name} </h2>
                    <img src={image} alt={name} />
                    <div className='project-showcaseBtn'> 

                    { demo && 
                      <a href={demo} target='_blank' 
                         rel="noreferrer"className="iconBtn">
                           <FontAwesomeIcon icon={faPlay}/>
                     </a>       
                    }
                       
                        <a href={code} target='_blank'
                           rel='noreferrer' className="iconBtn">  
                           <FontAwesomeIcon icon={faCode} className="icon"  />
                        </a>
                    </div>
                </div>
                <p className='project-desc'>
                    {desc}
                </p>
                <div className='project-lang'>
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </motion.div>
        
    );
}

export default ProjectCard;