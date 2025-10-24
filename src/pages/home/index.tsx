import React from 'react';
import type { FC } from 'react';
import { TabBar } from 'antd-mobile';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppOutline, UserOutline } from 'antd-mobile-icons';
import { AppWrapper } from './style';

const Bottom: FC = () => {
  const navigate = useNavigate();
  const tabs = [
    {
      key: '/clinicPage',
      title: '医馆',
      icon: <AppOutline />
    },
    {
      key: '/myPage',
      title: '我的',
      icon: <UserOutline />
    }
  ];

  const setRouteActive = (value: string) => {
    if (value === '/myPage') {
      if (!localStorage.getItem('token')) {
        navigate('/loginPage');
        return;
      }
    }
    navigate(value);
  };

  return (
    <TabBar onChange={(value) => setRouteActive(value)}>
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
        <Outlet></Outlet>
      </div>
      <div className="bottom">
        <Bottom />
      </div>
    </AppWrapper>
  );
};

export default Home;
