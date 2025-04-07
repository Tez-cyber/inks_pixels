import React from 'react'
import { FAQItem } from '../FAQ'
import { section } from 'framer-motion/client'
import { Container } from '../container'
import { Button } from '../button'

export const FAQLanding = () => {
    const faqs = [
        {
            question: "What services do you offer?",
            answer: `We offer a wide range of services including branding, design, packaging, 
                and printing solutions. Our goal is to help businesses create a strong visual 
                identity. Whether you need a logo, promotional materials, or custom packaging, 
                we have you covered.
            `
        },
        {
            question: "How can I order?",
            answer: `
                You can easily place an order by contacting us through our website or by phone. 
                Our team will guide you through the process and help you choose the right 
                solutions for your needs. We strive to make ordering as seamless as possible.
            `
        },
        {
            question: "What is your turnaround time?",
            answer: `
                Turnaround times vary based on the complexity of the project and current workload. 
                Typically, we aim to deliver within 7-14 business days. For urgent requests, 
                please reach out to discuss expedited options.
            `
        },
        {
            question: "Do you offer customization?",
            answer: `
                Yes, we specialize in customized products tailored to your specifications. 
                From personalized gifts to unique packaging designs, we can create solutions 
                that reflect your brand. Just let us know your requirements, and 
                we'll bring your vision to life.`
        },
        {
            question: "What are your payment options?",
            answer: `
                We accept various payment methods including bank transfers, credit cards, and 
                mobile payments. Our goal is to provide flexible options to accommodate your needs. 
                For more details, please contact our support team.
            `
        },
    ]
    return (
        <section className='bg-lightBlue text-white py-20'>
            <Container className="flex flex-col gap-5 md:flex-row">
                <div className="flex flex-col gap-6 md:w-[40%]">
                    <h1 className="text-[30px] leading-tight uppercase md:text-[36px]">
                        faqs
                    </h1>
                    <p className='text-[14px] md:text-[18px]'>
                        Find answers to your most common questions about our
                        services and offerings.
                    </p>
                    <Button
                        size="md"
                        variant="secondary"
                        className="w-fit transition-all duration-150 hover:bg-darkBlue hover:text-white hover:border-lightBlue active:border-0"
                    >
                        Contact
                    </Button>
                </div>
                <div className=" rounded-lg overflow-hidden md:w-[60%]">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
