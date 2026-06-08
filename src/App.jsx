import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Features from "./components/Features"
import Models from "./components/Models"
import CTABand from "./components/Ctaband"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import { Routes, Route } from "react-router-dom"

import Aurora from "./components/Models/Aurora/Main"
import Petals from "./components/Models/Petals/Main"
import Eclipse from "./components/Models/Eclipse/Main"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Models />
      <CTABand />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

function App() {

  return (
    <>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/aurora" element={<Aurora />} />
        <Route path="/demo/eclipse" element={<Eclipse />} />
        <Route path="/demo/petals" element={<Petals />} />
        {/* <Route path="/espacios" element={<Espacios />} />
        <Route path="/equipo-docente" element={<Equipo />} /> */}
      </Routes>


    </>

  )
}

export default App