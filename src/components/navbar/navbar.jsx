import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

import { navLinks } from "../../utils";
import { MobileNavbar } from "./mobileNavbar";
import { Container } from "../container";
import { Logo } from "../logo";
import { Button } from "../button";

export const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const [hideNav, setHideNav] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true);

    const handleMenuClick = () => {
        setOpenNav(!openNav)
    }


    const { scrollY } = useScroll();
    const lastYRef = useRef(0);
    useMotionValueEvent(scrollY, 'change', (y) => {
        const difference = y - lastYRef.current;
         setIsAtTop(y <= 10);
        if (Math.abs(difference) > 50) {
            setHideNav(difference > 0);
            lastYRef.current = y;
        }
    })

    // NAVBAR SLIDE IN
    const navSlideIn = {
        start: {
            y: "-100%",
            opacity: 0
        },
        anim: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: "100%"
        },
        hidden: {
            y: "-100%",
        },
    }
    return (
        <motion.nav
            variants={navSlideIn}
            initial="start"
            animate={hideNav ? "hidden" : "anim"}
            exit="exit"
            transition={{
                duration: .75
            }}
            className={`${isAtTop ? "bg-transparent" : "bg-darkBlue text-white"} fixed w-full top-0
                h-[60px] text-darkblue z-10 
            `}
        >
            <Container className="flex items-center justify-between py-2">
                {/* ==== LOGO ==== */}
                <Logo isAtTop={isAtTop} />
                {/* Nav links */}
                <section className="hidden md:block">
                    <ul className="flex gap-10">
                        {
                            navLinks.map((link, i) => (
                                <li className="transition-all duration-150 uppercase rounded-lg hover:-translate-y-1" key={i}>
                                    <Link to={link.link} className="">{link.name}</Link>                            </li>
                            ))
                        }
                    </ul>
                </section>
                {/* ==== CONTACT ==== */}
                <section className="hidden md:block">
                    <Button
                        size="sm"
                        variant="darkPrimary"
                        href="/getstarted"
                    >
                        Get Started
                    </Button>
                </section>

                {/* ==== MOBILE NAVBAR ==== */}
                <section className="md:hidden">
                    <Button
                        size="sm"
                        variant="primary"
                        className={`z-10`}
                        onClick={handleMenuClick}
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
            </Container>
        </motion.nav>

    )
}
