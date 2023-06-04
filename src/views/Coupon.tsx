import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import Coupons from '@/components/CouponCoupons';
import Setting from '@/components/CouponSetting';

// const Coupons = React.lazy(() => import('@/components/CouponCoupons'));
// const Setting = React.lazy(() => import('@/components/CouponSetting'));

export default function Coupon() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="citys" />} />
        <Route path="coupons" element={<Coupons />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </div>
  );
}
