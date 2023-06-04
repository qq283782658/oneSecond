import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Riders from '@/components/RiderRiders';
import Registers from '@/components/RiderRegisters';
import Cash from '@/components/RiderCash';
// const Riders = React.lazy(() => import('@/components/RiderRiders'));
// const Registers = React.lazy(() => import('@/components/RiderRegisters'));
// const Cash = React.lazy(() => import('@/components/RiderCash'));

export default function Rider() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Navigate to='riders' />} />
        <Route path='riders' element={<Riders />} />
        <Route path='registers' element={<Registers />} />
        <Route path='cash' element={<Cash />} />
      </Routes>
    </div>
  )
}
