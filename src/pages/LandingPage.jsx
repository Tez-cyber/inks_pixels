import { AboutSection } from "../components/landing/aboutSection"
import { InnovateSection } from "../components/landing/innovateSection"
import { JumbotronSection } from "../components/landing/jumbotronSection"

const LandingPage = () => {
  return (
    <section className="">
        <JumbotronSection />
        <AboutSection />
        <InnovateSection />
    </section>
  )
}

export default LandingPage