import React, { useEffect, memo } from 'react';

function MyPage() {
  useEffect(() => {
    console.log('首次渲染');
  }, []);
  return <div className="">我的</div>;
}

export default memo(MyPage);
