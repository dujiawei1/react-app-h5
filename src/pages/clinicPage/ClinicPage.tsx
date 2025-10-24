import React, { useEffect, useState, memo } from 'react';
import { Input } from 'antd-mobile';
import { SearchOutline } from 'antd-mobile-icons';
import { ClinicPageBox, SearchBox, NoticeBox } from './style';
import noticeImg from '@/assets/img/noticeImg.png';
import ClinicList from './ClinicList';
import { fetchClinicList } from '@/store/modules/clinicStore';
import { useAppDispatch } from '@/store';

const ClinicPage: React.FC = () => {
  const [inputValue, setValue] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchClinicList());
  }, []);

  return (
    <ClinicPageBox>
      {/* 搜索框 */}
      <SearchBox>
        <Input
          placeholder="请输入内容"
          value={inputValue}
          onChange={(val) => {
            setValue(val);
          }}
        />
        <SearchOutline fontSize={22} />
      </SearchBox>
      {/* 公告 */}
      <NoticeBox>
        <img src={noticeImg} alt="" />
        <div>
          公告：所有医馆均通过
          <span style={{ color: '#10a8ed' }}>医疗资质审核</span>
        </div>
      </NoticeBox>
      {/* 列表 */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <ClinicList></ClinicList>
      </div>
    </ClinicPageBox>
  );
};

export default memo(ClinicPage);
