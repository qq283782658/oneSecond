import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Cash from '@/components/ConfigCash';
import App from '@/components/ConfigApp';
import Share from '@/components/ConfigShare';
import Integral from '@/components/ConfigIntegral';
import Wxsubscribe from '@/components/ConfigWxsubscribe';
import User from '@/components/ConfigUser';
import Rider from '@/components/ConfigRider';
import AgreementRider from '@/components/ConfigAgreementRider';

// const Cash = React.lazy(() => import('@/components/ConfigCash'));
// const App = React.lazy(() => import('@/components/ConfigApp'));
// const Share = React.lazy(() => import('@/components/ConfigShare'));
// const Integral = React.lazy(() => import('@/components/ConfigIntegral'));
// const Wxsubscribe = React.lazy(() => import('@/components/ConfigWxsubscribe'));
// const User = React.lazy(() => import('@/components/ConfigUser'));
// const Rider = React.lazy(() => import('@/components/ConfigRider'));
// const AgreementRider = React.lazy(() => import('@/components/ConfigAgreementRider'));

export default function Config() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="app" />} />
        <Route path="cash" element={<Cash />} />
        <Route path="app" element={<App />} />
        <Route path="share" element={<Share />} />
        <Route path="integral" element={<Integral />} />
        <Route path="wxsubscribe" element={<Wxsubscribe />} />
        <Route path="user" element={<User />} />
        <Route path="rider" element={<Rider />} />
        <Route path="agreementRider" element={<AgreementRider />} />
      </Routes>
    </div>
  )
}
