import React from 'react';
import { motion } from 'framer-motion';

import { Button } from '../button';
import { Container } from '../container';

export const JumbotronSection = () => {
    let spanArray = [];
    for (let i = 1; i < 4; i++) {
        spanArray.push(i)
    }
    return (
        // <section className='relative w-full h-[916.31px] flex md:h-screen'>
        //     <div className="h-full relative">
        //         {/* Hero image */}
        //         <img
        //             className=' w-screen h-full object-cover'
        //             src="/products_assets/jotter.jpg"
        //             alt=""
        //         />
        //         <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>
        //     </div>
        //     {/* Title */}
        //     <section className="absolute p-10 top-[20%]">
        //         <h1 className="text-[28px] text-white z-3 leading-[1.3] md:text-[36px] lg:text-[50px]">
        //             Empowering Your Brand <br className='hidden md:block' /> with
        //             <span className='ml-3 text-veryLightBlue bg-darkBlue rounded-lg px-2'>Creative Excellence</span>
        //         </h1>
        //     </section>
        // </section>
        <section className='bg-veryLightBlue'>
            <div className='h-screen'>
                <Container className="pt-[10%] flex flex-col items-center">
                    {/* Top span */}
                    <div className='bg-darkBlue w-fit text-veryLightBlue rounded-2xl py-1 px-3 flex items-center gap-2'>
                        <div className='flex'>
                            {
                                spanArray.map((_, i) => (
                                    <span className='w-5 h-5 bg-veryLightBlue block rounded-full border-2 border-solid border-darkBlue'></span>
                                ))
                            }
                        </div>
                        <p>
                            Built 100+ Personal Brands
                        </p>
                    </div>
                </Container>
            </div>
        </section>
    );
};

