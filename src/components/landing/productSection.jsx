import React, { useRef, useState, useEffect } from 'react';
import { products } from "../utils/products";

export const ProductSection = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const itemWidth = 300 + 16; // product width + gap
    const scrollAmount = itemWidth;

    const scrollToLeft = () => {
        containerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    const scrollToRight = () => {
        containerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    // Track scroll to update active dot
    const handleScroll = () => {
        if (containerRef.current) {
            const scrollLeft = containerRef.current.scrollLeft;
            const index = Math.round(scrollLeft / itemWidth);
            setActiveIndex(index);
        }
    };

    // Touch event handlers for mobile scrolling
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX;
        const walk = (x - startX) * 2; // Adjust multiplier for faster/slower swipe
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="bg-lightBlue py-20">
            <div className="container mx-auto px-4 md:px-10">
                <div className="pb-10">
                    <h2 className="text-3xl font-semibold text-white">Popular Products</h2>
                </div>

                {/* Product Carousel */}
                <div className="relative">
                    <div
                        ref={containerRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth touch-none" 
                        style={{
                            scrollSnapType: 'x mandatory',
                            scrollbarWidth: 'none', 
                            msOverflowStyle: 'none', 
                        }}

                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex-none w-[80%] sm:w-[60%] md:w-[300px] lg:w-[300px] shrink-0 scrollSnap-align-start"
                                style={{ scrollSnapAlign: 'start' }}
                            >
                                <div className="overflow-hidden rounded-2xl">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="h-[300px] w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-white font-semibold">{product.title}</h2>
                                    <p className="text-sm text-gray-100">&#8358; {product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows (Hidden on small screens) */}
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            onClick={scrollToLeft}
                            className="absolute right-14 cursor-pointer bottom-3 bg-gray-200 text-gray-700 size-[40px] rounded-full p-2 transition-all duration-500 ease-in-out hover:bg-darkBlue hover:text-white md:right-20"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={scrollToRight}
                            className="absolute right-2 md:right-6 cursor-pointer bottom-3 bg-gray-200 text-gray-700 size-[40px] rounded-full p-2 transition-all duration-500 ease-in-out hover:bg-darkBlue hover:text-white"
                        >
                            &gt;
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {products.slice(0, 5).map((_, index) => (
                            <span
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white' : 'bg-gray-500'
                                    }`}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};