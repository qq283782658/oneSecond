import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Citys from '@/components/CityCitys';
import Valuations from '@/components/CityValuation';
import Weight from '@/components/CityWeight';
import Tag from '@/components/CityTag';
// const Citys = React.lazy(() => import('@/components/CityCitys'));
// const Valuations = React.lazy(() => import('@/components/CityValuation'));
// const Weight = React.lazy(() => import('@/components/CityWeight'));
// const Tag = React.lazy(() => import('@/components/CityTag'));

export default function City() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Navigate to='citys' />} />
        <Route path='citys' element={<Citys />} />
        <Route path='valuation/valuations' element={<Valuations />} />
        <Route path='weight/weight' element={<Weight />} />
        <Route path='/tag/tag' element={<Tag />} />
      </Routes>
    </div>
  )
}
