import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalRoutes from './index';
import ComingSoon from '../pages/comingSoon/ComingSoon';

export default function Routing(props) {
  return (
    <Routes>
      {GlobalRoutes().map(route => (
        <Route
          {...props}
          path={route.path}
          exact
          element={route.element}
        />
      ))}
      {/* Catch-all route */}
      <Route
        path='*'
        element={<ComingSoon />}
      />
    </Routes>
  );
}
