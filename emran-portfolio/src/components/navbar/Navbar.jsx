import React from "react";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import './navbar.scss'
import Logo from "../../assest/Logo-em.png"


const Navbar = () => {
  return (
    <nav>
      <motion.div initial={{ y: "-100%" }} whileInView={{ y: 0 }}>
        <img  className ="Logo" src={Logo} alt="portfolio" />
      </motion.div>

      <div>
        <Link to="/">Accueil</Link>
        <Link to="/skills">compétences</Link>
        <Link to="/about">À propos</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;