import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaBuilding, FaUser, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Demo = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    preferredDate: '',
    preferredTime: '',
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Reset form errors when step changes
    setFormErrors({});
  }, [step]);

  const validateForm = () => {
    const errors = {};
    if (step === 1) {
      if (!formData.companyName.trim()) errors.companyName = 'Company name is required';
      if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
      } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
        errors.phone = 'Phone number is invalid';
      }
    } else {
      if (!formData.preferredDate) errors.preferredDate = 'Date is required';
      if (!formData.preferredTime) errors.preferredTime = 'Time is required';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error('Please fill in all required fields correctly');
      return;
    }

    if (step === 1) {
      setStep(2);
    } else {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      toast.success('Demo scheduled successfully! We will contact you shortly.');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <ToastContainer position="top-right" autoClose={3000} />
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-900 mb-4">
            Schedule a Demo
          </h1>
          <p className="text-xl text-cyan-600">
            See how GoGetWell can transform your healthcare practice
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Form */}
            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center ${step >= 1 ? 'text-cyan-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-cyan-600 text-white' : 'bg-gray-200'}`}>
                      1
                    </div>
                    <span className="ml-2">Your Information</span>
                  </div>
                  <div className={`flex items-center ${step >= 2 ? 'text-cyan-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-cyan-600 text-white' : 'bg-gray-200'}`}>
                      2
                    </div>
                    <span className="ml-2">Schedule</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div
                    className="bg-cyan-600 h-1 rounded-full transition-all duration-500"
                    style={{ width: `${(step / 2) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-cyan-700 mb-1">
                        Company Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaBuilding className="text-cyan-400" />
                        </div>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-cyan-500 focus:border-cyan-500 ${
                            formErrors.companyName ? 'border-red-500' : 'border-cyan-200'
                          }`}
                          placeholder="Enter your company name"
                        />
                      </div>
                      {formErrors.companyName && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.companyName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-cyan-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-cyan-400" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-cyan-500 focus:border-cyan-500 ${
                            formErrors.fullName ? 'border-red-500' : 'border-cyan-200'
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {formErrors.fullName && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-cyan-700 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-cyan-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-cyan-500 focus:border-cyan-500 ${
                            formErrors.email ? 'border-red-500' : 'border-cyan-200'
                          }`}
                          placeholder="Enter your email"
                        />
                      </div>
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-cyan-700 mb-1">
                        Phone
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhone className="text-cyan-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-cyan-500 focus:border-cyan-500 ${
                            formErrors.phone ? 'border-red-500' : 'border-cyan-200'
                          }`}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-cyan-700 mb-1">
                        Timezone
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaGlobe className="text-cyan-400" />
                        </div>
                        <select
                          name="timezone"
                          value={formData.timezone}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-2 border border-cyan-200 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                        >
                          <option value={formData.timezone}>{formData.timezone}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-cyan-700 mb-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaCalendarAlt className="text-cyan-400" />
                        </div>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-cyan-500 focus:border-cyan-500 ${
                            formErrors.preferredDate ? 'border-red-500' : 'border-cyan-200'
                          }`}
                        />
                      </div>
                      {formErrors.preferredDate && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.preferredDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-cyan-700 mb-1">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaClock className="text-cyan-400" />
                        </div>
                        <input
                          type="time"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          required
                          className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-cyan-500 focus:border-cyan-500 ${
                            formErrors.preferredTime ? 'border-red-500' : 'border-cyan-200'
                          }`}
                        />
                      </div>
                      {formErrors.preferredTime && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.preferredTime}</p>
                      )}
                    </div>
                  </>
                )}

                <div className="flex justify-between pt-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-2 border border-cyan-200 rounded-lg text-cyan-700 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="ml-auto px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    {step === 1 ? 'Next' : 'Schedule Demo'}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column - Info */}
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3">30-minute personalized demo</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3">Live product walkthrough</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3">Q&A session with our experts</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3">Customized solution for your practice</span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Need help?</h3>
                <p className="text-cyan-100">
                  Contact our sales team at{' '}
                  <a href="mailto:hello@gogetwell.ai" className="underline hover:text-white">
                    hello@gogetwell.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Demo; 