import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  DocumentTextIcon, 
  UserGroupIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

function Privacy() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'personal-info',
      title: 'Personal Information We Collect',
      icon: <UserGroupIcon className="h-6 w-6" />,
      content: [
        { type: 'heading', text: 'Information You Provide:' },
        { type: 'text', text: 'Account Information, Medical Information, User Content, Communication Information, Facilitator Information.' },
        { type: 'heading', text: 'Information We Collect Automatically:' },
        { type: 'text', text: 'Log Data, Usage Data, Device Information, Cookies, Analytics.' }
      ]
    },
    {
      id: 'use-info',
      title: 'How We Use Personal Information',
      icon: <ArrowPathIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'To provide AI-powered medical tourism services, including treatment recommendations and hospital matching.' },
        { type: 'text', text: 'To create and manage AI-powered websites for healthcare facilitators.' },
        { type: 'text', text: 'To improve our Services and conduct research on medical tourism trends.' },
        { type: 'text', text: 'To communicate with you about updates, services, and medical tourism opportunities.' },
        { type: 'text', text: 'To develop new features and services for the medical tourism industry.' },
        { type: 'text', text: 'To prevent fraud, criminal activity, and protect our IT systems.' },
        { type: 'text', text: 'To comply with legal obligations related to healthcare and tourism.' }
      ]
    },
    {
      id: 'disclosure',
      title: 'Disclosure of Personal Information',
      icon: <DocumentTextIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'Healthcare Providers: To facilitate medical treatments and hospital bookings.' },
        { type: 'text', text: 'Vendors and Service Providers: To support our medical tourism operations.' },
        { type: 'text', text: 'Business Transfers: During business transactions such as mergers or acquisitions.' },
        { type: 'text', text: 'Legal Requirements: To comply with laws, protect rights, prevent fraud, and ensure safety.' },
        { type: 'text', text: 'Affiliates: We may share personal information with our affiliates for purposes consistent with this Privacy Policy.' },
        { type: 'text', text: 'Healthcare Facilitators: If you use our platform through a facilitator, they may access your information.' }
      ]
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'Access information about how your personal information is processed.' },
        { type: 'text', text: 'Request deletion of your personal information.' },
        { type: 'text', text: 'Correct inaccurate personal information.' },
        { type: 'text', text: 'Transfer your personal information to another party.' },
        { type: 'text', text: 'Restrict how your personal information is processed.' },
        { type: 'text', text: 'Withdraw consent where consent is the basis for processing.' },
        { type: 'text', text: 'Object to how your personal information is processed.' },
        { type: 'text', text: 'File a complaint with a data protection authority.' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: <LockClosedIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'We implement robust security measures to protect your information, especially sensitive medical data. However, no method of transmission over the Internet is 100% secure.' }
      ]
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      icon: <ExclamationTriangleIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'We may modify this Privacy Policy from time to time. If we make material changes, we will notify you by updating the effective date at the top of this policy.' }
      ]
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <EnvelopeIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'If you have any questions about this Privacy Policy or our medical tourism services, please contact us at hello@gogetwell.ai.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl font-bold text-cyan-700 mb-4 relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">
                Privacy Policy
              </span>
            </h1>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-200 rounded-full opacity-50"></div>
          </div>
          <p className="text-xl text-cyan-900 max-w-4xl mx-auto">
            Welcome to KOLCO COMMERCE PRIVATE LIMITED ("GoGetWell AI","Go Get Well", "we," "our," or "us"). As an AI-powered platform dedicated to transforming the medical tourism industry, we are committed to protecting your privacy and personal information.
          </p>
          <div className="mt-4 text-cyan-700 font-medium">
            Effective Date: October 4, 2024
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-cyan-700 text-white shadow-lg'
                    : 'bg-white text-cyan-900 hover:bg-cyan-50'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    activeSection === section.id ? 'bg-white/20' : 'bg-cyan-100'
                  }`}>
                    {React.cloneElement(section.icon, {
                      className: `h-6 w-6 ${activeSection === section.id ? 'text-white' : 'text-cyan-600'}`
                    })}
                  </div>
                  <span className="font-semibold">{section.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            {activeSection ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {sections.find(s => s.id === activeSection)?.content.map((item, index) => (
                  <div key={index} className="mb-4">
                    {item.type === 'heading' ? (
                      <h3 className="text-lg font-semibold text-cyan-700 mb-2">{item.text}</h3>
                    ) : (
                      <p className="text-cyan-900">{item.text}</p>
                    )}
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-12"
              >
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="h-8 w-8 text-cyan-700" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-700 mb-2">Select a Section</h3>
                <p className="text-cyan-600">Choose a topic from the menu to view detailed information about our privacy policy.</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-cyan-700 mb-4">Have Questions?</h2>
          <p className="text-cyan-900 mb-6">We're here to help with any questions about our privacy policy.</p>
          <a 
            href="mailto:hello@gogetwell.ai" 
            className="inline-flex items-center gap-2 bg-cyan-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
          >
            <EnvelopeIcon className="h-5 w-5" />
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Privacy; 