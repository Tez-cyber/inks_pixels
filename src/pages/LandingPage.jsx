import { AboutSection1, AboutSection2 } from "../components/landing/aboutSection"
import { InnovateSection } from "../components/landing/innovateSection"
import { JumbotronSection } from "../components/landing/jumbotronSection"

const LandingPage = () => {
  return (
    <section className="">
        <JumbotronSection />
        <AboutSection1 />
        <InnovateSection />
        <AboutSection2 />
    </section>
  )
}

export default LandingPage