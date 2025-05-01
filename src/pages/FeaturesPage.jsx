import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ScrollToTopLink from '../components/ScrollToTopLink';

const features = [
  {
    title: 'Custom AI-Powered Website',
    desc: 'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
    benefits: ['24/7 Patient Interaction', 'Smart Appointment Scheduling', 'Automated Follow-ups'],
    image: 'https://img.freepik.com/free-vector/medical-technology-science-background-vector-health-care-design-blue_53876-140667.jpg'
  },
  {
    title: 'Enhanced Patient Conversion',
    desc: 'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
    benefits: ['Personalized Patient Journey', 'Smart Lead Scoring', 'Conversion Analytics'],
    image: 'https://img.freepik.com/free-vector/telemedicine-abstract-concept-vector-illustration-medical-consultation-online-remote-health-monitoring-patient-portal-appointment-booking-digital-healthcare-service-abstract-metaphor_335657-2281.jpg'
  },
  {
    title: 'Real-Time Query Handling',
    desc: 'Instant response system for patient inquiries with AI-powered chat support.',
    benefits: ['Instant Responses', 'Multi-language Support', 'Context-Aware AI'],
    image: 'https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg'
  },
  {
    title: 'Medical Report Analysis',
    desc: 'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
    benefits: ['Automated Analysis', 'Quick Turnaround', 'Accurate Insights'],
    image: 'https://img.freepik.com/free-vector/medical-healthcare-diagnostics-abstract-concept-vector-illustration-diagnostic-testing-center-healthcare-system-medical-diagnostic-equipment-disease-prevention-symptoms-checker-abstract-metaphor_335657-1602.jpg'
  },
  {
    title: 'Secure Data Management',
    desc: 'Enterprise-grade security for all your patient data and communications.',
    benefits: ['HIPAA Compliant', 'End-to-End Encryption', 'Regular Security Audits'],
    image: 'https://img.freepik.com/free-vector/data-security-concept-illustration_114360-5421.jpg'
  },
  {
    title: 'Global Healthcare Network',
    desc: 'Connect with healthcare providers and patients worldwide.',
    benefits: ['International Reach', 'Cross-border Care', 'Global Standards'],
    image: 'https://img.freepik.com/free-vector/global-medical-technology-network-connection-background_53876-119507.jpg'
  }
];

function FeaturesPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-cyan-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Powerful Features for Healthcare Providers
            </motion.h1>
            <motion.p 
              className="text-xl text-cyan-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform your healthcare practice with our AI-powered solutions designed to enhance patient care and streamline operations.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
                  <ScrollToTopLink to="/demo">
                    <div className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-500 transition-colors group/link">
                      Get Started
                      <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </ScrollToTopLink>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
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
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

export default FeaturesPage; 