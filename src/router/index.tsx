import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import LoginPage from '@/pages/loginPage/LoginPage';
import Home from '@/pages/home';
import ClinicPage from '@/pages/clinicPage/ClinicPage';
import MyPage from '@/pages/myPage/MyPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'clinicPage',
        element: <ClinicPage />
      },
      {
        path: 'myPage',
        element: <MyPage />
      }
    ]
  },
  {
    path: '/loginPage',
    element: <LoginPage />
  }
];

export default routes;
