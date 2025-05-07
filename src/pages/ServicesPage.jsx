import { useState } from "react"
import { ServiceSection } from "../components/services/serviceSection"



const ServicesPage = () => {
  const [inProgress, setInProgress] = useState(false)
  return (
    <div>
      {
        !inProgress ? (
          <>
            <ServiceSection />
          </>
        ) : (
          <div className="h-[50vh] bg-lightBlue px-5 flex items-center justify-center text-white text-3xl md:text-6xl">
            Page under construction
          </div>
        )
      }
    </div>
  )
}

export default ServicesPage
