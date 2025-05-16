import React from 'react';
import { motion } from 'framer-motion';

import { Button } from '../button';
import { Container } from '../container';

export const JumbotronSection = () => {
    const imgStyle = 'mb-6 h-[150px] w-[319.25px] rounded-3xl object-cover md:h-[300px]'

    return (
        <section className='w-full h-[916.31px] flex items-center justify-center md:h-screen relative'>
            <div className="h-full relative">
                <img
                    className='rounded-4xl p-3 w-screen h-full object-cover'
                    src="/hero.jpg"
                    alt=""
                />
                <div className="absolute inset-0 bg-black/55 rounded-3xl m-3 "></div>
            </div>
        </section>
    );
};

