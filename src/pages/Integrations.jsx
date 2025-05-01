import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  ChartBarIcon,
  CreditCardIcon,
  ServerIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  BoltIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';

function Integrations() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Integrations', icon: <PuzzlePieceIcon className="h-6 w-6" /> },
    { id: 'hospital', name: 'Hospital Systems', icon: <BuildingOfficeIcon className="h-6 w-6" /> },
    { id: 'crm', name: 'CRMs', icon: <ServerIcon className="h-6 w-6" /> },
    { id: 'payment', name: 'Payment Gateways', icon: <CreditCardIcon className="h-6 w-6" /> },
    { id: 'analytics', name: 'Analytics', icon: <ChartBarIcon className="h-6 w-6" /> }
  ];

  const integrations = [
    {
      id: 'hospital',
      name: 'Hospital Systems',
      icon: <BuildingOfficeIcon className="h-8 w-8" />,
      description: 'Seamless integration with leading hospital management systems.',
      features: [
        'Real-time patient data sync',
        'Automated appointment scheduling',
        'Secure medical records exchange',
        'Billing system integration'
      ],
      partners: ['Epic', 'Cerner', 'Meditech', 'Allscripts']
    },
    {
      id: 'crm',
      name: 'CRMs',
      icon: <ServerIcon className="h-8 w-8" />,
      description: 'Connect your favorite CRM for unified patient management.',
      features: [
        'Patient journey tracking',
        'Automated follow-ups',
        'Custom workflow automation',
        'Multi-channel communication'
      ],
      partners: ['Salesforce', 'HubSpot', 'Zoho', 'Microsoft Dynamics']
    },
    {
      id: 'payment',
      name: 'Payment Gateways',
      icon: <CreditCardIcon className="h-8 w-8" />,
      description: 'Accept payments with multiple secure payment gateways.',
      features: [
        'Multi-currency support',
        'Automated invoicing',
        'Secure payment processing',
        'Real-time transaction tracking'
      ],
      partners: ['Stripe', 'Razorpay', 'PayPal', 'Square']
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: <ChartBarIcon className="h-8 w-8" />,
      description: 'Sync with analytics tools for powerful insights.',
      features: [
        'Custom dashboard creation',
        'Real-time data visualization',
        'Automated reporting',
        'Predictive analytics'
      ],
      partners: ['Google Analytics', 'Tableau', 'Power BI', 'Mixpanel']
    }
  ];

  const filteredIntegrations = activeCategory === 'all' 
    ? integrations 
    : integrations.filter(i => i.id === activeCategory);

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
                Integrations
              </span>
            </h1>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-200 rounded-full opacity-50"></div>
          </div>
          <p className="text-xl text-cyan-900 max-w-4xl mx-auto">
            GoGetWell.AI connects with the tools you already use, making your workflow seamless and efficient.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-cyan-700 text-white shadow-lg'
                  : 'bg-white text-cyan-900 hover:bg-cyan-50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className={`p-2 rounded-full ${
                activeCategory === category.id ? 'bg-white/20' : 'bg-cyan-100'
              }`}>
                {React.cloneElement(category.icon, {
                  className: `h-5 w-5 ${activeCategory === category.id ? 'text-white' : 'text-cyan-600'}`
                })}
              </div>
              <span className="font-semibold">{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-cyan-100 p-3 rounded-full">
                    {React.cloneElement(integration.icon, {
                      className: "h-8 w-8 text-cyan-600"
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-700">{integration.name}</h3>
                </div>
                <p className="text-cyan-600 mb-6">{integration.description}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-cyan-700 flex items-center gap-2">
                    <BoltIcon className="h-5 w-5" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {integration.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-cyan-900">
                        <ArrowPathIcon className="h-4 w-4 text-cyan-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-cyan-700 flex items-center gap-2 mb-3">
                    <ShieldCheckIcon className="h-5 w-5" />
                    Supported Partners
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {integration.partners.map((partner, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-cyan-700 mb-4">Need a Custom Integration?</h2>
          <p className="text-cyan-900 mb-6">Our team can help you connect with any system or tool you need.</p>
          <a 
            href="mailto:hello@gogetwell.ai" 
            className="inline-flex items-center gap-2 bg-cyan-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
          >
            <PuzzlePieceIcon className="h-5 w-5" />
            Request Integration
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Integrations; 