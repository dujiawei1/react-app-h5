import styled from 'styled-components';

export const ClinicPageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: #333333;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  input {
    margin-right: 8px;
    padding-left: 12px;
    height: 34px;
    border-radius: 27px;
    background-color: #f6f6f6;
    color: #333333;

    &::placeholder {
      font-size: 14px;
      color: #999;
    }
  }
`;

export const NoticeBox = styled.div`
  display: flex;
  height: 28px;
  align-items: center;
  background: linear-gradient(#f0f6ef, #f0f6ef);
  border-radius: 15px;

  img {
    padding: 0 3px 0 12px;
    width: 16px;
    height: 16px;
  }
`;

export const ClinicListBox = styled.div`
  height: calc(100vh - 140px);
  overflow-y: auto;
  scrollbar-width: none;
`;

export const ClinicItemBox = styled.div`
  display: flex;
  margin-top: 12px;
  line-height: 22px;

  img {
    margin-right: 16px;
    width: 85px;
    height: 85px;
    border-radius: 6px;
  }

  .clinic-info {
    flex: 1;
    min-width: 0;
  }

  .clinic-name {
    font-size: 16px;
    color: #1a1a1a;
  }

  .clinic-text {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #666666;
  }
`;
