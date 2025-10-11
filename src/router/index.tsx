import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import LoginPage from '@/pages/loginPage/LoginPage';
import Home from '@/pages/home/index';

const TestFn = lazy(() => import('@/pages/test'));
const routes: RouteObject[] = [
  {
    path: '/test',
    element: <TestFn />
  },
  {
    path: '/home',
    element: <Home />
  }
];

export default routes;
