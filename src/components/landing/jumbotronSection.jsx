import React from 'react';
import { motion } from 'framer-motion';

import { Button } from '../button';
import { Container } from '../container';

export const JumbotronSection = () => {
    const imgStyle = 'mb-6 h-[150px] w-[319.25px] rounded-3xl object-cover md:h-[300px]'

    return (
        <section className='relative w-full h-[916.31px] flex md:h-screen'>
            <div className="h-full relative">
                {/* Hero image */}
                <img
                    className=' w-screen h-full object-cover'
                    src="/products_assets/jotter.jpg"
                    alt=""
                />
                <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>
            </div>
            {/* Title */}
            <section className="absolute p-10 top-[20%]">
                <h1 className="text-[28px] text-white z-3 leading-[1.3] md:text-[36px] lg:text-[50px]">
                    Empowering Your Brand <br className='hidden md:block' /> with
                    <span className='ml-3 text-veryLightBlue bg-darkBlue rounded-lg px-2'>Creative Excellence</span>
                </h1>
            </section>
        </section>
    );
};

