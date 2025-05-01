import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiClock, FiTag } from 'react-icons/fi';

const categories = [
  'All',
  'Medical Tourism',
  'Healthcare Technology',
  'Patient Care',
  'Industry Insights',
  'Success Stories'
];

const posts = [
  {
    title: 'The Future of Medical Tourism: Trends to Watch in 2024',
    summary: 'Explore the latest developments in medical tourism, from AI-powered patient matching to sustainable healthcare travel practices.',
    author: 'Dr. A. Sharma',
    date: 'May 2024',
    readTime: '8 min read',
    category: 'Medical Tourism',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '#',
    featured: true
  },
  {
    title: '5 Ways to Boost Patient Conversion with GoGetWell.AI',
    summary: 'Practical tips for healthcare facilitators to increase patient engagement and grow their business using GoGetWell.AI tools.',
    author: 'Priya Mehta',
    date: 'April 2024',
    readTime: '6 min read',
    category: 'Healthcare Technology',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    title: 'Digital Transformation in Healthcare: A Success Story',
    summary: 'How one hospital network increased patient satisfaction by 40% through digital innovation and AI integration.',
    author: 'Team GoGetWell',
    date: 'March 2024',
    readTime: '7 min read',
    category: 'Success Stories',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    title: 'Patient-Centric Care: The New Standard in Medical Tourism',
    summary: 'Learn how putting patients first is revolutionizing the medical tourism industry and improving outcomes.',
    author: 'Dr. R. Patel',
    date: 'March 2024',
    readTime: '5 min read',
    category: 'Patient Care',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    title: 'AI in Healthcare: Breaking Down the Myths',
    summary: 'Separating fact from fiction about artificial intelligence in healthcare and its real-world applications.',
    author: 'Dr. S. Kumar',
    date: 'February 2024',
    readTime: '9 min read',
    category: 'Healthcare Technology',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    title: 'The Rise of Telemedicine in Medical Tourism',
    summary: 'How virtual consultations are transforming the pre and post-treatment experience for medical tourists.',
    author: 'Dr. M. Gupta',
    date: 'February 2024',
    readTime: '6 min read',
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    title: 'Sustainable Healthcare: The Green Revolution in Medical Tourism',
    summary: 'Exploring eco-friendly practices in healthcare facilities and their impact on patient satisfaction.',
    author: 'Dr. L. Singh',
    date: 'January 2024',
    readTime: '7 min read',
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
    link: '#'
  }
];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h1 className="text-6xl font-bold text-cyan-700 mb-4 relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">
                Blog
              </span>
            </h1>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-200 rounded-full opacity-50"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-6"
          >
            <p className="text-xl text-cyan-900 max-w-2xl mx-auto relative z-10">
              <span className="inline-block px-4 py-2 bg-cyan-50 rounded-lg shadow-sm">
                Insights, tips, and stories for healthcare facilitators and digital health innovators.
              </span>
            </p>
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-cyan-300 rounded-full opacity-30"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full opacity-30"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex justify-center gap-4"
          >
            <span className="text-cyan-600 font-medium">Latest Updates</span>
            <span className="text-cyan-400">•</span>
            <span className="text-cyan-600 font-medium">Industry News</span>
            <span className="text-cyan-400">•</span>
            <span className="text-cyan-600 font-medium">Expert Insights</span>
          </motion.div>
        </div>

        {/* Search and Categories */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 pl-10 rounded-full border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3 text-cyan-500" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === category
                      ? 'bg-cyan-700 text-white'
                      : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-cyan-700 text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-cyan-700 font-medium">{featuredPost.category}</span>
                    <span className="text-cyan-500">•</span>
                    <span className="text-cyan-500">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-cyan-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-cyan-800 mb-6">{featuredPost.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-700 font-medium">{featuredPost.author}</span>
                    <div className="flex items-center gap-2 text-cyan-500">
                      <FiClock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition group overflow-hidden"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4 bg-cyan-700 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-cyan-500 text-sm mb-3">
                  <FiClock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-900 mb-3 group-hover:text-cyan-700 transition">
                  {post.title}
                </h3>
                <p className="text-cyan-800 mb-4 line-clamp-2">{post.summary}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cyan-700 font-medium">{post.author}</span>
                  <span className="text-cyan-500">{post.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-cyan-900 mb-4">Stay Updated</h3>
          <p className="text-cyan-800 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and updates in healthcare technology and medical tourism.
          </p>
          <button
            type="button"
            onClick={() => window.location='mailto:hello@gogetwell.ai?subject=Subscribe%20for%20Updates'}
            className="inline-block bg-cyan-700 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-cyan-600 transition"
          >
            Subscribe for Updates
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog; 