/**
 * Created by Hitigerzzz on 2017/12/10.
 */
import request from '../utils/request';

const IMG_API = '/api/img/';

export function uploadPicture(picture) {
  return request(`${IMG_API}upload`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(picture),
  });
}

export function getUserAllPictures(userId) {
  return request(`${IMG_API}getUserAllPictures?userId=${userId}`, {
    credentials: 'include',
  });
}
