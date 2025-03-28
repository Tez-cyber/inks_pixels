import { Navbar } from "./components/navbar/navbar"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import { Footer } from "./components/footer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
