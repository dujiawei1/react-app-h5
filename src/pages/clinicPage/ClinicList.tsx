import React from 'react';
import { ClinicListBox, ClinicItemBox } from './style';
import { ClinicItem } from './types/clinicPage';
import { useAppSelector, shallowEqualApp } from '@/store';

const ClinicList: React.FC = () => {
  const { clinicList } = useAppSelector(
    (state) => ({
      clinicList: state.clinic.clinicList
    }),
    shallowEqualApp
  );

  return (
    <ClinicListBox>
      {clinicList.map((item: ClinicItem) => (
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
