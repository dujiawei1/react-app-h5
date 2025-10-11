import React from 'react';
import type { FC } from 'react';
import { TabBar } from 'antd-mobile';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AppOutline, UserOutline } from 'antd-mobile-icons';
import { AppWrapper } from './style';
import TestFn from '@/pages/test';

const Bottom: FC = () => {
  const tabs = [
    {
      key: '/home',
      title: '医馆',
      icon: <AppOutline />
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />
    }
  ];

  return (
    <TabBar>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

const Home: FC = () => {
  return (
    <AppWrapper>
      <div className="content">
        {/* <Routes>
          <Route path="/test" element={<TestFn />}></Route>
        </Routes>
        <Outlet></Outlet> */}
      </div>
      <div className="bottom">
        <Bottom />
      </div>
    </AppWrapper>
  );
};

export default Home;
