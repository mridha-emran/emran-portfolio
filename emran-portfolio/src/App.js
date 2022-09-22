import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import About from './views/about/About'
import Contact from './views/contact/Contact'
import Home from './views/home/Home'
import Skills from './views/skills/Skills'



function App() {
  return (
    <>
      <Router>
        <Navbar />
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
