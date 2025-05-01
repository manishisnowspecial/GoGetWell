import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, bounce } from '../utils/animations';
import honeyImage from '../images/honey_singh.jpg';
import { FaLinkedin, FaLightbulb, FaUsers, FaRocket, FaArrowUp } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

function About() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const team = [
    {
      name: 'Honey Singh',
      role: 'Co-Founder',
      image: honeyImage,
      linkedin: 'https://in.linkedin.com/in/honeytech',
      bio: 'Pioneering AI-driven healthcare solutions to revolutionize medical tourism and patient care.'
    }
  ];

  const achievements = [
    { number: '1000+', label: 'Patients Served' },
    { number: '50+', label: 'Healthcare Partners' },
    { number: '24/7', label: 'Support Available' },
    { number: '98%', label: 'Patient Satisfaction' }
  ];

  return (
    <PageLayout>
      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-700 text-white p-4 rounded-full shadow-lg z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="w-6 h-6" />
        </motion.button>
      )}

      {/* Hero Section with Animated Background */}
      <motion.section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-900 to-cyan-700 pt-24"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200"
            variants={fadeInUp}
          >
            About Us
          </motion.h1>
          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <p className="text-xl md:text-2xl text-cyan-100 mb-6 leading-relaxed">
              We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.
            </p>
            <p className="text-xl text-cyan-200 mb-12">
              Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12"
            variants={fadeInUp}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FaLightbulb className="w-6 h-6 text-cyan-200" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Solutions</h3>
              <p className="text-cyan-100">Leveraging AI technology for healthcare</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FaUsers className="w-6 h-6 text-cyan-200" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient-Centric</h3>
              <p className="text-cyan-100">Personalized healthcare experiences</p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            variants={fadeInUp}
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-white mb-2">{achievement.number}</h3>
                <p className="text-cyan-200">{achievement.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section with Creative Layout */}
      <motion.section
        className="py-24 px-4 bg-gradient-to-br from-white to-cyan-50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideInLeft}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-200 rounded-full opacity-20"></div>
                <h2 className="text-4xl font-bold text-cyan-900 mb-8 relative z-10">Our Mission</h2>
              </div>
              <p className="text-xl text-cyan-800 mb-8 leading-relaxed">
                Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.
              </p>
              <p className="text-xl text-cyan-700 mb-8 italic">
                We strive to become the leading platform for healthcare tourism management and digital transformation.
              </p>
              <div className="space-y-6">
                {[
                  { 
                    icon: <FaLightbulb />, 
                    title: 'AI-Powered Solutions',
                    text: 'Optimizing operations with advanced technology'
                  },
                  { 
                    icon: <FaRocket />, 
                    title: 'Growth Focus',
                    text: 'Maximizing revenue and opportunities'
                  },
                  { 
                    icon: <FaUsers />, 
                    title: 'Patient-Centric Approach',
                    text: 'Delivering personalized healthcare experiences'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 bg-white/50 rounded-xl p-4 hover:bg-white/80 transition-colors duration-200"
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-xl text-cyan-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-800 mb-1">{item.title}</h4>
                      <p className="text-cyan-600">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={slideInRight}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                  alt="Healthcare Innovation"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cyan-900/80 to-transparent rounded-b-2xl">
                  <p className="text-white text-lg">Empowering healthcare facilitators with modern solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section with Modern Design */}
      <motion.section
        className="py-24 px-4 bg-gradient-to-br from-cyan-50 to-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">Leadership</h2>
            <p className="text-xl text-cyan-600 max-w-3xl mx-auto">
              Meet the visionary behind GoGetWell's innovative healthcare solutions
            </p>
          </motion.div>
          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm transform hover:scale-105 transition-transform duration-300"
                variants={bounce}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="p-8 text-center bg-gradient-to-b from-white to-cyan-50">
                  <h3 className="text-3xl font-bold text-cyan-900 mb-2">{member.name}</h3>
                  <p className="text-xl text-cyan-700 mb-4">{member.role}</p>
                  <p className="text-cyan-600 mb-6">{member.bio}</p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-cyan-600 hover:text-cyan-800 transition-colors group"
                  >
                    <FaLinkedin className="w-6 h-6" />
                    <span>Connect on LinkedIn</span>
                    <BsArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section with Interactive Cards */}
      <motion.section
        className="py-24 px-4 bg-gradient-to-br from-cyan-900 to-cyan-700"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-16"
            variants={fadeInUp}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Innovation', 
                description: 'Pushing boundaries in healthcare technology with AI-driven solutions',
                icon: <FaLightbulb className="w-8 h-8" />
              },
              { 
                title: 'Accessibility', 
                description: 'Making quality healthcare available to everyone, everywhere',
                icon: <FaUsers className="w-8 h-8" />
              },
              { 
                title: 'Excellence', 
                description: 'Delivering the highest quality of service and patient care',
                icon: <FaRocket className="w-8 h-8" />
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-white border border-white/20 hover:bg-white/20 transition-colors duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-cyan-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </PageLayout>
  );
}

export default About; 