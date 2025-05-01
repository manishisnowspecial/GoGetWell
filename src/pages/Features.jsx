import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import PageLayout from '../components/PageLayout';
import ScrollToTopLink from '../components/ScrollToTopLink';
import { scrollToTop } from '../utils/scrollUtils';

const features = [
  {
    title: 'Custom AI-Powered Website',
    desc: 'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
    benefits: ['24/7 Patient Interaction', 'Smart Appointment Scheduling', 'Automated Follow-ups'],
    detailedDescription: 'Our AI-powered website solution creates a personalized digital presence for your healthcare practice.',
    image: 'https://img.freepik.com/free-vector/medical-technology-science-background-vector-health-care-design-blue_53876-140667.jpg'
  },
  {
    title: 'Enhanced Patient Conversion',
    desc: 'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
    benefits: ['Personalized Patient Journey', 'Smart Lead Scoring', 'Conversion Analytics'],
    detailedDescription: 'Transform visitors into patients with our advanced conversion optimization system.',
    image: 'https://img.freepik.com/free-vector/telemedicine-abstract-concept-vector-illustration-medical-consultation-online-remote-health-monitoring-patient-portal-appointment-booking-digital-healthcare-service-abstract-metaphor_335657-2281.jpg'
  },
  {
    title: 'Real-Time Query Handling',
    desc: 'Instant response system for patient inquiries with AI-powered chat support.',
    benefits: ['Instant Responses', 'Multi-language Support', 'Context-Aware AI'],
    detailedDescription: 'Never miss a patient query with our real-time response system.',
    image: 'https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg'
  },
  {
    title: 'Medical Report Analysis',
    desc: 'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
    benefits: ['Automated Analysis', 'Quick Turnaround', 'Accurate Insights'],
    detailedDescription: 'Leverage AI to analyze medical reports quickly and accurately.',
    image: 'https://img.freepik.com/free-vector/medical-healthcare-diagnostics-abstract-concept-vector-illustration-diagnostic-testing-center-healthcare-system-medical-diagnostic-equipment-disease-prevention-symptoms-checker-abstract-metaphor_335657-1602.jpg'
  },
  {
    title: 'Secure Data Management',
    desc: 'Enterprise-grade security for all your patient data and communications.',
    benefits: ['HIPAA Compliant', 'End-to-End Encryption', 'Regular Security Audits'],
    detailedDescription: 'Keep patient data secure with our enterprise-grade security system.',
    image: 'https://img.freepik.com/free-vector/data-security-concept-illustration_114360-5421.jpg'
  },
  {
    title: 'Global Healthcare Network',
    desc: 'Connect with healthcare providers and patients worldwide.',
    benefits: ['International Reach', 'Cross-border Care', 'Global Standards'],
    detailedDescription: 'Expand your reach globally with our healthcare network.',
    image: 'https://img.freepik.com/free-vector/global-medical-technology-network-connection-background_53876-119507.jpg'
  }
];

function Features() {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleGoBack = () => {
    scrollToTop();
    navigate(-1);
  };

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const handleCloseModal = () => {
    setSelectedFeature(null);
  };

  return (
    <PageLayout>
      <div className="relative">
        {/* Back Button */}
        <motion.button
          onClick={handleGoBack}
          className="fixed top-20 left-4 md:left-8 z-40 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeftIcon className="h-6 w-6 text-cyan-600 group-hover:text-cyan-700" />
          <span className="sr-only">Go Back</span>
        </motion.button>

        <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-6">
                Powerful Features for Healthcare Providers
              </h1>
              <p className="text-xl text-cyan-700 max-w-3xl mx-auto">
                Transform your healthcare practice with our AI-powered solutions designed to enhance patient care and streamline operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleFeatureClick(feature)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-cyan-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-cyan-600 mb-4">
                      {feature.desc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-cyan-700 text-sm">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-500 transition-colors group/link">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <ScrollToTopLink to="/demo">
                <motion.button
                  className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Your Patient Ready Website Now
                </motion.button>
              </ScrollToTopLink>
              <p className="mt-4 text-cyan-600">
                Use power AI to transform your online presence and automate patient interactions
              </p>
            </div>
          </div>
        </div>

        {/* Feature Detail Modal */}
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6 text-gray-500" />
                </button>

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={selectedFeature.image}
                    alt={selectedFeature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 to-transparent" />
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-cyan-900 mb-4">
                    {selectedFeature.title}
                  </h2>
                  <p className="text-lg text-cyan-700 mb-6">
                    {selectedFeature.detailedDescription}
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-cyan-800">Key Benefits</h3>
                    <ul className="space-y-2">
                      {selectedFeature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-cyan-700">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
}

export default Features; 