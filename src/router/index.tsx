import React from 'react';
import { RouteObject } from 'react-router-dom';
import TestFn from '@/pages/test';
import LoginPage from '@/pages/loginPage/LoginPage';

const routes: RouteObject[] = [
  {
    path: '/test',
    element: <TestFn />
  },
  {
    // path: '/login',
    // element: <LoginPage name="Jany" age={12} />
  }
];

export default routes;
