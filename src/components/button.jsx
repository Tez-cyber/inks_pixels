import { Link } from "react-router-dom";


export const Button = ({ children, size, className, href, variant, onClick }) => {
    const sizeClass = {
        sm: "px-4 py-[7px]",
        md: "px-6 py-[13px]"
    };

    const colorVariants = {
        primary: "bg-white text-darkBlue border-[#b1b0b5] border-[2.5px] border-b-[5px] transition-all duration-150 hover:bg-white hover:text-darkBlue hover:border-lightBlue active:border-0",
        darkPrimary: "bg-darkBlue text-white border-[#b1b0b5] border-2 border-b-[5px] transition-all duration-150 hover:bg-white hover:text-darkBlue hover:border-lightBlue active:border-0",
        secondary: "bg-transparent border-[#b1b0b5] border-2 border-b-[5px] transition-all duration-150 hover:bg-darkBlue hover:text-white hover:border-lightBlue active:border-0"
    };

    return (
        <Link 
            to={href} 
            className={`
                rounded-xl font-semibold block cursor-pointer
                ${sizeClass[size]}
                ${colorVariants[variant]}
                ${className}
            `}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};
