import request from '../request';

// 请求医馆列表
function getClinicList(params: any) {
  return request.get('/clinic/list', params).then((res) => res.rows);
}

// 登录接口
function loginRequest(params: any) {
  return request.post('/smsLogin', params);
}

export { getClinicList, loginRequest };
