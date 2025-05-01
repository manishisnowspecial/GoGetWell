import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatPanel from './components/ChatPanel';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Integrations from './pages/Integrations';
import Resources from './pages/Resources';
import Support from './pages/Support';
import Security from './pages/Security';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Demo from './pages/Demo';
import Login from './pages/Login';
import FeaturesPage from './pages/FeaturesPage';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth < 768) return;

    const dot = document.createElement('div');
    const outline = document.createElement('div');
    
    dot.className = 'cursor-dot';
    outline.className = 'cursor-outline';
    
    document.body.appendChild(dot);
    document.body.appendChild(outline);
    document.body.classList.add('custom-cursor-enabled');

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      
      outline.style.left = `${x}px`;
      outline.style.top = `${y}px`;
    };

    const addHover = () => {
      document.body.classList.add('cursor-hover');
    };

    const removeHover = () => {
      document.body.classList.remove('cursor-hover');
    };

    const click = () => {
      document.body.classList.add('cursor-click');
      setTimeout(() => {
        document.body.classList.remove('cursor-click');
      }, 200);
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', addHover);
    document.addEventListener('mouseout', removeHover);
    document.addEventListener('mousedown', click);

    // Cleanup
    return () => {
      document.body.classList.remove('custom-cursor-enabled', 'cursor-hover', 'cursor-click');
      dot.remove();
      outline.remove();
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', addHover);
      window.removeEventListener('mouseout', removeHover);
      window.removeEventListener('mousedown', click);
    };
  }, []);

  return (
    <Router>
      <div className="bg-gradient-to-br from-green-50 via-blue-50 to-white min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/features/:id" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/support" element={<Support />} />
            <Route path="/security" element={<Security />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <ChatPanel />
      </div>
    </Router>
  );
}

export default App;
