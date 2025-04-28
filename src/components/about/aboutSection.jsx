import { InfoComponent } from "../landing/infoComponent"

import aboutImg1 from '../../assets/img-1.jpg';

export const AboutSection1 = () => {
    return (
        <InfoComponent
            bgColor="bg-veryLightBlue"
            textColor="text-darkBlue"
            flexDir="md:flex-row"
            infoTitle={
                <>
                    Inks and pixels takes the stress out of print and manufacture
                    <div className="w-24 h-1 bg-[#FFD700] mt-4"></div>
                </>
            }
            infoDesc={
                <div className="text-gray-500">
                    Inks and Pixels Nig is your <span className="font-bold text-darkBlue">one-stop online printing</span> solution, 
                    created to provide businesses, corporations, and individuals 
                    worldwide with seamless access to <span className="font-bold text-darkBlue">quality printing and branding </span>
                    products. From business essentials like complementary cards, flyers, 
                    and brochures to event materials and personalized items, 
                    Inks and Pixels Nig handles all your printing needs.
                </div>
            }
            imgSrc={aboutImg1}
        />
    )
}
