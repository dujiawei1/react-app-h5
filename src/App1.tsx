import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import routes from '@/router/index';
import { setToken, clearToken } from '@/store/modules/loginStore';

function App() {
  const token = useSelector((state: any) => state.login.token);
  const dispatch = useDispatch();
  const btnClick = () => {
    dispatch(setToken('123456'));
  };

  const clearClick = () => {
    dispatch(clearToken());
  };
  return (
    <div className="App">
      <div>{token}</div>
      <button onClick={btnClick}>点击</button>
      <button onClick={clearClick}>清除</button>
      {useRoutes(routes)}
    </div>
  );
}

export default App;
