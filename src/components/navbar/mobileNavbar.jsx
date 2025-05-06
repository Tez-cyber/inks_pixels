import React from 'react';
import { navLinks } from '../../utils';
import { Button } from '../button';
import { motion } from 'framer-motion'; // Import motion
import { Link } from 'react-router-dom'; // Import Link for React Router

const mobileNavbarVariants = {
  open: { x: 0, transition: { type: 'tween', duration: 0.3 } },
  closed: { x: '100vw', transition: { type: 'tween', duration: 0.3 } },
};

const listItemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 },
};

export const MobileNavbar = ({ onCloseNav }) => {
  return (
    <motion.nav
      className='h-screen w-screen fixed top-0 bg-lightBlue z-[-10] inset-0 overflow-hidden'
      variants={mobileNavbarVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <motion.section className="w-full h-full absolute inset-0 flex flex-col justify-center">
        <motion.ul className="mx-16 leading-loose md:mt-4 md:leading-snug">
          {navLinks.map((nav, i) => (
            <motion.li
              key={i}
              className="overflow-hidden"
              variants={listItemVariants}
              initial="initial"
              animate="animate"
            >
              <Link
                to={nav.link}
                onClick={onCloseNav}
                className="text-white text-[40px] block uppercase transition duration-150 ease-in hover:text-brightGreen hover:-translate-y-1 md:text-[75px]"
              >
                {nav.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <Button
          size="sm"
          variant="primary"
          className="w-fit mx-16 mt-5"
          href="/getstarted"
          onClick={onCloseNav} 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Contact
        </Button>
      </motion.section>
    </motion.nav>
  );
};