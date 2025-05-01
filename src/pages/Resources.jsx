import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon,
  PlayCircleIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
  ScaleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

function Resources() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'resources',
      title: 'Learning Resources',
      icon: <BookOpenIcon className="h-6 w-6" />,
      content: [
        { type: 'cards', items: [
          {
            icon: <BookOpenIcon className="h-8 w-8" />,
            title: 'Guides',
            description: 'Step-by-step guides to help you get the most from GoGetWell.AI.',
            link: '#'
          },
          {
            icon: <PlayCircleIcon className="h-8 w-8" />,
            title: 'Tutorials',
            description: 'Video tutorials for every feature and workflow.',
            link: '#'
          },
          {
            icon: <AcademicCapIcon className="h-8 w-8" />,
            title: 'Webinars',
            description: 'Live and recorded webinars with industry experts.',
            link: '#'
          },
          {
            icon: <DocumentTextIcon className="h-8 w-8" />,
            title: 'Case Studies',
            description: 'See how real facilitators are succeeding with GoGetWell.AI.',
            link: '#'
          }
        ]}
      ]
    },
    {
      id: 'editorial',
      title: 'Editorial Policy',
      icon: <PencilSquareIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'GoGetWell.ai is committed to delivering authoritative healthcare and medical travel information that empowers global users to make informed healthcare decisions.' },
        { type: 'heading', text: 'Editorial Excellence' },
        { type: 'text', text: 'Our platform serves as a bridge between patients and healthcare providers across 15+ countries, having assisted many patients worldwide.' },
        { type: 'heading', text: 'Content Standards' },
        { type: 'list', items: [
          'Content development follows a structured framework with rigorous verification.',
          'Writing maintains clarity, accessibility, and originality.',
          'All material undergoes expert medical review.',
          'Information is supported by verified statistics and credible references.'
        ]}
      ]
    },
    {
      id: 'categories',
      title: 'Content Categories',
      icon: <ClipboardDocumentCheckIcon className="h-6 w-6" />,
      content: [
        { type: 'list', items: [
          'Healthcare Provider Profiles: Comprehensive doctor credentials, hospital facilities, updated hours, and accessibility details.',
          'Medical Information: Procedure guides, cost analysis, hospital stay info, success rates, and patient testimonials.',
          'Educational Resources: In-depth articles, blogs, multimedia, and social media campaigns.'
        ]}
      ]
    },
    {
      id: 'development',
      title: 'Content Development',
      icon: <PencilSquareIcon className="h-6 w-6" />,
      content: [
        { type: 'list', items: [
          'Expert writers with healthcare knowledge.',
          'Medical professional review process.',
          'Clear structure with visual elements and internal linking.',
          'Regular updates for accuracy.'
        ]}
      ]
    },
    {
      id: 'focus',
      title: 'Focus Areas',
      icon: <ScaleIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'Neurosurgery, Cardiac procedures, Orthopedic treatments, and other specialized medical services.' }
      ]
    },
    {
      id: 'legal',
      title: 'Legal Considerations',
      icon: <ScaleIcon className="h-6 w-6" />,
      content: [
        { type: 'text', text: 'The platform provides informational content only, not medical advice. Users should consult healthcare professionals for medical decisions.' },
        { type: 'text', text: 'For content updates, corrections, or suggestions, please contact our team.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl font-bold text-cyan-700 mb-4 relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">
                Resources
              </span>
            </h1>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-200 rounded-full opacity-50"></div>
          </div>
          <p className="text-xl text-cyan-900 max-w-4xl mx-auto">
            Learn, grow, and succeed with our curated resources for healthcare facilitators.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-cyan-700 text-white shadow-lg'
                    : 'bg-white text-cyan-900 hover:bg-cyan-50'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    activeSection === section.id ? 'bg-white/20' : 'bg-cyan-100'
                  }`}>
                    {React.cloneElement(section.icon, {
                      className: `h-6 w-6 ${activeSection === section.id ? 'text-white' : 'text-cyan-600'}`
                    })}
                  </div>
                  <span className="font-semibold">{section.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            {activeSection ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {sections.find(s => s.id === activeSection)?.content.map((item, index) => (
                  <div key={index} className="mb-6">
                    {item.type === 'heading' ? (
                      <h3 className="text-lg font-semibold text-cyan-700 mb-2">{item.text}</h3>
                    ) : item.type === 'list' ? (
                      <ul className="list-disc ml-6 space-y-2">
                        {item.items.map((listItem, idx) => (
                          <li key={idx} className="text-cyan-900">{listItem}</li>
                        ))}
                      </ul>
                    ) : item.type === 'cards' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {item.items.map((card, idx) => (
                          <motion.a
                            key={idx}
                            href={card.link}
                            className="bg-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="flex items-center gap-4 mb-4">
                              <div className="bg-cyan-100 p-3 rounded-full">
                                {React.cloneElement(card.icon, {
                                  className: "h-6 w-6 text-cyan-600 group-hover:text-cyan-700"
                                })}
                              </div>
                              <h3 className="font-semibold text-cyan-700">{card.title}</h3>
                            </div>
                            <p className="text-cyan-600">{card.description}</p>
                          </motion.a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-cyan-900">{item.text}</p>
                    )}
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-12"
              >
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpenIcon className="h-8 w-8 text-cyan-700" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-700 mb-2">Select a Resource Category</h3>
                <p className="text-cyan-600">Choose a category from the menu to explore our resources.</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-cyan-700 mb-4">Need More Information?</h2>
          <p className="text-cyan-900 mb-6">Our team is here to help you find the resources you need.</p>
          <a 
            href="mailto:hello@gogetwell.ai" 
            className="inline-flex items-center gap-2 bg-cyan-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
          >
            <EnvelopeIcon className="h-5 w-5" />
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Resources; 