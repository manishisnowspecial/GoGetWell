import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

const PageLayout = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="min-h-screen bg-gradient-to-br from-cyan-50 to-white"
    >
      {children}
    </motion.div>
  );
};

export default PageLayout; 