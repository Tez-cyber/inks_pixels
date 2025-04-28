import { HeroSection } from "./heroSection"
import { CoreIdentitySection } from "./coreIdentitySection"
import { ServicesSection } from "./servicesSection"
import { ChooseUsSection } from "./chooseUsSection"

export const AboutPageSections = () => {
    return (
        <div>
            <HeroSection />
            <CoreIdentitySection />
            <ServicesSection />
            <ChooseUsSection />
        </div>
    )
}