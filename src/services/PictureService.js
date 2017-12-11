/**
 * Created by Hitigerzzz on 2017/12/10.
 */
import request from '../utils/request';

const IMG_API = '/api/img/';

export function uploadPicture(picture) {
  console.log('PictureService/uploadPicture here');
  const formData = new window.FormData();
  formData.append('title', picture.title);
  formData.append('category', picture.category);
  formData.append('description', picture.description);
  formData.append('file', picture.file);
  formData.append('postTime', picture.postTime);
  formData.append('userId', picture.userId);
  return request(`${IMG_API}upload`, {
    method: 'POST',
    contentType: 'multipart/form-data',
    credentials: 'include',
    body: formData,
  });
}

export function getUserAllPictures(userId) {
  return request(`${IMG_API}getUserAllPictures?userId=${userId}`, {
    credentials: 'include',
  });
}
