import { Container } from "../container"


export const InnovateSection = () => {
    return (
        <section className="bg-darkBlue text-white">
            <Container className="py-20">
                {/* HEADING SECTION */}
                <section className="flex flex-col gap-4 items-center text-center">
                    <span className="text-gold capitalize font-bold">innovate</span>
                    <h1 className="text-[34px] leading-tight font-semibold md:text-[36px] md:w-[768px] lg:text-[48px]">
                        Transforming Ideas into Visual Masterpieces
                    </h1>
                    <p className="md:w-[768px]">
                        At Ink and Pixels, we specialize in crafting unique branding and design solutions that resonate with <br />
                        your audience. Our comprehensive services ensure your vision is brought to life with creativity and <br />
                        precision.
                    </p>
                </section>
                {/* GRID SECTION */}
            </Container>
        </section>
    )
}
