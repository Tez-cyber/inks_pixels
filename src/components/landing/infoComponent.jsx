import { Container } from "../container"
import { Button } from "../button";

export const InfoComponent = ({
    bgColor, infoTitle, infoDesc,
    imgSrc, imgAlt, buttonText
}) => {
    return (
        <section className={bgColor}>
            <Container className="flex flex-col gap-6 py-20 md:items-center md:flex-row">
                {/* ====== DESC SECTION ===== */}
                <section className=' text-darkBlue flex flex-col gap-6 md:w-[50%]'>
                    <h1 className="text-[35px] leading-tight md:text-[36px] lg:text-[40px]">
                        {infoTitle}
                    </h1>
                    <p className='text-[14px] md:w-[75%] md:text-[18px]'>
                        {infoDesc}
                    </p>
                    {
                        buttonText ?
                            (
                                <div className='flex gap-3'>
                                    <Button
                                        size="md"
                                        variant="secondary"
                                        className="transition-all duration-150 hover:bg-darkBlue hover:text-white hover:border-lightBlue active:border-0"
                                    >
                                        {buttonText}
                                    </Button>
                                </div>
                            ) : ("")
                    }
                </section>
                {/* ====== IMAGE SECTION ===== */}
                <section className="md:w-[50%]">
                    <div className="">
                        <img className="w-[500px] h-[500px] rounded-3xl object-cover" src={imgSrc} alt={imgAlt} />
                    </div>
                </section>
            </Container>
        </section>
    )
}

