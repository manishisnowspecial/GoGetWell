import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlusIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { 
      icon: <UserPlusIcon className="h-8 w-8" />,
      label: 'New Leads',
      value: 24,
      change: '+12%',
      trend: 'up',
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      icon: <CalendarIcon className="h-8 w-8" />,
      label: 'Appointments',
      value: 12,
      change: '+5%',
      trend: 'up',
      color: 'bg-green-100 text-green-600'
    },
    { 
      icon: <CurrencyDollarIcon className="h-8 w-8" />,
      label: 'Revenue',
      value: '$2,400',
      change: '+8%',
      trend: 'up',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const recentLeads = [
    { name: 'John Smith', procedure: 'Cardiac Surgery', date: '2024-04-30', status: 'New' },
    { name: 'Sarah Johnson', procedure: 'Orthopedic Surgery', date: '2024-04-29', status: 'In Progress' },
    { name: 'Michael Brown', procedure: 'Neurosurgery', date: '2024-04-28', status: 'Completed' },
    { name: 'Emily Davis', procedure: 'Plastic Surgery', date: '2024-04-27', status: 'New' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-cyan-700">Dashboard</h1>
            <p className="text-cyan-600">Welcome back! Here's your business overview.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-cyan-400 absolute left-3 top-2.5" />
            </div>
            <button className="p-2 rounded-full hover:bg-cyan-100">
              <BellIcon className="h-6 w-6 text-cyan-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-cyan-100">
              <Cog6ToothIcon className="h-6 w-6 text-cyan-600" />
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowTrendingUpIcon className="h-4 w-4" />
                  ) : (
                    <ArrowTrendingDownIcon className="h-4 w-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-cyan-700">{stat.value}</div>
                <div className="text-cyan-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Leads */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-cyan-700">Recent Leads</h2>
              <a href="/leads" className="text-cyan-600 hover:text-cyan-700 text-sm font-medium">
                View All
              </a>
            </div>
            <div className="space-y-4">
              {recentLeads.map((lead, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-cyan-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                      <span className="text-cyan-600 font-medium">
                        {lead.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-cyan-700">{lead.name}</div>
                      <div className="text-sm text-cyan-600">{lead.procedure}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-cyan-600">{lead.date}</div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      lead.status === 'New' ? 'bg-blue-100 text-blue-600' :
                      lead.status === 'In Progress' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-cyan-700 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <motion.button
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-cyan-50 hover:bg-cyan-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <UserPlusIcon className="h-6 w-6 text-cyan-600" />
                <span className="text-cyan-700 font-medium">Add New Lead</span>
              </motion.button>
              <motion.button
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-cyan-50 hover:bg-cyan-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CalendarIcon className="h-6 w-6 text-cyan-600" />
                <span className="text-cyan-700 font-medium">Schedule Appointment</span>
              </motion.button>
              <motion.button
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-cyan-50 hover:bg-cyan-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ChartBarIcon className="h-6 w-6 text-cyan-600" />
                <span className="text-cyan-700 font-medium">Generate Report</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Dashboard; 