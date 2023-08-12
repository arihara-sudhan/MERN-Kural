import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KuralDetails from './components/kuralDetails';
import BackgroundImage from './components/Image'; // Import the BackgroundImage component
import './App.css';

function App() {
  return (
    <BackgroundImage> {/* Wrap everything with BackgroundImage */}
      <div className='kural'>
        <h1>திருக்குறள்</h1>
        <Router>
          <Routes>
            <Route path="/" element={<KuralDetails kuralNo={1} />} />
            <Route path="/:no" element={<KuralDetails />} />
          </Routes>
        </Router>
      </div>
    </BackgroundImage>
  );
}

export default App;
