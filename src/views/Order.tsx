import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Orders from '@/components/OrderOrders';
import Capitaltrend from '@/components/OrderCapitaltrend';
import Cancelset from '@/components/OrderCancelset';
import Feeset from '@/components/OrderFeeset';
// const Orders = React.lazy(() => import('@/components/OrderOrders'));
// const Capitaltrend = React.lazy(() => import('@/components/OrderCapitaltrend'));
// const Cancelset = React.lazy(() => import('@/components/OrderCancelset'));
// const Feeset = React.lazy(() => import('@/components/OrderFeeset'));

export default function Order() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Navigate to='agent/agents' />} />
        <Route path='orders' element={<Orders />} />
        <Route path='capitaltrend' element={<Capitaltrend />} />
        <Route path='cancelset' element={<Cancelset />} />
        <Route path='feeset' element={<Feeset />} />
      </Routes>
    </div>
  )
}
