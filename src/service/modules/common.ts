import request from '../request';

function getExpertAdvice(params: any) {
  console.log(params);
  return request.get('/health/expertAdvice/list', params);
}

export { getExpertAdvice };
