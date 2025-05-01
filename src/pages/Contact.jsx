import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin, FaEnvelope, FaPhone, FaTwitter } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/animations';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields', {
        style: {
          background: '#fee2e2',
          color: '#991b1b',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
        progressStyle: {
          background: '#dc2626'
        }
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address', {
        style: {
          background: '#fee2e2',
          color: '#991b1b',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
        progressStyle: {
          background: '#dc2626'
        }
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success('Thank you for your message! We will get back to you shortly.', {
      style: {
        background: '#ecfeff',
        color: '#155e75',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      progressStyle: {
        background: '#0891b2'
      }
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100 py-12 px-4 pt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4">Contact Us</h1>
            <p className="text-xl text-cyan-700 max-w-2xl mx-auto">
              Get in touch with us for any questions or inquiries about our healthcare services.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Information */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-cyan-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-900">Email</h3>
                    <a href="mailto:hello@gogetwell.ai" className="text-cyan-700 hover:text-cyan-600 transition-colors">
                      hello@gogetwell.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <FaPhone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-900">Phone</h3>
                    <a href="tel:+919811396858" className="text-cyan-700 hover:text-cyan-600 transition-colors">
                      +91-9811396858
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <FaLinkedin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-900">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/company/gogetwellai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 hover:text-cyan-600 transition-colors"
                    >
                      Connect with us on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <FaTwitter className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-900">Twitter</h3>
                    <a
                      href="https://x.com/gogetwellai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 hover:text-cyan-600 transition-colors"
                    >
                      Follow us on Twitter
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-cyan-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cyan-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyan-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cyan-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                toastClassName="rounded-lg shadow-lg"
                bodyClassName="text-sm font-medium"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Contact; 