import { Container } from "../container";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DrawIcon from '@mui/icons-material/Draw';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from "../button";
import { Link } from "react-router-dom";


export const InnovateSection = () => {
    const gridDetails = [
        {
            icon: <DesignServicesIcon
                fontSize="large"
            />,
            title: 'Comprehensive Branding & Design Solutions',
            text: 'From logo design to social media graphics, we cover it all.'
        },
        {
            icon: <LocalMallIcon
                fontSize="large"
            />,
            title: 'Tailored Packaging Solutions for Every Product',
            text: 'From logo design to social media graphics, we cover it all.'
        },
        {
            icon: <DrawIcon
                fontSize="large"
            />,
            title: 'High-Quality Printing Services for Your Needs',
            text: 'From logo design to social media graphics, we cover it all.'
        },
    ]
    return (
        <section className="bg-darkBlue text-white">
            <Container className="py-20 flex flex-col gap-4 items-center justify-center">
                {/* HEADING SECTION */}
                <section className="flex flex-col gap-4 md:text-center">
                    <span className="text-gold capitalize font-bold">innovate</span>
                    <h1 className="text-[26px] leading-tight font-semibold md:text-[36px] md:w-[768px] lg:text-[48px]">
                        Transforming Ideas into Visual Masterpieces
                    </h1>
                    <p className="md:w-[768px]">
                        At Ink and Pixels, we specialize in crafting unique branding and design solutions that resonate with <br className="hidden md:block" />
                        your audience. Our comprehensive services ensure your vision is brought to life with creativity and <br className="hidden md:block" />
                        precision.
                    </p>
                </section>
                {/* GRID SECTION */}
                <section className="mt-10 grid grid-cols-1 gap-8 items-center md:grid-cols-2 lg:grid-cols-3">
                    {
                        gridDetails.map((detail, index) => (
                            <div key={index} className="relative h-[350px] w-[300px] bg-lightBlue rounded-2xl p-3 md:w-[350px]">
                                <div className="absolute right-4 top-3 font-bold text-xl">
                                    0{index + 1}
                                </div>
                                <div className="flex flex-col gap-3 p-4 h-full absolute mt-28">
                                    <div className="">
                                        <i>{detail.icon}</i>
                                    </div>
                                    <h2 className="text-2xl">
                                        {detail.title}
                                    </h2>
                                    <p className="text-gray-400">{detail.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
                {/* BUTTON SECTION */}
                <div className='flex items-center gap-5 mt-4'>
                    <Button
                        size="md"
                        variant="darkPrimary"
                        className="w-fit z-8"
                        href="/getstarted"
                    >
                        Get started
                    </Button>
                    {/* <Link to="/about" className="font-semibold text-slate-400 text-lg">
                        <span>
                            Learn more
                        </span>
                        <KeyboardArrowRightIcon />
                    </Link> */}
                    {/* <button className="font-semibold text-slate-300 cursor-pointer text-lg hover:text-white">
                        Learn more <KeyboardArrowRightIcon />
                    </button> */}
                </div>
            </Container>
        </section>
    )
}
