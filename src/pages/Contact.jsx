import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-16 px-4">
        <motion.div 
          className="max-w-2xl mx-auto w-full bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-cyan-700 mb-4 text-center"
            {...fadeIn}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-cyan-900 text-lg mb-8 text-center"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Have questions or need support? Our team is here to help you 24/7. Reach out and we'll get back to you as soon as possible.
          </motion.p>
          <div className="mb-8 flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-cyan-700 mb-2">Contact Details</h2>
              <ul className="text-cyan-900 space-y-2">
                <li><span className="font-bold">Email:</span> <a href="mailto:support@gogetwell.ai" className="text-cyan-600 hover:underline">support@gogetwell.ai</a></li>
                <li><span className="font-bold">Phone:</span> <a href="tel:+1234567890" className="text-cyan-600 hover:underline">+1 (234) 567-890</a></li>
                <li><span className="font-bold">Location:</span> Global (Remote Support)</li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="https://twitter.com/gogetwellai" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-700 text-2xl"><i className="fab fa-twitter"></i>Twitter</a>
                <a href="https://linkedin.com/company/gogetwellai" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-700 text-2xl"><i className="fab fa-linkedin"></i>LinkedIn</a>
              </div>
            </motion.div>
            <motion.form 
              className="flex-1 bg-cyan-50 rounded-xl p-6 shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              autoComplete="off"
            >
              <h2 className="text-lg font-semibold text-cyan-700 mb-4">Send us a message</h2>
              <div className="mb-4">
                <label className="block text-cyan-700 mb-1" htmlFor="name">Name</label>
                <input className="w-full px-4 py-2 rounded border border-cyan-200 focus:ring-2 focus:ring-cyan-400 transition" type="text" id="name" name="name" required />
              </div>
              <div className="mb-4">
                <label className="block text-cyan-700 mb-1" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 rounded border border-cyan-200 focus:ring-2 focus:ring-cyan-400 transition" type="email" id="email" name="email" required />
              </div>
              <div className="mb-4">
                <label className="block text-cyan-700 mb-1" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-2 rounded border border-cyan-200 focus:ring-2 focus:ring-cyan-400 transition" id="message" name="message" rows="4" required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-cyan-700 text-white font-bold py-2 rounded-full shadow hover:bg-cyan-500 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-cyan-700 font-semibold">We're committed to supporting healthcare facilitators worldwide. Let's connect!</span>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
}

export default Contact; 