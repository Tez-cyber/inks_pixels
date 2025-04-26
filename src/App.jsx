import { Navbar } from "./components/navbar/navbar"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import { Footer } from "./components/footer"
import { AboutPage } from "./pages/AboutPage"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
