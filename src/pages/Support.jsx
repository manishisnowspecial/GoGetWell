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
import challengesImage from '../images/challenges_solve-CteFwxY1.gif';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

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
      icon: <ArrowTrendingUpIcon className="h-6 w-6 text-cyan-500" />,
      challenges: [
        {
          title: 'Manual Booking Process',
          description: 'Eliminate time-consuming manual booking processes with automated scheduling and appointment management'
        },
        {
          title: 'Patient Data Management',
          description: 'Centralize patient information with secure, organized digital records and easy access'
        },        
        {
          title: 'Document Management',
          description: 'Digitize and organize medical records, reports, and documentation for easy access and compliance'
        }
      ]
    },
    {
      title: 'Enhanced Support',
      description: 'Improved patient communication',
      icon: <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-cyan-500" />,
      challenges: [
        {
          title: '24/7 Patient Support',
          description: 'Provide round-the-clock assistance to patients through AI-powered chatbots and automated responses'
        },
          
        {
          title: 'Medical Information Access',
          description: 'Enable patients to access their medical records, test results, and treatment plans securely'
        },
       
        {
          title: 'Emergency Support',
          description: 'Provide immediate assistance and guidance during medical emergencies or urgent situations'
        }
      ]
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
        className="py-24 px-4 bg-gradient-to-br from-cyan-50 to-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-4 relative z-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">
                  The Challenges We Solve
                </span>
              </h2>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-200 rounded-full opacity-50"></div>
            </div>
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
            className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            variants={fadeInUp}
          >
            <motion.div
              className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-xl overflow-hidden relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-20 h-20 bg-cyan-200 rounded-full opacity-20 z-10"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-cyan-300 rounded-full opacity-20 z-10"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 z-10"></div>
              
              {/* Main Content Container */}
              <div className="relative z-20 p-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                    Healthcare Challenges We Address
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                        <ArrowTrendingUpIcon className="w-4 h-4 text-cyan-600" />
                      </div>
                      <p className="text-cyan-700">Streamlined Operations</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                        <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-cyan-600" />
                      </div>
                      <p className="text-cyan-700">Enhanced Communication</p>
                    </div>
                  </div>
                </div>

                {/* Image Container */}
                <div className="mt-6 relative rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-transparent z-10"></div>
                  <img 
                    src={challengesImage}
                    alt="Challenges We Solve"
                    className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-900/80 to-transparent p-4 z-20">
                    <p className="text-white text-sm">
                      Transforming healthcare management with AI-powered solutions
                    </p>
                  </div>
                </div>

                {/* Stats or Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <p className="text-3xl font-bold text-cyan-600 mb-1">24/7</p>
                    <p className="text-sm text-cyan-700">Patient Support</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <p className="text-3xl font-bold text-cyan-600 mb-1">100%</p>
                    <p className="text-sm text-cyan-700">Digital Solution</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-8">
                {challengeSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-white p-4 rounded-full shadow-md">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-700 mb-2">{solution.title}</h3>
                      <p className="text-cyan-600 mb-4">{solution.description}</p>
                      {solution.challenges && (
                        <ul className="space-y-3">
                          {solution.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-cyan-500">•</span>
                              <div>
                                <h4 className="font-semibold text-cyan-800">{challenge.title}</h4>
                                <p className="text-cyan-600 text-sm">{challenge.description}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
          <div className="mt-4 text-center">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-6 h-6 text-cyan-600" />
              <a href="mailto:hello@gogetwell.ai" className="text-cyan-700 hover:text-cyan-600 transition-colors">
                hello@gogetwell.ai
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="w-6 h-6 text-cyan-600" />
              <a href="tel:+919811396858" className="text-cyan-700 hover:text-cyan-600 transition-colors">
                +91 9811396858
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="w-6 h-6 text-cyan-600" />
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
        </div>
      </motion.section>
    </PageLayout>
  );
}

export default Support; 