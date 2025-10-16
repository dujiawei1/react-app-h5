import React, { useEffect, useState } from 'react';
import { Input } from 'antd-mobile';
import { SearchOutline } from 'antd-mobile-icons';
import { useDispatch, useSelector } from 'react-redux';
import { ClinicPageBox, SearchBox, NoticeBox } from './style/index';
import noticeImg from '@/assets/img/noticeImg.png';
import ClinicList from './ClinicList';
import { getClinicList } from '@/service/modules/common';
import { ClinicItem } from './types/clinicPage';
import { setClinicList } from '@/store/modules/clinicStore';

const ClinicPage: React.FC = () => {
  const [inputValue, setValue] = useState('');
  const [clinicList, setClinicList] = useState<ClinicItem[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getClinicList({
      pageNum: 1,
      pageSize: 10,
      longitude: null,
      latitude: null,
      orderByColumn: 'distance',
      isAsc: 'asc'
    }).then((res) => {
      setClinicList(res);
    });
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
        <ClinicList clinicList={clinicList}></ClinicList>
      </div>
    </ClinicPageBox>
  );
};

export default ClinicPage;
