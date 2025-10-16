import React from 'react';
import { List } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import { ClinicListBox, ClinicItemBox } from './style/index';
import { ClinicItem } from './types/clinicPage';

interface ClinicListProps {
  clinicList: ClinicItem[];
}

const ClinicList: React.FC<ClinicListProps> = ({ clinicList }) => {
  return (
    <ClinicListBox>
      {clinicList.map((item) => (
        <ClinicItemBox key={item.clinicId}>
          <img src={item.avatar} alt="" />
          <div className="clinic-info">
            <div className="clinic-name">{item.clinicName}</div>
            <div className="clinic-text">
              擅长治疗{item.expertiseAreasValue?.join(', ')}
            </div>
            <div className="clinic-text">{item.addr}</div>
          </div>
        </ClinicItemBox>
      ))}
    </ClinicListBox>
  );
};

export default ClinicList;
