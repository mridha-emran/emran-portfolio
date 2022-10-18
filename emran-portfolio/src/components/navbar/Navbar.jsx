
import React, { useState} from 'react';
import { NavLink} from "react-router-dom"
import { motion } from "framer-motion";
import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faClose} from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assest/Logo-em.png"


const Navbar = () => {
   const [click, setClick] = useState(false);
    const handleClickIcon = () => {
        setClick(!click);
    };

  return (
    <nav>
    <div className="nav_container">
                <motion.div initial={{ y: "-100%" }} whileInView={{ y: 0 }}>
                  <NavLink exact to="/">
                    <img  className ="Logo" src={Logo} alt="portfolio" />
                 </NavLink>
                 </motion.div>

                <div className="nav_icon" onClick={handleClickIcon}>
                  {click ?  <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
                </div>

                <ul className={click ? "nav_menu active" : "nav_menu"}>

                        <>
                            <li className="nav_item">
                                <NavLink exact to="/"  className="nav_links" onClick={handleClickIcon}>Home</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/about"  className="nav_links" onClick={handleClickIcon}>À propos</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/skills"  className="nav_links" onClick={handleClickIcon}>compétences</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/project"  className="nav_links" onClick={handleClickIcon}>project</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/contact"  className="nav_links" onClick={handleClickIcon}>contact</NavLink>
                            </li>
                                        
                        </>
                    
                </ul>
            </div>
        </nav>
  );
};



export default Navbar;