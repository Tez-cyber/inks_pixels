import { Link } from "react-router-dom";
import { Button } from "../button";
import { useState } from "react";
import { MobileNavbar } from "./mobileNavbar";
import { navLinks } from "../../utils";

export const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const handleMenuClick = () => {
        setOpenNav(!openNav)
    }
    return (
        <nav
            className={`bg-darkBlue px-20 sticky flex items-center
                h-[70px] justify-between items- text-white 
            `}
        >
            {/* Nav links */}
            <section className="hidden md:block">
                <ul className="flex gap-10">
                    {
                        navLinks.map((link, i) => (
                            <li className="transition-all duration-150 font-semibold hover:text-gold hover:-translate-y-1" key={i}>
                                <Link to={link.link} className="">{link.name}</Link>                            </li>
                        ))
                    }
                </ul>
            </section>
            {/* ==== LOGO ==== */}
            <section>
                <h3 className="flex flex-col uppercase text-xl">
                    <span>inks &</span>
                    <span className="text-gold">{" "}pixels</span>
                </h3>
            </section>
            {/* ==== CONTACT ==== */}
            <section className="hidden md:block">
                <Button
                    size="sm"
                    variant="primary"
                >
                    Contact
                </Button>
            </section>

            {/* ==== MOBILE NAVBAR ==== */}
            <section className="md:hidden">
                <Button
                    size="sm"
                    variant="primary"
                    className={`z-10`}
                    onNavClick={handleMenuClick}
                >
                    {
                        openNav ? "close" : "menu"
                    }
                </Button>
                {
                    openNav && <MobileNavbar
                        onCloseNav={handleMenuClick}
                    />
                }
            </section>
        </nav>

    )
}
