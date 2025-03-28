import aboutImg from '../../assets/img-1.jpg';
import { InfoComponent } from "./infoComponent";

export const AboutSection = () => {
  return (
    <InfoComponent
      bgColor="bg-veryLightBlue"
      infoTitle="Your Creative Partner for Exceptional Design"
      infoDesc={`
            At Ink and Pixels Nigeria Limited, we strive to be the leading creative partner in
            Nigeria, dedicated to transforming your vision into reality. Our commitment to 
            exceptional design and flawless execution ensures that your brand stands out 
            in a competitive market.
          `}
        imgSrc={aboutImg}
        imgAlt="About Image"
        buttonText="Learn more"
    />
  )
}
