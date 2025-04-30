import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth < 768) return;
    document.body.classList.add('custom-cursor-enabled');
    // Create cursor elements
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const outline = document.createElement('div');
    outline.className = 'cursor-outline';
    document.body.appendChild(dot);
    document.body.appendChild(outline);
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };
    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;
      outline.style.left = outlineX + 'px';
      outline.style.top = outlineY + 'px';
      requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener('mousemove', move);
    // Hover effect
    const addHover = (e) => {
      if (e.target.closest('a,button,input,textarea,select,label,[role="button"]')) {
        document.body.classList.add('cursor-hover');
      }
    };
    const removeHover = (e) => {
      document.body.classList.remove('cursor-hover');
    };
    window.addEventListener('mouseover', addHover);
    window.addEventListener('mouseout', removeHover);
    // Click effect
    const click = () => {
      document.body.classList.add('cursor-click');
      setTimeout(() => document.body.classList.remove('cursor-click'), 150);
    };
    window.addEventListener('mousedown', click);
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
        <Footer />
        <ChatPanel />
      </div>
    </Router>
  );
}

export default App;
