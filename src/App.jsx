import { Navbar } from "./components/navbar/navbar"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
