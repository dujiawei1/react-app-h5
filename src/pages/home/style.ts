import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  background: #fff;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;

  .content {
    flex: 1;
  }

  .bottom {
    border-top: 1px solid #eee;
  }
`;
