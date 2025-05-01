import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

const PageLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageTransition}
          className="min-h-screen bg-gradient-to-br from-cyan-50 to-white"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout; 