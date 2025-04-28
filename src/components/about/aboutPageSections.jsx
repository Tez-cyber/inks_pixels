import { HeroSection } from "./heroSection"
import { CoreIdentitySection } from "./coreIdentitySection"
import { ServicesSection } from "./servicesSection"
import { ChooseUsSection } from "./chooseUsSection"
import { AboutSection1 } from "./aboutSection"
import { FAQLanding } from "../landing/FAQLanding"

export const AboutPageSections = () => {
    return (
        <div>
            <HeroSection />
            <CoreIdentitySection />
            <ServicesSection />
            <AboutSection1 />
            <ChooseUsSection />
            <FAQLanding />
        </div>
    )
}