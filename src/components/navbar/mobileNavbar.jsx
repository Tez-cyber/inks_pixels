import React from 'react'
import { navLinks } from '../../utils'
import { Button } from '../button'

export const MobileNavbar = () => {
  return (
    <nav className='h-screen w-screen fixed top-0 bg-lightBlue z-[-10] inset-0 overflow-hidden'>
      <section className="w-full h-full absolute inset-0 flex flex-col justify-center">
        <ul className="mx-16 leading-loose md:mt-4 md:leading-snug">
          {
            navLinks.map((nav, i) => (
              <li key={i} className="overflow-hidden">
                  <a href={nav.link}
                    className="text-white text-[40px] block uppercase transition
                      duration-150 ease-in hover:text-brightGreen hover:-translate-y-1 
                      md:text-[75px]"
                  >
                    {nav.name}
                  </a>
              </li>
            ))
          }
        </ul>
        <Button
          size="sm"
          variant="primary"
          className="w-fit mx-16 mt-5"
          href="/getstarted"
        >
          Contact
        </Button>
      </section>
    </nav>
  )
}

