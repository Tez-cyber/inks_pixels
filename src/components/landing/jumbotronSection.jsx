import React from 'react';
import { motion } from 'framer-motion';

// Import your images
import gridImage1 from '../../assets/img-1.jpg'; // Replace with your grid image 1
import gridImage2 from '../../assets/img-2.jpg'; // Replace with your grid image 2
import gridImage3 from '../../assets/img-3.webp'; // Replace with your grid image 3
import gridImage4 from '../../assets/img-4.jpg'; // Replace with your grid image 4
import gridImage5 from '../../assets/img-5.jpg'; // Replace with your grid image 5
import gridImage6 from '../../assets/img-7.jpg'; // Replace with your grid image 6
import { Button } from '../button';

export const JumbotronSection = () => {
    const imgStyle = 'mb-6 h-[300px] w-[319.25px] rounded-3xl object-cover'

    return (
        <section className='bg-darkBlue w-full h-screen flex items-center overflow-hidden'>
            <div className="px-20 flex items-center w-full">
                {/* ====== Description section ====== */}
                <div className=' text-white flex flex-col gap-6 w-[50%]'>
                    <h1 className="text-[54px] leading-tight">
                        Empowering Your <br />
                        Brand with
                        <span className='ml-3 text-gold'>Creative Excellence</span>
                    </h1>
                    <p className='text-[18px] w-[85%]'>
                        At Ink and Pixels Nigeria, we transform your vision into reality through
                        innovative design and branding solutions. Let us help you stand out in a
                        crowded marketplace.
                    </p>
                    <div className='flex gap-3'>
                        <Button
                            size="md"
                            variant="primary"
                        >
                            Get started
                        </Button>
                        <Button
                            size="md"
                            variant="secondary"
                        >
                            Learn more
                        </Button>
                    </div>
                </div>
                {/* ===== Image Section */}
                <div className='w-[50%] flex justify-center'>
                    <div className='grid grid-cols-2 gap-6'>
                        {/* ==== First grid ==== */}
                        <div>
                            <div className=''>
                                <img className={`${imgStyle}`} src={gridImage1} alt="gridImage1" />
                            </div>
                            <div className=''>
                                <img className={`${imgStyle}`} src={gridImage3} alt="gridImage1" />
                            </div>
                            <div className=''>
                                <img className={`${imgStyle}`} src={gridImage4} alt="gridImage1" />
                            </div>
                        </div>
                        {/* ==== Second grid ==== */}
                        <div className='mt-36'>
                            <div className=''>
                                <img className={`${imgStyle}`} src={gridImage5} alt="gridImage1" />
                            </div>
                            <div className=''>
                                <img className={`${imgStyle}`} src={gridImage4} alt="gridImage1" />
                            </div>
                            <div className=''>
                                <img className={`${imgStyle}`} src={gridImage6} alt="gridImage1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

