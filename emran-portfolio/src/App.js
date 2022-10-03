import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//components
import Navbar from './components/navbar/Navbar'
import Layout from './components/layout/Layout'
//viws
import About from './views/about/About'
import Contact from './views/contact/Contact'
import Home from './views/home/Home'
import Skills from './views/skills/Skills'

//scss
import './App.scss'
import SocialMediaIcon from './components/socialMediaIcon/SocialMediaIcon'



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Layout />
        <SocialMediaIcon />
      <Routes>     
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
