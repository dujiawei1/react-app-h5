import styled from 'styled-components';

export const LoginPageBox = styled.div`
  display: flex;
  margin: 0 32px;
  padding-top: 128px;
  height: 100vh;
  flex-direction: column;
  color: #333333;
  box-sizing: border-box;

  button {
    height: 42px;
    background-color: #58a947;
    border: 1px solid #58a947;

    &::before {
      border: 1px solid #58a947;
    }
  }
`;

export const LoginBox = styled.div`
  .label-item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 500;
    color: #1a1a1a;

    img {
      margin-right: 8px;
      width: 24px;
      height: 24px;
    }
  }

  input {
    padding-left: 16px;
    width: 100%;
    height: 42px;
    background-color: #f4f4f4;
    border-radius: 45px;
    font-size: 14px;
    color: #333333;

    &::placeholder {
      color: #b3b3b3;
    }
  }

  .input-box {
    position: relative;
    display: flex;
    align-items: center;
  }

  .code-right {
    position: absolute;
    right: 30px;
    font-size: 14px;
    color: #58a947;
  }
`;

export const AgressBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
  font-size: 14px;
  color: #333333;

  .adm-checkbox-icon {
    margin-right: 12px;
    width: 12px;
    height: 12px;
    background-color: #e5e5e5;
  }

  .adm-checkbox-checked .adm-checkbox-icon {
    background-color: #58a947;
    border: 1px solid #58a947;
  }

  .agree-text {
    color: #58a947;
  }
`;
