import { HeroSection } from "./heroSection"
import { CoreIdentitySection } from "./coreIdentitySection"
import { ServicesSection } from "./servicesSection"

export const AboutPageSections = () => {
    return (
        <div>
            <HeroSection />
            <CoreIdentitySection />
            <ServicesSection />
        </div>
    )
}