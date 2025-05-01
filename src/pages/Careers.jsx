import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import PageLayout from '../components/PageLayout';

const roles = [
  { 
    title: 'Frontend Developer', 
    location: 'Remote', 
    type: 'Full-time', 
    desc: 'Build beautiful, scalable UIs for healthcare SaaS.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    responsibilities: [
      'Develop responsive web applications',
      'Collaborate with designers and backend team',
      'Optimize application performance',
      'Write clean, maintainable code'
    ]
  },
  { 
    title: 'AI Product Manager', 
    location: 'Remote', 
    type: 'Full-time', 
    desc: 'Lead the vision and execution of AI-powered features.',
    skills: ['Product Strategy', 'AI/ML', 'Agile', 'Healthcare Domain'],
    responsibilities: [
      'Define product roadmap',
      'Work with AI engineers and data scientists',
      'Conduct market research',
      'Drive product launches'
    ]
  },
  { 
    title: 'Customer Success Specialist', 
    location: 'Remote', 
    type: 'Full-time', 
    desc: 'Help our customers thrive and grow with GoGetWell.AI.',
    skills: ['Customer Service', 'Healthcare', 'Communication', 'Problem Solving'],
    responsibilities: [
      'Onboard new customers',
      'Provide technical support',
      'Drive customer satisfaction',
      'Gather and analyze feedback'
    ]
  },
];

const values = [
  {
    title: 'Innovation in Healthcare',
    icon: '🔬',
    desc: 'Pushing boundaries to transform healthcare delivery'
  },
  {
    title: 'Remote-first, Global Team',
    icon: '🌍',
    desc: 'Work from anywhere, collaborate everywhere'
  },
  {
    title: 'Diversity & Inclusion',
    icon: '🤝',
    desc: 'Embracing different perspectives and ideas'
  },
  {
    title: 'Continuous Learning',
    icon: '📚',
    desc: 'Growing together through knowledge sharing'
  },
  {
    title: 'Making a Real Impact',
    icon: '💫',
    desc: 'Creating meaningful change in healthcare'
  },
];

const benefits = [
  '🏥 Comprehensive Health Coverage',
  '💰 Competitive Salary',
  '📅 Flexible PTO',
  '💻 Remote Work Setup',
  '📚 Learning Budget',
  '🎯 Stock Options',
  '🏋️‍♂️ Wellness Programs',
  '🤝 Mentorship'
];

function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    portfolio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Here you would typically send the form data to your backend
    setTimeout(() => {
      setShowForm(false);
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
        portfolio: ''
      });
    }, 3000);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
        {/* Hero Section */}
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-cyan-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Mission
            </motion.h1>
            <motion.p 
              className="text-xl text-cyan-700 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Help us transform healthcare with AI. We're building the future of patient care and provider efficiency.
            </motion.p>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold text-cyan-900 mb-2">{value.title}</h3>
                  <p className="text-cyan-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-cyan-900 mb-12 text-center">Benefits & Perks</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  className="bg-cyan-50 rounded-lg p-4 text-center shadow hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-cyan-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Roles Section */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-cyan-900 mb-12 text-center">Open Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-cyan-900 mb-2">{role.title}</h3>
                    <p className="text-cyan-600 text-sm mb-2">{role.location} • {role.type}</p>
                    <p className="text-cyan-700 mb-4">{role.desc}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-cyan-900 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map(skill => (
                          <span key={skill} className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setShowForm(true);
                    }}
                    className="mt-auto bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => !formSubmitted && setShowForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
                onClick={e => e.stopPropagation()}
              >
                {!formSubmitted ? (
                  <>
                    <button
                      onClick={() => setShowForm(false)}
                      className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <XMarkIcon className="h-6 w-6 text-gray-500" />
                    </button>

                    <h2 className="text-2xl font-bold text-cyan-900 mb-6">
                      Apply for {selectedRole?.title}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-cyan-700 font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="block text-cyan-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="block text-cyan-700 font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="block text-cyan-700 font-medium mb-2">Resume</label>
                        <input
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          onChange={e => setFormData({...formData, resume: e.target.files[0]})}
                        />
                      </div>

                      <div>
                        <label className="block text-cyan-700 font-medium mb-2">Cover Letter</label>
                        <textarea
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent h-32"
                          value={formData.coverLetter}
                          onChange={e => setFormData({...formData, coverLetter: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="block text-cyan-700 font-medium mb-2">Portfolio URL (Optional)</label>
                        <input
                          type="url"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          value={formData.portfolio}
                          onChange={e => setFormData({...formData, portfolio: e.target.value})}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                      >
                        Submit Application
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-5xl mb-4">✨</div>
                    <h3 className="text-2xl font-bold text-cyan-900 mb-4">Application Received!</h3>
                    <p className="text-cyan-700">
                      Thank you for applying to {selectedRole?.title}. We have received your application and will review it shortly. You will receive a confirmation email within 24-48 hours.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
}

export default Careers; 