import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-cyan-100 last:border-b-0">
      <motion.button
        className="w-full py-6 px-8 flex justify-between items-center text-left hover:bg-cyan-50/50 transition-colors"
        onClick={onClick}
        initial={false}
      >
        <h3 className="font-semibold text-lg text-cyan-700 pr-8">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon className="h-6 w-6 text-cyan-500" />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-8 pb-6 text-cyan-900">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem; 