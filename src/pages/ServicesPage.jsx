import { useState } from "react"



const ServicesPage = () => {
  const [inProgress, setInProgress] = useState(false)
  return (
    <div>
      {
        !inProgress ? (
          <>
          </>
        ) : (
          <div className="h-[50vh] bg-lightBlue text-6xl px-5 flex items-center justify-center text-white">
            Page under construction
          </div>
        )
      }
    </div>
  )
}

export default ServicesPage
