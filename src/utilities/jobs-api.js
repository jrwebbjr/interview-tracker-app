
import sendRequest from './send-request';


export function getJobs(userId) {
  return sendRequest(`http://localhost:3001/api/jobs/${userId}/index`, 'GET', null);
}

export function updateJob(userId) {
    return sendRequest(`http://localhost:3001/api/jobs/${userId}/update`, 'PUT');
}

export function showJob(userId, id) {
    return sendRequest(`http://localhost:3001/api/jobs/${userId}/show/${id}`, 'GET', null);
}

export function Destroy(userId) {
    return sendRequest(`http://localhost:3001/api/jobs/${userId}/delete`, 'DELETE');
}