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
            <div className="flex items-center w-full p-10 h-[80vh]">
                <TestimonialSlider testimonials={testimonials} />
                <div className="h-full w-[60%] bg-darkBlue">hello2</div>
            </div>
        </section>
    )
}



