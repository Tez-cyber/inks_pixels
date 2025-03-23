import React from 'react'
import { navLinks } from '../../utils'

export const MobileNavbar = ({ onCloseNav }) => {
  return (
    <nav className='h-screen w-screen fixed top-0 bg-lightBlue z-[-10] inset-0 overflow-hidden'>
      <section className="w-full h-full absolute inset-0 flex items-center justify-center">
        <ul className="mx-16 leading-loose md:mt-4 md:leading-snug">
          {
            navLinks.map((nav, i) => (
              <li key={i} className="overflow-hidden">
                <div

                >
                  <a href={nav.link}
                    onClick={onCloseNav}
                    className="text-white text-[40px] block uppercase transition
                      duration-150 ease-in hover:text-brightGreen hover:-translate-y-1 
                      md:text-[75px]"
                  >
                    {nav.name}
                  </a>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </nav>
  )
}

