import React from 'react'
import { Container } from '../container'
import { Button } from '../button'

export const GetStarted = () => {
    return (
        <section className='bg-darkBlue'>
            <Container className="text-center py-20">
                <div className='border-[1.5px] border-[#aea9c5] text-veryLightBlue rounded-2xl py-10 px-5 flex flex-col items-center justify-center gap-10'>
                    <h1 className='text-3xl md:text-5xl'>Let's Bring Your Vision to Life</h1>
                    <p className=''>
                        Contact us today for a personalized <br className='md:hidden' />
                        consultation or quote tailored to your <br className='md:hidden' />
                        unique needs.
                    </p>
                    <div className='flex gap-3 justify-center'>
                        <Button
                            size="md"
                            variant="darkPrimary"
                            className="border-lightBlue border-[2.5px] border-b-[5px]"
                        >
                            Get started
                        </Button>
                        <Button
                            size="md"
                            variant="secondary"
                        >
                            Contact us
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
