import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import './App.css';

function App() {
  // For GitHub Pages, we need to handle the basename
  const basename = process.env.NODE_ENV === 'production' ? '/jian-azul-portfolio' : '';

  return (
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
  );
}

export default App;