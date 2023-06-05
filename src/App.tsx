import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// const Error = React.lazy(() => import('@/views/404'));
// const Screening = React.lazy(() => import('@/views/Screening'));
// const User = React.lazy(() => import('@/views/User'));

const Login = React.lazy(() => import('@/views/Authority/Login'));
const Layout = React.lazy(() => import('@/views/Authority/Layout'));

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Layout />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
