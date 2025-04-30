import { Link } from "react-router-dom"
import { footerLinks, socials } from "../utils"
import { Container } from "./container"
import { Logo } from "./logo"
import { Button } from "./button"


export const Footer = () => {
    return (
        <footer className="bg-darkBlue">
            <Container className="py-10 justify-between grid grid-cols-2 gap-3 lg:flex lg:flex-row">
                {/* LOGO */}
                <Logo />
                {/* Footer links */}
                <div>
                    <p className="text-white">Connect with Us</p>
                    <ul>
                        {
                            footerLinks.map((link, i) => (
                                <li key={i} className="text-gray-500 pt-2 text-sm">
                                    <Link to={link.link} className="transition-colors duration-150 ease-in hover:text-white">
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Socials  */}
                <div className="mt-5 md:mt-0">
                    <p className="text-white">Follow us</p>
                    <ul>
                        {
                            socials.map((link, i) => (
                                <li key={i} className="text-gray-500 pt-2 text-sm">
                                    <Link to={link.link} target="_blank" className="transition-colors duration-150 ease-in hover:text-white">
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* === */}
                <div className="mt-5 md:mt-0">
                    <p className="text-white font-semibold">Subscribe</p>
                    <p className="text-white pt-5 text-sm">
                        Join our newsletter to stay updated on features and <br className="hidden md:block" />
                        releases.
                    </p>
                    <div className="flex flex-col gap-5 mt-5 md:items-center md:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 text-white p-2 rounded-md"
                        />
                        <Button
                            size="sm"
                            variant="secondary"
                            className="transition-all duration-150 text-white hover:bg-lightBlue 
                            hover:text-white hover:border-white active:border-0"
                        >
                            subscribe
                        </Button>
                    </div>
                </div>
            </Container>
            <span className="bg-lightBlue w-full h-[1px] block mt-3"></span>
            <p className="text-center text-customGray py-7">
                &copy; {new Date().getFullYear()} and Pixels Nigeria Limited. All rights reserved.
            </p>
        </footer>
    )
}
