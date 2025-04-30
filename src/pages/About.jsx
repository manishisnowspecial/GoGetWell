import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, bounce } from '../utils/animations';

function About() {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'Dr. Emily Williams',
      role: 'Medical Director',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300',
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute inset-0 bg-cyan-700 opacity-5 transform -skew-y-6"
          variants={slideInRight}
        />
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-cyan-800 mb-6 text-center"
            variants={fadeInUp}
          >
            About GoGetWell
          </motion.h1>
          <motion.p
            className="text-xl text-cyan-600 text-center max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Transforming healthcare accessibility through innovative AI solutions
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At GoGetWell, we're committed to revolutionizing the healthcare industry by making quality medical care accessible to everyone through cutting-edge AI technology and innovative solutions.
              </p>
              <ul className="space-y-4">
                {['Patient-First Approach', 'Innovation in Healthcare', 'Global Accessibility'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-cyan-700"
                    variants={fadeInUp}
                  >
                    <svg className="w-6 h-6 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              variants={slideInRight}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                alt="Healthcare Innovation"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-cyan-800 mb-12 text-center"
            variants={fadeInUp}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                variants={bounce}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-800">{member.name}</h3>
                  <p className="text-cyan-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-cyan-800 mb-12"
            variants={fadeInUp}
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', description: 'Pushing boundaries in healthcare technology' },
              { title: 'Accessibility', description: 'Making healthcare available to everyone' },
              { title: 'Excellence', description: 'Delivering the highest quality of service' },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </PageLayout>
  );
}

export default About; 