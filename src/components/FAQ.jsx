import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const faqItemVariants = {
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.04, 0.62, 0.23, 0.98], // Smoother easing
    }
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.04, 0.62, 0.23, 0.98], // Consistent easing for both directions
    }
  }
};

export const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border border-[#9e9b9b] rounded-xl my-3 p-2 w-full overflow-hidden"> {/* Added overflow-hidden */}
      <button
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="font-medium">{question}</span>
        <motion.div
          className="ml-4"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >   
          {isOpen ? (
            <KeyboardArrowUpIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <KeyboardArrowDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden px-2 py-1 text-gray-600 dark:text-gray-300" // Added overflow-hidden
            variants={faqItemVariants}
            initial="closed"
            animate="open"
            exit="closed"
            id={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};``