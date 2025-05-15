import { useEffect, useRef, useState } from 'react';
import aboutImg1 from '../../assets/img-1.jpg';
import aboutImg3 from '../../assets/img-2.jpg';
import { InfoComponent } from "./infoComponent";

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const duration = 2000; // 2 seconds total
    const incrementTime = 20;
    const increment = Math.ceil(targetNumber / (duration / incrementTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);
  };

  return (
    <div ref={ref}>
      {count}
    </div>
  );
};

export const AboutSection1 = () => {
  return (
    <InfoComponent
      bgColor="bg-veryLightBlue"
      textColor="text-darkBlue"
      flexDir="md:flex-row"
      infoTitle={
        <>
          Exceptional Prints for Your Designs <br className='hidden md:block' />
        </>
      }
      infoDesc={`
            At Ink and Pixels Nigeria Limited, we're your leading printing partner in Nigeria, dedicated to 
            bringing your creative vision to life with flawless execution. Our commitment to exceptional print 
            quality ensures your brand makes a lasting impression.
          `}
      imgSrc={aboutImg1}
      imgAlt="About Image"
      buttonText="Learn more"
      href="/about"
    />
  )
}

export const AboutSection2 = () => {
  return (
    <InfoComponent
      bgColor="bg-veryLightBlue"
      textColor="text-darkBlue"
      flexDir="md:flex-row"
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
      href="/about"
    />
  )
}

export const AboutSection3 = () => {
  return (
    <InfoComponent
      bgColor="bg-lightBlue"
      textColor="text-white"
      flexDir="md:flex-row-reverse"
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
            <div className='text-4xl flex gap-1 pb-2 md:text-5xl'>
              <Counter targetNumber={200} />
              +
            </div>
            <span className='text-sm'>Clients served with dedication and creativity.</span>
          </div>
          <div className="">
            <div className='text-4xl flex gap-1 pb-2 md:text-5xl'>
              <Counter targetNumber={1000} />
              +
            </div>
            <span className='text-sm'>Projects completed, each with unique flair.</span>
          </div>
        </div>
      }
    />
  )
}
