/**
 * Created by Hitigerzzz on 2017/12/11.
 */
import request from '../utils/request';

const GALLERY_API = '/api/gallery/';

export function getUserAllGalleries(userId) {
  return request(`${GALLERY_API}getUserAllGalleries?userId=${userId}`, {
    credentials: 'include',
  });
}

export function getGalleryAllPictures(galleryId) {
  return request(`${GALLERY_API}getGalleryAllPictures?galleryId=${galleryId}`, {
    credentials: 'include',
  });
}

export function getGalleryInfo(galleryId) {
  return request(`${GALLERY_API}getGalleryInfo?galleryId=${galleryId}`, {
    credentials: 'include',
  });
}

export function createGallery(gallery) {
  return request(`${GALLERY_API}createGallery`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gallery),
  });
}
