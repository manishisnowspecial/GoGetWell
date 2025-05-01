import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { CheckCircleIcon, UserIcon, BuildingOfficeIcon, DocumentCheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

function GetStarted() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    practiceName: '',
    practiceType: '',
    numberOfProviders: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const stepIcons = {
    1: UserIcon,
    2: BuildingOfficeIcon,
    3: DocumentCheckIcon,
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-[20%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[20%] w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Progress Steps */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((s) => {
                const Icon = stepIcons[s];
                return (
                  <React.Fragment key={s}>
                    <div className="flex flex-col items-center">
                      <motion.div
                        className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
                          s <= step ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'bg-gray-200'
                        } shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        animate={s === step ? {
                          scale: [1, 1.05, 1],
                          transition: { duration: 1, repeat: Infinity }
                        } : {}}
                      >
                        {s < step ? (
                          <CheckCircleIcon className="w-8 h-8 text-white" />
                        ) : (
                          <Icon className={`w-8 h-8 ${s === step ? 'text-white' : 'text-gray-500'}`} />
                        )}
                        <div className="absolute -bottom-8 text-sm font-medium whitespace-nowrap">
                          {s === 1 ? 'Account Details' : s === 2 ? 'Practice Info' : 'Finish Setup'}
                        </div>
                      </motion.div>
                    </div>
                    {s < 3 && (
                      <div className="flex-1 h-1 mx-4 relative">
                        <div className="absolute inset-0 bg-gray-200 rounded"></div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded"
                          initial={{ width: "0%" }}
                          animate={{ width: s < step ? "100%" : "0%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>

          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8"
          >
            <motion.h2 
              className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text mb-6 text-center"
              key={step}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {step === 1 ? 'Create Your Account' : step === 2 ? 'Tell Us About Your Practice' : 'Complete Your Setup'}
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="group">
                    <label className="block text-sm font-medium text-cyan-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-cyan-200 focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all hover:bg-white"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-cyan-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-cyan-200 focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all hover:bg-white"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-cyan-700 mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-cyan-200 focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all hover:bg-white"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="group">
                    <label className="block text-sm font-medium text-cyan-700 mb-1">Practice Name</label>
                    <input
                      type="text"
                      name="practiceName"
                      value={formData.practiceName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-cyan-200 focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all hover:bg-white"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-cyan-700 mb-1">Practice Type</label>
                    <select
                      name="practiceType"
                      value={formData.practiceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-cyan-200 focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all hover:bg-white"
                      required
                    >
                      <option value="">Select Practice Type</option>
                      <option value="primary">Primary Care</option>
                      <option value="specialty">Specialty Practice</option>
                      <option value="hospital">Hospital</option>
                      <option value="clinic">Clinic</option>
                      <option value="dental">Dental Practice</option>
                      <option value="pediatric">Pediatric Care</option>
                      <option value="mental">Mental Health</option>
                      <option value="physio">Physiotherapy</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-cyan-700 mb-1">Number of Providers</label>
                    <input
                      type="number"
                      name="numberOfProviders"
                      value={formData.numberOfProviders}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-cyan-200 focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all hover:bg-white"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircleIcon className="w-12 h-12 text-white" />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-semibold text-cyan-900 mb-2"
                  >
                    Setup Complete!
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-cyan-700 mb-6"
                  >
                    Your account has been created successfully. You can now access your dashboard and start using GoGetWell.
                  </motion.p>
                </motion.div>
              )}

              <motion.div 
                className="flex justify-between pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {step > 1 && (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 text-cyan-700 font-semibold border border-cyan-200 rounded-lg hover:bg-cyan-50 transition-all group flex items-center"
                    whileHover={{ x: -5 }}
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 transform rotate-180 transition-transform group-hover:scale-110" />
                    Back
                  </motion.button>
                )}
                {step < 3 ? (
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg hover:shadow-cyan-200 group flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Next
                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    className="ml-auto px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg hover:shadow-cyan-200 group flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Go to Dashboard
                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
                  </motion.button>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

export default GetStarted; 