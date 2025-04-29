import { Link } from 'react-router-dom';

import PaletteIcon from '@mui/icons-material/Palette';
import PrintIcon from '@mui/icons-material/Print';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CheckIcon from '@mui/icons-material/Check';
import EastIcon from '@mui/icons-material/East';

export const ServicesSection = () => {
    const servicesDetails = [
        {
            icon: <PaletteIcon />,
            src: "https://readdy.ai/api/search-image?query=professional%20branding%20and%20design%20materials%2C%20logo%20sketches%2C%20brand%20identity%20elements%2C%20color%20palettes%2C%20modern%20design%20workspace%20with%20navy%20blue%20and%20gold%20accents%2C%20high%20quality%20professional%20photography&width=600&height=400&seq=service-1&orientation=landscape",
            alt: "Branding & Design",
            title: "Branding & Design",
            description: [
                "Logo Design & Brand Identity",
                "Social Media Design",
                "Visual Identity Systems"
            ],
        },
        {
            icon: <LocalMallIcon />,
            src: "https://readdy.ai/api/search-image?query=custom%20packaging%20solutions%2C%20product%20boxes%2C%20bags%2C%20and%20labels%20with%20modern%20designs%2C%20packaging%20materials%20in%20various%20stages%20of%20production%2C%20professional%20studio%20lighting%20with%20navy%20blue%20and%20gold%20color%20scheme&width=600&height=400&seq=service-2&orientation=landscape",
            alt: "Packaging Solutions",
            title: "Packaging Solutions",
            description: [
                "Custom Packaging Bags",
                "Product Labeling",
                "Gift Packaging"
            ],
        },
        {
            icon: <PrintIcon />,
            src: "https://readdy.ai/api/search-image?query=professional%20printing%20services%2C%20modern%20printing%20equipment%2C%20custom%20apparel%20printing%2C%20stationery%2C%20and%20promotional%20materials%20being%20produced%2C%20organized%20workspace%20with%20navy%20blue%20and%20gold%20color%20accents&width=600&height=400&seq=service-3&orientation=landscape",
            alt: "Printing Services",
            title: "Printing Services",
            description: [
                "Custom Apparel Printing",
                "Stationery Printing",
                "Book & Promotional Materials"
            ],
        },
        {
            icon: <CardGiftcardIcon />,
            src: "https://readdy.ai/api/search-image?query=customized%20products%20and%20souvenirs%2C%20personalized%20gift%20items%2C%20frames%2C%20wall%20art%2C%20key%20holders%20and%20accessories%2C%20elegantly%20displayed%20with%20navy%20blue%20and%20gold%20color%20scheme%2C%20professional%20product%20photography&width=600&height=400&seq=service-4&orientation=landscape",
            alt: "Customized Products",
            title: "Customized Products",
            description: [
                "Personalized Gift Items",
                "Frames & Wall Art",
                "Key Holders & Cloth Tags"
            ],
        },
    ]
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000028] mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        We offer comprehensive creative solutions to help your business
                        establish a strong visual identity and presence.
                    </p>
                    <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Service 1 */}
                    {
                        servicesDetails.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={service.src}
                                        alt={service.alt}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="w-12 h-12 bg-[#000028] rounded-full flex items-center justify-center mb-4">
                                        <i className='text-gold'>{service.icon}</i>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#000028] mb-3">
                                        {service.title}
                                    </h3>
                                    <ul className="text-gray-700 space-y-2 mb-4">
                                        {
                                            service.description.map((desc, index) => (
                                                <li key={index} className="flex items-center text-sm">
                                                    <CheckIcon className="text-gold mr-2" />
                                                    <span key={index} className='text-sm'>{desc}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    {/* <Link
                                        to=""
                                        className="text-[#000028] font-semibold flex items-center cursor-pointer whitespace-nowrap rounded-md transition-colors duration-200 group"
                                    >
                                        Learn More
                                        <span
                                            className="text-gold ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2" // Use translateX
                                            style={{ display: 'inline-flex' }}
                                        >
                                            <EastIcon />
                                        </span>
                                    </Link> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
