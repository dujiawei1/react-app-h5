import React, { useEffect } from 'react';
import { Button } from 'antd-mobile';
import { getExpertAdvice } from '@/service/modules/common';
import { TestContent } from './test1';

const TestFn: React.FC = () => {
  useEffect(() => {
    getExpertAdvice({ pageNum: 1, pageSize: 1000 }).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <TestContent>
        <div>111</div>
        <h2>2323</h2>
      </TestContent>
    </div>
  );
};

export default TestFn;
