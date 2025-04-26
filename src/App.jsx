import { Navbar } from "./components/navbar/navbar"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import { Footer } from "./components/footer"
import { AboutPage } from "./pages/AboutPage"
import { GetStartedPage } from "./pages/GetStartedPage"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/getstarted" element={<GetStartedPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
