import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import FaqItem from '../components/FaqItem';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { 
  GlobeAltIcon, 
  BuildingOffice2Icon, 
  ChatBubbleLeftRightIcon, 
  CurrencyDollarIcon,
  UserGroupIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Online Website With AI Agent',
    description: 'Intelligent digital presence',
    icon: <GlobeAltIcon className="h-12 w-12 text-cyan-500" />,
    details: 'Create a powerful online presence with our AI-powered website builder, designed specifically for healthcare facilitators.'
  },
  {
    title: 'Build Digital Business',
    description: 'Scale your operations',
    icon: <BuildingOffice2Icon className="h-12 w-12 text-cyan-500" />,
    details: 'Transform your healthcare practice into a digital powerhouse with automated workflows and intelligent systems.'
  },
  {
    title: 'Patient Conversation',
    description: 'Seamless communication',
    icon: <ChatBubbleLeftRightIcon className="h-12 w-12 text-cyan-500" />,
    details: 'Enable smooth, instant communication with patients through AI-powered chat and automated responses.'
  },
  {
    title: 'Boost Revenue',
    description: 'Increase your earnings',
    icon: <CurrencyDollarIcon className="h-12 w-12 text-cyan-500" />,
    details: 'Maximize your revenue potential with smart scheduling, automated billing, and optimized patient flow.'
  },
  {
    title: 'Lead Generation Support',
    description: 'Convert visitors to clients',
    icon: <UserGroupIcon className="h-12 w-12 text-cyan-500" />,
    details: 'Turn website visitors into loyal patients with AI-driven lead generation and nurturing tools.'
  },
  {
    title: '24/7 Support for patient',
    description: 'Round-the-clock assistance',
    icon: <ClockIcon className="h-12 w-12 text-cyan-500" />,
    details: 'Provide continuous support to your patients with our AI system, ensuring they get help whenever they need it.'
  }
];

const faqs = [
  {
    q: 'What is gogetwell.ai?',
    a: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.'
  },
  {
    q: 'What is the AI Front Office for Healthcare Agents?',
    a: 'The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care.'
  },
  {
    q: 'How does the AI Agent assist me in my healthcare business?',
    a: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity.'
  },
  {
    q: 'Can I customize the website for my healthcare services?',
    a: 'Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients.'
  },
  {
    q: 'How does this platform support independent healthcare facilitators like me?',
    a: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals.'
  },
  {
    q: 'How does the platform help me manage patient leads?',
    a: 'The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care.'
  },
  {
    q: 'Is it easy to integrate the platform with the hospitals I work with?',
    a: 'Yes, the platform easily connects with the hospital systems I collaborate with. It helps me manage billing, communication, and partnerships without any hassle.'
  },
  {
    q: 'Is the platform secure and compliant with healthcare regulations?',
    a: 'Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patients\' data is always protected.'
  },
  {
    q: 'How quickly can I get started with the platform?',
    a: 'Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process.'
  },
  {
    q: 'What kind of customer support is available if I need help?',
    a: 'I have access to 24/7 customer support, along with tutorials and live demos, to make sure I get the most out of the platform and can resolve any issues quickly.'
  },
  {
    q: 'How does the platform help me attract more patients?',
    a: 'The platform allows me to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help me attract and retain more patients.'
  },
];

function Support() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const challengeSolutions = [
    {
      title: 'Efficient Operations',
      description: 'Streamlined booking and management',
      icon: <ArrowTrendingUpIcon className="h-6 w-6 text-cyan-500" />
    },
    {
      title: 'Enhanced Support',
      description: 'Improved patient communication',
      icon: <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-cyan-500" />
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-br from-cyan-700 to-cyan-500 text-white py-20 px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            AI-Powered Healthcare Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-cyan-100 mb-8"
            variants={fadeInUp}
          >
            Transform your healthcare practice with intelligent automation and seamless patient care
          </motion.p>
        </div>
      </motion.section>

      {/* The Challenges We Solve Section */}
      <motion.section 
        className="py-24 px-4 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6">
              The Challenges We Solve
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-cyan-900 mb-6 leading-relaxed">
                Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.
              </p>
              <p className="text-lg text-cyan-900 mb-12 leading-relaxed">
                Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            {challengeSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-700">{solution.title}</h3>
                    <p className="text-cyan-600">{solution.description}</p>
                  </div>
                </div>
                <div className="relative w-full">
                  <img 
                    src="/challenges_solve-CteFwxY1.gif" 
                    alt={solution.title}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('bg-cyan-50', 'h-48', 'rounded-lg', 'flex', 'items-center', 'justify-center');
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-6">
                          <p class="text-cyan-700 font-medium">${solution.description}</p>
                        </div>
                      `;
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Grid Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-cyan-700 mb-16"
            variants={fadeInUp}
          >
            Comprehensive Healthcare Solutions
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-cyan-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-cyan-700 mb-2">{feature.title}</h3>
                <p className="text-cyan-500 font-medium mb-4">{feature.description}</p>
                <p className="text-cyan-900">{feature.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 px-4 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-8 text-cyan-700"
            variants={fadeInUp}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-lg text-cyan-900 mb-12 text-center"
            variants={fadeInUp}
          >
            Find answers to common questions about our platform. Can't find what you're looking for? Feel free to contact us.
          </motion.p>
          <div className="rounded-2xl shadow-lg bg-gradient-to-br from-cyan-50 to-white overflow-hidden">
            {faqs.map((faq, i) => (
              <FaqItem 
                key={i} 
                question={faq.q} 
                answer={faq.a}
                isOpen={activeFaqIndex === i}
                onClick={() => setActiveFaqIndex(activeFaqIndex === i ? null : i)}
              />
            ))}
          </div>
          <motion.div 
            className="text-center mt-10"
            variants={fadeInUp}
          >
            <a 
              href="/contact" 
              className="inline-block bg-cyan-700 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition"
            >
              Still have questions? Contact Us
            </a>
          </motion.div>
        </div>
      </motion.section>
    </PageLayout>
  );
}

export default Support; 