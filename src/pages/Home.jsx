import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { 
  UserGroupIcon, 
  DocumentChartBarIcon, 
  ChatBubbleLeftRightIcon, 
  GlobeAltIcon,
  ChartBarIcon, 
  ShieldCheckIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  XMarkIcon,
  UserCircleIcon,
  PaperAirplaneIcon,
  BoltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

// Enhanced image constants with more creative placeholders
const IMAGES = {
  hero: {
    main: 'https://placehold.co/1200x800/0891b2/ffffff?text=Healthcare+Professional',
    shape: 'https://via.placeholder.com/2000/0891b2/ffffff',
    pattern: 'https://via.placeholder.com/2000/0891b2/ffffff'
  },
  features: {
    ai: 'https://placehold.co/800x500/0891b2/ffffff?text=AI+Healthcare',
    growth: 'https://placehold.co/800x500/0ea5e9/ffffff?text=Growth+Analytics',
    operations: 'https://placehold.co/800x500/06b6d4/ffffff?text=Healthcare+Operations',
    security: 'https://placehold.co/800x500/0284c7/ffffff?text=Security',
    support: 'https://placehold.co/800x500/0369a1/ffffff?text=24-7+Support',
    global: 'https://placehold.co/800x500/075985/ffffff?text=Global+Reach'
  },
  testimonials: {
    doctor1: 'https://placehold.co/200x200/0891b2/ffffff?text=Dr.+Sarah',
    doctor2: 'https://placehold.co/200x200/0ea5e9/ffffff?text=Dr.+Mark',
    doctor3: 'https://placehold.co/200x200/06b6d4/ffffff?text=Dr.+Emily'
  },
  partners: {
    hospital1: 'https://placehold.co/400x300/0891b2/ffffff?text=Hospital+1',
    hospital2: 'https://placehold.co/400x300/0ea5e9/ffffff?text=Hospital+2',
    hospital3: 'https://placehold.co/400x300/06b6d4/ffffff?text=Hospital+3',
    hospital4: 'https://placehold.co/400x300/0284c7/ffffff?text=Hospital+4'
  },
  mission: 'https://placehold.co/1000x600/0891b2/ffffff?text=Our+Mission',
  contact: 'https://placehold.co/800x500/0891b2/ffffff?text=Contact+Support',
  benefits: {
    efficiency: 'https://placehold.co/600x400/0891b2/ffffff?text=Efficiency',
    security: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Security',
    scalability: 'https://placehold.co/600x400/06b6d4/ffffff?text=Scalability',
    support: 'https://placehold.co/600x400/0284c7/ffffff?text=Support'
  }
};

// Enhanced features with more details and icons
const features = [
  {
    title: 'Custom AI-Powered Website',
    desc: 'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
    icon: <SparklesIcon className="h-10 w-10 text-cyan-500" />,
    benefits: ['24/7 Patient Interaction', 'Smart Appointment Scheduling', 'Automated Follow-ups']
  },
  {
    title: 'Enhanced Patient Conversion',
    desc: 'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
    icon: <ChartBarIcon className="h-10 w-10 text-cyan-500" />,
    benefits: ['Personalized Patient Journey', 'Smart Lead Scoring', 'Conversion Analytics']
  },
  {
    title: 'Real-Time Query Handling',
    desc: 'Instant response system for patient inquiries with AI-powered chat support.',
    icon: <BoltIcon className="h-12 w-12 text-cyan-500" />,
    benefits: ['Instant Responses', 'Multi-language Support', 'Context-Aware AI']
  },
  {
    title: 'Medical Report Analysis',
    desc: 'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
    icon: <DocumentChartBarIcon className="h-10 w-10 text-cyan-500" />,
    benefits: ['Automated Analysis', 'Quick Turnaround', 'Accurate Insights']
  },
  {
    title: 'Secure Data Management',
    desc: 'Enterprise-grade security for all your patient data and communications.',
    icon: <ShieldCheckIcon className="h-10 w-10 text-cyan-500" />,
    benefits: ['HIPAA Compliant', 'End-to-End Encryption', 'Regular Security Audits']
  },
  {
    title: 'Global Healthcare Network',
    desc: 'Connect with healthcare providers and patients worldwide.',
    icon: <GlobeAltIcon className="h-10 w-10 text-cyan-500" />,
    benefits: ['International Reach', 'Cross-border Care', 'Global Standards']
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

const pricingPlans = [
  {
    name: 'Starter',
    price: '99',
    description: 'Perfect for independent healthcare facilitators',
    features: [
      'AI-powered website builder',
      'Basic patient management',
      'Email support',
      'Up to 50 patient inquiries/month',
      'Basic analytics'
    ]
  },
  {
    name: 'Professional',
    price: '199',
    description: 'Ideal for growing healthcare practices',
    features: [
      'Everything in Starter, plus:',
      'Advanced AI chatbot',
      'Priority support',
      'Unlimited patient inquiries',
      'Advanced analytics & reporting',
      'Custom branding',
      'Multi-language support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large healthcare networks',
    features: [
      'Everything in Professional, plus:',
      'Dedicated account manager',
      'Custom integrations',
      'API access',
      'White-label solution',
      'Advanced security features',
      '24/7 phone support'
    ]
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Healthcare Facilitator',
    quote: 'GoGetWell.ai transformed my practice. The AI-powered system handles patient inquiries 24/7, allowing me to focus on providing quality care.'
  },
  {
    name: 'Mark Thompson',
    role: 'Hospital Administrator',
    quote: 'The platform streamlined our patient management process and significantly improved our conversion rates. Highly recommended!'
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Medical Tourism Expert',
    quote: 'The multilingual support and automated booking system made international patient coordination effortless.'
  }
];

// Benefits section data
const benefits = [
  {
    title: 'Streamlined Operations',
    description: 'Automate routine tasks and focus on what matters most - patient care.',
    icon: <BoltIcon className="h-12 w-12 text-cyan-500" />,
    image: IMAGES.benefits.efficiency
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade security measures to protect sensitive healthcare data.',
    icon: <ShieldCheckIcon className="h-12 w-12 text-cyan-500" />,
    image: IMAGES.benefits.security
  },
  {
    title: 'Global Scalability',
    description: 'Expand your healthcare services across borders effortlessly.',
    icon: <ChartBarIcon className="h-12 w-12 text-cyan-500" />,
    image: IMAGES.benefits.scalability
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance for you and your patients.',
    icon: <UserGroupIcon className="h-12 w-12 text-cyan-500" />,
    image: IMAGES.benefits.support
  }
];

function Home() {
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [showChat, setShowChat] = useState(false);

  return (
    <PageLayout>
      {/* Hero Section */}
      <motion.section 
        className="bg-[#00A7B3] min-h-[90vh] flex items-center relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div 
              className="text-white"
              variants={fadeInUp}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                variants={fadeInUp}
              >
                Website Builder for
                <div className="text-[#B3E3E8]">healthcare</div>
                <div className="text-[#B3E3E8]">facilitators</div>
              </motion.h1>
              <motion.h2 
                className="text-3xl mb-4"
                variants={fadeInUp}
              >
                Create AI Store in 2 min
              </motion.h2>
              <motion.p 
                className="text-xl mb-8"
                variants={fadeInUp}
              >
                Boost Patients Conversion and Earn While Sleeping
              </motion.p>
              <Link to="/demo">
                <motion.button 
                  className="bg-[#00D1E0] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#00bfcc] transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 mt-16"
                variants={fadeInUp}
              >
                <motion.div variants={fadeInUp}>
                  <div className="text-4xl font-bold mb-2">2100+</div>
                  <div className="text-[#B3E3E8]">qualified doctors</div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-[#B3E3E8]">hospitals</div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div className="text-4xl font-bold mb-2">800+</div>
                  <div className="text-[#B3E3E8]">AI Treatment Plans</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Video */}
            <motion.div 
              className="relative"
              variants={fadeInUp}
            >
              <iframe
                className="w-full h-[400px] rounded-lg shadow-xl"
                src="https://www.youtube.com/embed/xQl8i2sO_Ls"
                title="GoGetWell AI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Social Proof Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <img src="https://placehold.co/200x80/ffffff/333333?text=Partner+1" alt="Partner 1" className="h-12 object-contain" />
            <img src="https://placehold.co/200x80/ffffff/333333?text=Partner+2" alt="Partner 2" className="h-12 object-contain" />
            <img src="https://placehold.co/200x80/ffffff/333333?text=Partner+3" alt="Partner 3" className="h-12 object-contain" />
            <img src="https://placehold.co/200x80/ffffff/333333?text=Partner+4" alt="Partner 4" className="h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Features Section with Comprehensive Solutions */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-cyan-50 via-white to-cyan-50 relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${IMAGES.hero.pattern})`,
            backgroundSize: 'cover'
          }}
          animate={{
            y: [-50, 0],
            transition: {
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-6">
              Our Comprehensive Solutions
            </h2>
            <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
              Discover how our AI-powered solutions can transform your healthcare practice with cutting-edge technology and seamless integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/50 group-hover:opacity-75 transition-opacity duration-300 z-10"></div>
                  <img
                    src={IMAGES.features[['ai', 'growth', 'operations', 'security', 'support', 'global'][index]]}
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-20">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-xl mb-3 text-cyan-900">{feature.title}</h3>
                  <p className="text-cyan-600 mb-4">{feature.desc}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-cyan-700">
                        <CheckCircleIcon className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-6">
                  <Link to={`/features/${index + 1}`}>
                    <motion.button
                      className="text-cyan-600 font-semibold inline-flex items-center group/btn"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRightIcon className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Integration Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/30 via-cyan-200/10 to-cyan-400/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-900 mb-4 drop-shadow-sm">
              Seamless Integration with Your Existing Tools
            </h2>
            <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
              Connect with your favorite healthcare and business tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group border border-cyan-100 hover:border-cyan-300 cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 group-hover:from-cyan-200 group-hover:to-cyan-300 shadow-inner transition-all duration-300">
                  <img
                    src={`https://placehold.co/48x48/bae6fd/0891b2?text=T${item}`}
                    alt={`Integration ${item}`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-cyan-900 font-bold text-lg mb-1 group-hover:text-cyan-700 transition-all duration-200">Integration {item}</h3>
                <span className="text-cyan-400 text-xs tracking-wide">Connect & Automate</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New AI-Powered Website Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A7B3] to-[#00D1E0]/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-12">
              <div className="bg-[#B3E3E8]/30 backdrop-blur-sm p-6 rounded-full">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Get Your Patient Ready Website Now
              </h2>
              <p className="text-2xl text-white/90 mb-12">
                Use power AI to transform your online presence and automate patient interactions
              </p>
              <Link to="/demo">
                <motion.button
                  className="bg-[#00D1E0] hover:bg-[#00bfcc] text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Waiting List
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-cyan-900 to-cyan-700 text-white relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${IMAGES.hero.pattern})`,
            backgroundSize: 'cover'
          }}
          animate={{
            y: [-50, 0],
            transition: {
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <span className="text-cyan-200 font-semibold text-sm tracking-wider uppercase mb-2 block">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Healthcare Providers Choose Us
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Experience the future of healthcare management with our comprehensive suite of tools and services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="mb-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-cyan-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            variants={fadeInUp}
          >
            <motion.a
              href="/demo"
              className="inline-block bg-white text-cyan-700 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section - Enhanced with video testimonials */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-cyan-50 to-cyan-100 relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-cyan-900 mb-6">
              Hear from Our Happy Customers
            </h2>
            <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
              See how healthcare providers are transforming their practice with GoGetWell
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 relative"
                variants={fadeInUp}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img
                      src={IMAGES.testimonials[`doctor${index + 1}`]}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-900">{testimonial.name}</h3>
                    <p className="text-cyan-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-cyan-700">{testimonial.quote}</p>
                <div className="mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 inline-block" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        className="py-24 px-4 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-cyan-700 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-cyan-600">Choose the plan that best fits your needs</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-400 relative' : 'bg-white'
                }`}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-cyan-700 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-900 mb-4">
                  ${plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg font-normal text-cyan-600">/month</span>}
                </div>
                <p className="text-cyan-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-cyan-500 mr-2 flex-shrink-0" />
                      <span className="text-cyan-900">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition ${
                  plan.popular
                    ? 'bg-cyan-600 text-white hover:bg-cyan-500'
                    : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-24 px-4 bg-white relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${IMAGES.hero.pattern})`,
            backgroundSize: 'cover'
          }}
          animate={{
            y: [-50, 0],
            transition: {
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-2 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-cyan-600">
              Find answers to common questions about GoGetWell.ai
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                initial="collapsed"
                animate={selectedFaq === index ? "expanded" : "collapsed"}
                onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
              >
                <div className="p-6 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-cyan-900">{faq.q}</h3>
                    <motion.div
                      animate={{ rotate: selectedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="h-5 w-5 text-cyan-600" />
                    </motion.div>
                  </div>
                  <motion.div
                    variants={{
                      expanded: { height: "auto", opacity: 1, marginTop: 16 },
                      collapsed: { height: 0, opacity: 0, marginTop: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-cyan-600">{faq.a}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-[#00A7B3] to-[#00D1E0] text-white relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of healthcare providers who are already using GoGetWell.ai to grow their practice
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/demo">
                <motion.button
                  className="bg-white text-[#00A7B3] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Free
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-700 mb-2">99.9%</div>
              <p className="text-cyan-600">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-700 mb-2">HIPAA</div>
              <p className="text-cyan-600">Compliant</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-700 mb-2">24/7</div>
              <p className="text-cyan-600">Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-700 mb-2">10K+</div>
              <p className="text-cyan-600">Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-cyan-600 text-white p-4 rounded-full shadow-lg hover:bg-cyan-500 transition-colors duration-300 relative group"
        >
          {showChat ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <>
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                1
              </span>
            </>
          )}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {showChat ? 'Close Chat' : 'Need Help?'}
          </span>
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-8 w-96 bg-white rounded-xl shadow-2xl z-40 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <UserCircleIcon className="h-8 w-8 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Support</h3>
                  <p className="text-cyan-100 text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="h-96 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="bg-cyan-50 rounded-lg p-3 max-w-[80%]">
                    <p className="text-cyan-900">Hello! How can I help you today?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-500 transition-colors">
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}

export default Home; 