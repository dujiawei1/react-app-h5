import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router/index';
import LoginPage from '@/pages/loginPage/LoginPage';

console.log(routes);

function App() {
  return (
    <div className="App">
      <LoginPage name="名字" age={12}>
        <div>123</div>
      </LoginPage>
      {useRoutes(routes)}
    </div>
  );
}

export default App;
