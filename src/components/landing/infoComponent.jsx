import { Container } from "../container"
import { Button } from "../button";

export const InfoComponent = ({
    bgColor, textColor, infoTitle, infoDesc,
    imgSrc, imgAlt, buttonText, flexDir, otherSection
}) => {
    return (
        <section className={bgColor}>
            <Container className={`flex flex-col gap-10 py-20 md:items-center ${flexDir}`}>
                {/* ====== DESC SECTION ===== */}
                <section className={`${textColor} flex flex-col gap-6 md:w-[50%]`}>
                    <h1 className="text-[30px] leading-tight md:text-[36px]">
                        {infoTitle}
                    </h1>
                    <p className='text-[14px] md:text-[18px]'>
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
                    {
                        otherSection ? otherSection : ""
                    }
                </section>
                {/* ====== IMAGE SECTION ===== */}
                <section className="md:w-[50%]">
                    <div className="">
                        <img className="w-[500px] h-[400px] rounded-3xl object-cover md:h-[500px] md:w-full" src={imgSrc} alt={imgAlt} />
                    </div>
                </section>
            </Container>
        </section>
    )
}

