import sendRequest from './send-request';

const BASE_URL = 'http://localhost:3001/api/jobs';

export function getJobs(userId) {
  return sendRequest(`${BASE_URL}/user/${userId}/index`, 'GET', null);
}

export function updateJob(userId) {
    return sendRequest(`${BASE_URL}/user/${userId}/update`);
}
export function Job(userId) {
    return sendRequest(`${BASE_URL}/user/${userId}/update`);
}

export function Delete(userId) {
    return sendRequest(`${BASE_URL}/user/${userId}/delete`);
}