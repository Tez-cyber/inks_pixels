import aboutImg1 from '../../assets/img-1.jpg';
import aboutImg3 from '../../assets/img-2.jpg';
import { InfoComponent } from "./infoComponent";

export const AboutSection1 = () => {
  return (
    <InfoComponent
      bgColor="bg-veryLightBlue"
      textColor="text-darkBlue"
      flexDir="flex-row"
      infoTitle={
        <>
          Your Creative Partner for <br className='hidden md:block' />
          Exceptional Design
        </>
      }
      infoDesc={`
            At Ink and Pixels Nigeria Limited, we strive to be the leading creative partner in
            Nigeria, dedicated to transforming your vision into reality. Our commitment to 
            exceptional design and flawless execution ensures that your brand stands out 
            in a competitive market.
          `}
      imgSrc={aboutImg1}
      imgAlt="About Image"
      buttonText="Learn more"
    />
  )
}

export const AboutSection2 = () => {
  return (
    <InfoComponent
      bgColor="bg-veryLightBlue"
      textColor="text-darkBlue"
      flexDir="flex-row"
      infoTitle={
        <>
          Unlock Your Brand's Potential with Our Exceptional Design and Service
        </>
      }
      infoDesc={`
            At Ink and Pixels Nigeria Limited, we pride ourselves on delivering high-quality 
            designs tailored to your unique needs. Our personalized service and innovative 
            solutions ensure that your brand stands out in a competitive market.
          `}
      imgSrc={aboutImg1}
      imgAlt="About Image"
      buttonText="Learn more"
    />
  )
}

export const AboutSection3 = () => {
  return (
    <InfoComponent
      bgColor="bg-lightBlue"
      textColor="text-white"
      flexDir="flex-row-reverse"
      infoTitle={
        <>
          Transforming brands with creativity and precision: Our success in numbers
        </>
      }
      infoDesc={
        <span className='text-sm'>
          With over 200 satisfied clients and 500 projects completed, we take pride in
          our commitment to excellence. For over 10 years, we have been at the forefront
          of creative solutions in Nigeria.
        </span>
      }
      imgSrc={aboutImg3}
      imgAlt="About Image"
      otherSection={
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className="">
            <p className='text-4xl pb-2 md:text-5xl'>200</p>
            <span className='text-sm'>Clients served with dedication and creativity.</span>
          </div>
          <div className="">
            <p className='text-4xl pb-2 md:text-5xl'>500</p>
            <span className='text-sm'>Projects completed, each with unique flair.</span>
          </div>
        </div>
      }
    />
  )
}
