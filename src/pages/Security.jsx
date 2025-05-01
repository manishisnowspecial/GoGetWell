import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  ServerIcon,
  KeyIcon,
  FingerPrintIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';

function Security() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'overview',
      title: 'Security Overview',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'Your trust is our top priority. GoGetWell.AI is built with industry-leading security and privacy standards to ensure the safety of your data and operations.' },
        { type: 'text', text: 'We implement multiple layers of security measures to protect your information and maintain the highest standards of data protection.' }
      ]
    },
    {
      id: 'compliance',
      title: 'HIPAA Compliance',
      icon: <DocumentCheckIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'We meet the highest standards for healthcare data privacy and security, fully compliant with HIPAA regulations.' },
        { type: 'list', items: [
          'Regular compliance audits and assessments',
          'Comprehensive privacy policies and procedures',
          'Employee training on HIPAA requirements',
          'Business Associate Agreements (BAAs) with partners'
        ]}
      ]
    },
    {
      id: 'encryption',
      title: 'Data Encryption',
      icon: <LockClosedIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'All patient and business data is protected with state-of-the-art encryption technologies.' },
        { type: 'list', items: [
          'End-to-end encryption for data in transit',
          'AES-256 encryption for data at rest',
          'Secure key management system',
          'Regular encryption key rotation'
        ]}
      ]
    },
    {
      id: 'access',
      title: 'Access Control',
      icon: <KeyIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'We implement strict access controls to ensure only authorized personnel can access sensitive information.' },
        { type: 'list', items: [
          'Role-based access control (RBAC)',
          'Multi-factor authentication (MFA)',
          'Single sign-on (SSO) integration',
          'Session management and timeout policies'
        ]}
      ]
    },
    {
      id: 'monitoring',
      title: 'Security Monitoring',
      icon: <BellAlertIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'Continuous monitoring and threat detection to identify and respond to potential security incidents.' },
        { type: 'list', items: [
          '24/7 security monitoring',
          'Automated threat detection',
          'Real-time alerting system',
          'Incident response protocols'
        ]}
      ]
    },
    {
      id: 'infrastructure',
      title: 'Secure Infrastructure',
      icon: <ServerIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'Our infrastructure is designed with security as a fundamental principle.' },
        { type: 'list', items: [
          'Secure cloud infrastructure',
          'Regular security updates and patches',
          'DDoS protection',
          'Backup and disaster recovery'
        ]}
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
                Security
              </span>
            </h1>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-200 rounded-full opacity-50"></div>
          </div>
          <p className="text-xl text-cyan-900 max-w-4xl mx-auto">
            Your trust is our top priority. GoGetWell.AI is built with industry-leading security and privacy standards.
          </p>
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
                  <div key={index} className="mb-6">
                    {item.type === 'heading' ? (
                      <h3 className="text-lg font-semibold text-cyan-700 mb-2">{item.text}</h3>
                    ) : item.type === 'list' ? (
                      <ul className="list-disc ml-6 space-y-2">
                        {item.items.map((listItem, idx) => (
                          <li key={idx} className="text-cyan-900">{listItem}</li>
                        ))}
                      </ul>
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
                  <ShieldCheckIcon className="h-8 w-8 text-cyan-700" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-700 mb-2">Select a Security Topic</h3>
                <p className="text-cyan-600">Choose a topic from the menu to learn more about our security measures.</p>
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
          <h2 className="text-2xl font-bold text-cyan-700 mb-4">Have Security Questions?</h2>
          <p className="text-cyan-900 mb-6">Our security team is available to address any concerns you may have.</p>
          <a 
            href="mailto:security@gogetwell.ai" 
            className="inline-flex items-center gap-2 bg-cyan-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
          >
            <ShieldCheckIcon className="h-5 w-5" />
            Contact Security Team
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Security; 