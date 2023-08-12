import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KuralDetails from './components/kuralDetails';
import './App.css';

function App() {
  return (
    <div className='kural'>
      <h1>திருக்குறள்</h1>
      <div className='kural-sub1'>
        <Router>
            <Routes>
              <Route path="/" element={<KuralDetails kuralNo={1} />} />
              <Route path="/:no" element={<KuralDetails />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
