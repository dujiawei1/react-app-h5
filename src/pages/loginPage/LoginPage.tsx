import React, { memo } from 'react';

interface Props {
  name: string;
  age: number;
  address?: string;
  children?: React.ReactNode;
}
const LoginPage: React.FC<Props> = (props) => {
  return (
    <div>
      <h3>Login Page</h3>
      <div>名字：{props.name}</div>
      {props.children}
    </div>
  );
};

export default LoginPage;
