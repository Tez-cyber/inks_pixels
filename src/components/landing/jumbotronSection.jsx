import React from 'react';
import { motion } from 'framer-motion';

// Import your images
import heroImage from '../../assets/img-1.jpg'; // Replace with your hero image
import gridImage1 from '../../assets/img-1.jpg'; // Replace with your grid image 1
import gridImage2 from '../../assets/img-1.jpg'; // Replace with your grid image 2
import gridImage3 from '../../assets/img-1.jpg'; // Replace with your grid image 3
import gridImage4 from '../../assets/img-1.jpg'; // Replace with your grid image 4
import gridImage5 from '../../assets/img-1.jpg'; // Replace with your grid image 5
import gridImage6 from '../../assets/img-1.jpg'; // Replace with your grid image 6
import { Button } from '../button';

export const JumbotronSection = () => {

    return (
        <section className='bg-darkBlue w-full h-screen flex items-center'>
            <div className="px-20 flex">
                {/* ====== Description section ====== */}
                <div className='w-[656px] text-white flex flex-col gap-6'>
                    <h1 className="text-[56px] leading-tight">
                        Empowering Your Brand with
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
                <div>
                    Image section
                </div>
            </div>
        </section>
    );
};

