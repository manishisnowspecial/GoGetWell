import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  XCircleIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

function PricingPolicy() {
  const [activeTab, setActiveTab] = useState('overview');

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: 'per month',
      description: 'Perfect for small healthcare facilitators',
      features: [
        { text: 'Up to 50 patient leads', included: true },
        { text: 'Basic CRM integration', included: true },
        { text: 'Email support', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Custom branding', included: false },
        { text: 'Priority support', included: false },
        { text: 'Advanced analytics', included: false },
        { text: 'API access', included: false }
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'per month',
      description: 'Ideal for growing healthcare businesses',
      features: [
        { text: 'Up to 200 patient leads', included: true },
        { text: 'Advanced CRM integration', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'API access', included: false }
      ],
      color: 'bg-purple-100 text-purple-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per month',
      description: 'For large healthcare organizations',
      features: [
        { text: 'Unlimited patient leads', included: true },
        { text: 'Full CRM integration', included: true },
        { text: '24/7 dedicated support', included: true },
        { text: 'Custom analytics', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'API access', included: true }
      ],
      color: 'bg-cyan-100 text-cyan-600'
    }
  ];

  const faqs = [
    {
      question: 'How does the pricing work?',
      answer: 'Our pricing is based on a monthly subscription model. You can choose between Starter, Professional, or Enterprise plans based on your needs. All plans include access to our core features, with additional benefits as you upgrade.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
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
                Pricing Policy
              </span>
            </h1>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-200 rounded-full opacity-50"></div>
          </div>
          <p className="text-xl text-cyan-900 max-w-4xl mx-auto">
            Transparent pricing for healthcare facilitators of all sizes. Choose the plan that best fits your needs.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                tier.popular ? 'ring-2 ring-purple-500' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {tier.popular && (
                <div className="bg-purple-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full ${tier.color}`}>
                    <CurrencyDollarIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-700">{tier.name}</h3>
                    <p className="text-cyan-600">{tier.description}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-cyan-700">{tier.price}</div>
                  <div className="text-cyan-600">{tier.period}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-gray-300" />
                      )}
                      <span className={`${feature.included ? 'text-cyan-700' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 rounded-xl font-medium transition-colors ${
                    tier.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-cyan-600 text-white hover:bg-cyan-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-cyan-100">
                <ShieldCheckIcon className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-700">Security & Compliance</h3>
            </div>
            <p className="text-cyan-600 mb-4">
              All plans include enterprise-grade security and HIPAA compliance to protect your patient data.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-cyan-700">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                HIPAA Compliant
              </li>
              <li className="flex items-center gap-2 text-cyan-700">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Data Encryption
              </li>
              <li className="flex items-center gap-2 text-cyan-700">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Regular Security Audits
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-cyan-100">
                <ClockIcon className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-700">Support & Updates</h3>
            </div>
            <p className="text-cyan-600 mb-4">
              We provide continuous support and regular updates to ensure your success.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-cyan-700">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                24/7 Technical Support
              </li>
              <li className="flex items-center gap-2 text-cyan-700">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Regular Feature Updates
              </li>
              <li className="flex items-center gap-2 text-cyan-700">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Training Resources
              </li>
            </ul>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-cyan-700 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-cyan-100 pb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-cyan-100">
                    <QuestionMarkCircleIcon className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-700 mb-2">{faq.question}</h3>
                    <p className="text-cyan-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-cyan-700 mb-4">Need Custom Pricing?</h2>
          <p className="text-cyan-900 mb-6">Contact our sales team for a personalized quote.</p>
          <a 
            href="mailto:sales@gogetwell.ai" 
            className="inline-flex items-center gap-2 bg-cyan-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
          >
            <EnvelopeIcon className="h-5 w-5" />
            Contact Sales
          </a>
        </motion.div>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default PricingPolicy; 