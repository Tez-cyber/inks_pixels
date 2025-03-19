import { Link } from "react-router-dom";

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
                            <li className="" key={i}>
                                <Link to={link.link}>{link.name}</Link>
                                {/* <a href={link.link}>{link.name}</a> */}
                            </li>
                        ))
                    }
                </ul>
            </section>
            {/* ==== LOGO ==== */}
            <section>
                <h3>
                    <span>inks &</span>
                    <span>{" "}pixels</span>
                </h3>
            </section>
            {/* ==== CONTACT ==== */}
            <section>
                <button>Contact</button>
            </section>
        </nav>

    )
}
