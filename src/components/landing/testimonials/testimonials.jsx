import { Button } from "../../button"
import { TestimonialSlider } from "./testimonialSlider"


export const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            position: "CEO, Company",
            testimonial: `The bags, window graphics, flyers, business cards, 
                delivery stickers and receipts are all great. Your works is  neat and sharp. 
            `,
            image: "/products_assets/menu.jpg"
        },
        {
            name: "Jane Smith",
            position: "CTO, Company",
            testimonial: `The bags, window graphics, flyers, business cards, 
                delivery stickers and receipts are all great. Your works is  neat and sharp. 
            `,
            image: "/products_assets/menu.jpg"
        },
        {
            name: "Jane Smith",
            position: "CTO, Company",
            testimonial: `The bags, window graphics, flyers, business cards, 
                delivery stickers and receipts are all great. Your works is  neat and sharp. 
            `,
            image: "/products_assets/menu.jpg"
        },
        {
            name: "Jane Smith",
            position: "CTO, Company",
            testimonial: "I highly recommend this!",
            image: "/products_assets/menu.jpg"
        },
        {
            name: "Jane Smith",
            position: "CTO, Company",
            testimonial: "I highly recommend this!",
            image: "/products_assets/menu.jpg"
        },
    ]
    return (
        <section>
            <div className="flex flex-col items-center w-full p-10 md:h-[90vh] md:flex-row">
                <TestimonialSlider testimonials={testimonials} />
                <div className="h-full bg-lightBlue text-white flex flex-col justify-center gap-6 p-10 md:w-[60%]">
                    <h2 className="font-semibold text-gold text-xl">Start your project</h2>
                    <p className="leading-loose">
                        At Ink and Pixels Nigeria Limited, we're your leading printing partner in 
                        Nigeria, dedicated to bringing your creative vision to life with flawless
                        execution. Our commitment to exceptional print quality ensures your brand 
                        makes a lasting impression.
                    </p>
                    <Button
                        size="md"
                        variant="secondary"
                        className="w-fit"
                        href="/getstarted"
                    >
                        Start your project
                    </Button>
                </div>
            </div>
        </section>
    )
}



