import { Link } from "react-router-dom";
import { Button } from "../button";

export const Navbar = () => {
    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" }
    ]
    return (
        <nav
            className={`bg-darkBlue px-20 sticky flex items-center
                h-[70px] justify-between items- text-white 
            `}
        >
            {/* Nav links */}
            <section className="">
                <ul className="flex gap-10">
                    {
                        navLinks.map((link, i) => (
                            <li className="transition-all duration-150 hover:text-gold hover:-translate-y-1" key={i}>
                                <Link to={link.link} className="">{link.name}</Link>
                                {/* <a href={link.link}>{link.name}</a> */}
                            </li>
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
            <section>
                <Button
                    size="sm"
                    variant="primary"
                >
                    Contact
                </Button>
            </section>
        </nav>

    )
}
