import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaUser, FaMicrophone, FaStop, FaBrain, FaMagic } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { BsThreeDotsVertical, BsStars } from 'react-icons/bs';
import { fadeInUp, staggerContainer } from '../utils/animations';

function AiChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: "I'm your AI healthcare assistant. How can I help you today?",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900 p-4 md:p-8 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600/90 to-cyan-600/90 p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA2MGMtMTYuNTY5IDAtMzAtMTMuNDMxLTMwLTMwUzE5LjQzMSAwIDM2IDBzMzAgMTMuNDMxIDMwIDMwLTEzLjQzMSAzMC0zMCAzMHoiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center relative"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping"></div>
                  <FaBrain className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    AI Healthcare Assistant
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <BsStars className="w-5 h-5 text-yellow-400" />
                    </motion.span>
                  </h2>
                  <p className="text-cyan-100 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Available 24/7 to help you
                  </p>
                </div>
              </div>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors backdrop-blur-sm">
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[60vh] overflow-y-auto p-4 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-end space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center relative ${
                        message.sender === 'user' ? 'bg-gradient-to-br from-purple-500 to-cyan-500' : 'bg-gradient-to-br from-cyan-500 to-purple-500'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {message.sender === 'user' ? <FaUser className="w-5 h-5 text-white" /> : <FaRobot className="w-5 h-5 text-white" />}
                    </motion.div>
                    <motion.div
                      className={`rounded-2xl px-4 py-2 backdrop-blur-sm ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-purple-500/90 to-cyan-500/90 text-white'
                          : 'bg-white/20 text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">{message.timestamp}</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  className="flex justify-start mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-end space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                      <FaRobot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
                      <div className="flex space-x-2">
                        <motion.div
                          className="w-2 h-2 bg-cyan-400 rounded-full"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-purple-400 rounded-full"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-pink-400 rounded-full"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-white/20 p-4 bg-white/5 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-white/20"
                />
                <button
                  type="button"
                  onClick={toggleRecording}
                  className={`absolute right-12 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors ${
                    isRecording ? 'bg-red-500/90 text-white' : 'text-white/70 hover:bg-white/10'
                  }`}
                >
                  {isRecording ? <FaStop className="w-5 h-5" /> : <FaMicrophone className="w-5 h-5" />}
                </button>
              </div>
              <motion.button
                type="submit"
                disabled={!input.trim()}
                className="bg-gradient-to-r from-purple-500/90 to-cyan-500/90 text-white p-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA2MGMtMTYuNTY5IDAtMzAtMTMuNDMxLTMwLTMwUzE5LjQzMSAwIDM2IDBzMzAgMTMuNDMxIDMwIDMwLTEzLjQzMSAzMC0zMCAzMHoiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                <IoMdSend className="w-6 h-6 relative z-10" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AiChat; 