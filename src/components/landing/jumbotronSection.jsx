import React from 'react';
import { motion } from 'framer-motion';

// Import your images
import gridImage1 from '../../assets/img-1.jpg';
import gridImage2 from '../../assets/img-2.jpg';
import gridImage3 from '../../assets/img-3.webp';
import gridImage4 from '../../assets/img-4.jpg';
import gridImage5 from '../../assets/img-5.jpg';
import gridImage6 from '../../assets/img-7.jpg';
import { Button } from '../button';
import { Container } from '../container';

export const JumbotronSection = () => {
    const imgStyle = 'mb-6 h-[300px] w-[319.25px] rounded-3xl object-cover'

    return (
        <section className='bg-darkBlue w-full h-full flex items-center overflow-hidden md:h-screen'>
            <Container className="flex flex-col items-center w-full md:flex-row">
                {/* ====== Description section ====== */}
                <div className=' text-white flex flex-col gap-6 md:w-[50%]'>
                    <h1 className="text-[54px] leading-tight md:text-[54px  ]">
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
                <div className='flex justify-center md:w-[50%]'>
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
            </Container>
        </section>
    );
};

