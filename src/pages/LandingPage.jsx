import { AboutSection1, AboutSection2, AboutSection3 } from "../components/landing/aboutSection"
import { GetStarted } from "../components/landing/getStarted"
import { InnovateSection } from "../components/landing/innovateSection"
import { JumbotronSection } from "../components/landing/jumbotronSection"

const LandingPage = () => {
  return (
    <section className="">
        <JumbotronSection />
        <AboutSection1 />
        <InnovateSection />
        <AboutSection2 />
        <AboutSection3 />
        <GetStarted />
    </section>
  )
}

export default LandingPage