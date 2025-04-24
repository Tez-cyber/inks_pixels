import { useState, useEffect } from 'react';

export const TestimonialSlider = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Optional: Auto-play functionality
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 100000);
        return () => clearInterval(intervalId);
    }, [testimonials.length]);

    return (
        <div className="h-full flex items-center w-[40%] bg-veryLightBlue py-5 relative overflow-hidden">
            <div
                className="flex transition-transform gap-3 duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {testimonials.map((data, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-between gap-5 mb-4 px-2  w-full shrink-0"
                    >
                        <div className="">
                            <img
                                src={data.image}
                                alt={data.name}
                                className="w-12 h-12 rounded-full"
                            />
                            <p className="text-lg w-[90%] pt-5">{data.testimonial}</p>
                        </div>
                        <div className='leading-tight'>
                            <h2 className="text-lightBlue ">{data.name}</h2>
                            <p className=" text-orange-800">{data.position}</p>
                        </div>
                    </div>
                ))}
            </div>
            {testimonials.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute right-14 cursor-pointer bottom-3 bg-gray-200 text-gray-700 size-[40px] rounded-full p-2 hover:bg-darkBlue hover:text-white"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 cursor-pointer bottom-3 bg-gray-200 text-gray-700 size-[40px] rounded-full p-2 hover:bg-darkBlue hover:text-white"
                    >
                        &gt;
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-darkBlue' : 'bg-gray-300'
                                    } cursor-pointer`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
