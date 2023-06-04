import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Agents from '@/components/AgentAgents';
import Admins from '@/components/AgentAdmins';
import Users from '@/components/AgentUsers';

export default function User() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Navigate to='agent/agents' />} />
        <Route path='agent/agents' element={<Agents />} />
        <Route path='admins' element={<Admins />} />
        <Route path='users' element={<Users />} />
      </Routes>
    </div>
  )
}
