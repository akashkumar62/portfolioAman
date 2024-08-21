import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Project from "./pages/Project"
import Write from "./pages/Write"
import Research from "./pages/Research"

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/project" element={<Project/>} />
      <Route exact path="/write" element={<Write/>} />
      <Route exact path="/research" element={<Research/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
 