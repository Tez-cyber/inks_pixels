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
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[300px] rounded-l-3xl flex items-center bg-veryLightBlue py-5 relative overflow-hidden w-full md:w-[70%] lg:w-[50%] xl:w-[40%]">
      <div
        className="flex transition-transform gap-3 duration-1000 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((data, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-5 mb-4 px-4 sm:px-6 md:px-8 w-full shrink-0"
          >
            <div className="flex flex-col items-start gap-4">
              <p className="text-lg w-[90%]">{data.testimonial}</p>
            </div>
            <div className='flex flex-row-reverse items-center justify-between w-[90%]'>
              <img
                src={data.image}
                alt={data.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="leading-tight">
                <h2 className="text-lightBlue font-semibold">{data.name}</h2>
                <p className="text-orange-800 text-sm">{data.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {testimonials.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute right-14 cursor-pointer bottom-3 bg-gray-200 text-gray-700 size-[40px] rounded-full p-2 transition-all duration-500 ease-in-out hover:bg-darkBlue hover:text-white md:right-20"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 cursor-pointer bottom-3 bg-gray-200 text-gray-700 size-[40px] rounded-full p-2 transition-all duration-500 ease-in-out hover:bg-darkBlue hover:text-white"
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

export default TestimonialSlider;