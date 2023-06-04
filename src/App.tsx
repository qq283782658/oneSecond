import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('@/views/Login'));
const Home = React.lazy(() => import('@/views/Home'));
// const Error = React.lazy(() => import('@/views/404'));
// const Screening = React.lazy(() => import('@/views/Screening'));
// const User = React.lazy(() => import('@/views/User'));

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
