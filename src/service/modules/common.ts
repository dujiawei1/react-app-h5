import request from '../request';

function getExpertAdvice(params: any) {
  console.log(params);
  return request.get('/health/expertAdvice/list', params);
}

// 请求医馆列表
function getClinicList(params: any) {
  return request.get('/clinic/list', params).then((res) => res.rows);
}
export { getExpertAdvice, getClinicList };
