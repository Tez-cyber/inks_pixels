import { Link } from "react-router-dom";


export const Button = ({ children, size, className, href, variant }) => {
    const sizeClass = {
        sm: "px-4 py-[14px]",
        md: "px-6 py-[23px]"
    };

    const colorVariants = {
        primary: "bg-white text-darkBlue border-[#b1b0b5] border-2 border-b-[5px]",
        darkPrimary: "bg-darkBlue text-white",
        secondary: "bg-transparent border-[#b1b0b5] border-2 border-b-[5px]"
    };

    return (
        <Link 
            to={href} 
            className={`
                ${sizeClass[size]},
                ${colorVariants[variant]},
                ${className}
            `}
        >
            {children}
        </Link>
    );
};
