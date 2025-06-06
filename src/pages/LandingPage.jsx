import { AboutSection1, AboutSection2, AboutSection3 } from "../components/landing/aboutSection"
import { FAQLanding } from "../components/landing/FAQLanding"
import { GetStarted } from "../components/landing/getStarted"
import { InnovateSection } from "../components/landing/innovateSection"
import { JumbotronSection } from "../components/landing/jumbotronSection"
import { ProductSection } from "../components/landing/productSection"
import { Testimonials } from "../components/landing/testimonials/testimonials"

const LandingPage = () => {
  return (
    <section className="">
        <JumbotronSection />
        <AboutSection1 />
        <ProductSection />
        <InnovateSection />
        <AboutSection2 />
        <AboutSection3 />
        <Testimonials />
        <GetStarted />
        <FAQLanding />
    </section>
  )
}

export default LandingPage

