import aboutImg from '../../assets/img-1.jpg';
import { InfoComponent } from "./infoComponent";

export const AboutSection1 = () => {
  return (
    <InfoComponent
      bgColor="bg-veryLightBlue"
      infoTitle={
        <>
          Your Creative Partner for <br />
          Exceptional Design
        </>
      }
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

export const AboutSection2 = () => {
  return (
    <InfoComponent
      bgColor="bg-veryLightBlue"
      infoTitle={
        <>
          Unlock Your Brand's Potential with <br /> Our Exceptional Design and Service
        </>
      }
      infoDesc={`
            At Ink and Pixels Nigeria Limited, we pride ourselves on delivering high-quality 
            designs tailored to your unique needs. Our personalized service and innovative 
            solutions ensure that your brand stands out in a competitive market.
          `}
        imgSrc={aboutImg}
        imgAlt="About Image"
        buttonText="Learn more"
    />
  )
}
