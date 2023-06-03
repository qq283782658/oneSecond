import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/views/Home'
import Bar from '@/components/Bar'

function App() {
  return (
    <Router>
      <Bar
        a={1}
        c={{
          width: 10,
          height: 100,
          background: 'red',
        }} >
        555
      </Bar>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
