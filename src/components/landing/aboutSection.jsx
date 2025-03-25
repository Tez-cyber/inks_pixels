import { Container } from "../container"
import aboutImg from '../../assets/img-1.jpg';
import { Button } from "../button";

export const AboutSection = () => {
  return (
    <section className="bg-veryLightBlue">
      <Container className="flex flex-col gap-6 py-20 md:items-center md:flex-row">
        {/* ====== DESC SECTION ===== */}
        <section className=' text-darkBlue flex flex-col gap-6 md:w-[50%]'>
          <h1 className="text-[35px] leading-tight md:text-[36px] lg:text-[40px]">
            Your Creative Partner for Exceptional Design
          </h1>
          <p className='text-[14px] md:w-[75%] md:text-[18px]'>
            At Ink and Pixels Nigeria Limited, we strive to be the leading creative partner in
            Nigeria, dedicated to transforming your vision into reality. Our commitment to 
            exceptional design and flawless execution ensures that your brand stands out 
            in a competitive market.
          </p>
          <div className='flex gap-3'>
            <Button
              size="md"
              variant="secondary"
              className="transition-all duration-150 hover:bg-darkBlue hover:text-white hover:border-lightBlue active:border-0"
            >
              Learn more
            </Button>
          </div>
        </section>
        {/* ====== IMAGE SECTION ===== */}
        <section className="md:w-[50%]">
          <div className="">
            <img className="w-[500px] h-[500px] rounded-3xl object-cover" src={aboutImg} alt="About Image" />
          </div>
        </section>
      </Container>
    </section>
  )
}
