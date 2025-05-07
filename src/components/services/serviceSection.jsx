import { AccessTime, AutoFixHigh, Cases, CasesOutlined, ColorLens, LocalPhone, MarkEmailRead, Print } from '@mui/icons-material';
import React from 'react'

export const ServiceSection = () => {
    const services = [
        {
            title: "Branding Materials",
            icon: <ColorLens fontSize='medium' />,
            description:
                "Create a lasting impression with our professional branding solutions. From logos to complete brand guidelines.",
            image:
                "https://readdy.ai/api/search-image?query=professional%20branding%20materials%20displayed%20elegantly%20on%20a%20modern%20desk%20with%20minimalist%20design%20elements%2C%20soft%20lighting%20and%20navy%20blue%20accents%20creating%20a%20sophisticated%20atmosphere&width=400&height=300&seq=service1&orientation=landscape",
        },
        {
            title: "Packaging Solutions",
            icon: <CasesOutlined fontSize='medium' />,
            description:
                "Stand out on shelves with custom packaging that tells your brand story and protects your products.",
            image:
                "https://readdy.ai/api/search-image?query=elegant%20product%20packaging%20designs%20displayed%20on%20minimal%20white%20surface%20with%20soft%20shadows%2C%20professional%20studio%20lighting%20highlighting%20premium%20materials%20and%20finishes&width=400&height=300&seq=service2&orientation=landscape",
        },
        {
            title: "Printed Materials",
            icon: <Print fontSize='medium' />,
            description:
                "High-quality printing services for all your business needs - from business cards to large format printing.",
            image:
                "https://readdy.ai/api/search-image?query=collection%20of%20premium%20printed%20materials%20including%20business%20cards%20catalogs%20and%20brochures%20arranged%20artistically%20on%20white%20surface%20with%20subtle%20shadows&width=400&height=300&seq=service3&orientation=landscape",
        },
        {
            title: "Custom Products",
            icon: <AutoFixHigh />,
            description:
                "Bring your unique ideas to life with our custom product development and manufacturing services.",
            image:
                "https://readdy.ai/api/search-image?query=custom%20designed%20products%20displayed%20in%20modern%20showroom%20setting%20with%20dramatic%20lighting%20and%20minimalist%20aesthetic%20highlighting%20product%20details&width=400&height=300&seq=service4&orientation=landscape",
        },
    ];
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-darkBlue mb-4">
                        Our Services
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Transform your brand with our comprehensive range of creative and
                        printing solutions. Each service is crafted to meet your unique
                        needs and exceed expectations.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {services
                        .map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <i
                                            className={`text-gold`}
                                        >
                                            {service.icon}
                                        </i>
                                        <h3 className="text-2xl font-bold text-darkBlue">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <button
                                        onClick={() => (window.location.href = "/get-started")}
                                        className="flex items-center space-x-2 text-darkBlue font-semibold hover:text-gold transition-colors duration-300 cursor-pointer whitespace-nowrap"
                                    >
                                        {/* <span>Learn More</span> */}
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                {/* Contact Section */}
                <div className="mt-20 bg-gradient-to-r from-darkBlue to-[#000040] rounded-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12 text-white">
                            <h2 className="text-3xl font-bold mb-6">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-gray-300 mb-8">
                                Our team is ready to bring your vision to life. Get in touch
                                with us today and receive a response within 24 hours.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <i className="text-gold">
                                        <AccessTime />
                                    </i>
                                    <span>24-hour response time</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <i className=" text-gold">
                                        <LocalPhone />
                                    </i>
                                    <span>+234 123 456 7890</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <i className="text-gold">
                                        <MarkEmailRead />
                                    </i>
                                    <span>contact@inkandpixels.com</span>
                                </div>
                            </div>
                            <button
                                onClick={() => (window.location.href = "/getstarted")}
                                className="mt-8 bg-gold text-darkBlue px-8 py-3 rounded-md font-semibold hover:bg-[#FFE44D] transition-colors duration-300 flex items-center space-x-2 !rounded-button cursor-pointer whitespace-nowrap"
                            >
                                <span>Get Started</span>
                            </button>
                        </div>
                        <div className="relative h-full min-h-[400px]">
                            <img
                                src="https://readdy.ai/api/search-image?query=modern%20creative%20office%20workspace%20with%20design%20materials%20and%20digital%20devices%2C%20professional%20atmosphere%20with%20warm%20lighting%20and%20navy%20blue%20color%20scheme&width=600&height=400&seq=cta-image&orientation=landscape"
                                alt="Creative workspace"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
