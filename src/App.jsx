import { Routes, Route } from "react-router-dom"
import { useLayoutEffect } from "react"

import { Navbar } from "./components/navbar/navbar"
import { LandingPage } from "./pages/LandingPage"
import { Footer } from "./components/footer"
import { AboutPage } from "./pages/AboutPage"
import { GetStartedPage } from "./pages/GetStartedPage"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ScrollToTop><LandingPage /></ScrollToTop>} />
        <Route path="/about" element={<ScrollToTop><AboutPage /></ScrollToTop>} />
        <Route path="/getstarted" element={<ScrollToTop><GetStartedPage /></ScrollToTop>} />
      </Routes>
      <Footer />
    </>
  )
}

const ScrollToTop = ({ children }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <>{ children }</>
}

export default App
