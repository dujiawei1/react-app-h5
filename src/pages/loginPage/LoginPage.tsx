import React, { memo, useState } from 'react';
import { Input, Button, Checkbox } from 'antd-mobile';
import { LoginPageBox, LoginBox, AgressBox } from './style';
const LoginPage: React.FC = () => {
  const cdnBaseUrl = 'https://cdn.kangzhisu.com/kzs/mp-weixin';
  const [checkValue, setCheckValue] = useState<boolean>(false);

  const getVerificationCode = () => {
    console.log('获取验证码');
  };

  const loginClick = () => {
    if (!checkValue) {
      return;
    }
  };
  return (
    <LoginPageBox>
      <LoginBox>
        {/* 手机号 */}
        <div style={{ marginBottom: '24px' }}>
          <div className="label-item">
            <img src={`${cdnBaseUrl}/images/loginPage/phoneIcon.png`} alt="" />
            <span>手机号</span>
          </div>
          <Input placeholder="请输入手机号" />
        </div>
        {/* 验证码 */}
        <div style={{ marginBottom: '40px' }}>
          <div className="label-item">
            <img src={`${cdnBaseUrl}/images/loginPage/codeIcon.png`} alt="" />
            <span>验证码</span>
          </div>
          <div className="input-box">
            <Input placeholder="请输入短信验证码" />
            <span className="code-right" onClick={getVerificationCode}>
              获取验证码
            </span>
          </div>
        </div>
      </LoginBox>
      {/* 确认按钮 */}
      <Button color="primary" fill="solid" shape="rounded" onClick={loginClick}>
        确认修改
      </Button>
      {/* 勾选用户协议 */}
      <AgressBox>
        <Checkbox onChange={(val) => setCheckValue(val)}></Checkbox>
        我已阅读并同意
        <span className="agree-text">《用户协议》</span>与
        <span className="agree-text">《隐私政策》</span>
      </AgressBox>
    </LoginPageBox>
  );
};

export default memo(LoginPage);
