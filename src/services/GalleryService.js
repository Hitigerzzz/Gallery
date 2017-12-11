/**
 * Created by Hitigerzzz on 2017/12/11.
 */
import request from '../utils/request';

const GALLERY_API = '/api/gallery/';

export function getUserAllGalleries(userId) {
  return request(`${GALLERY_API}getUserAllGalleries?userId=${userId}`);
}

export function getGalleryAllPictures(galleryId) {
  return request(`${GALLERY_API}getGalleryAllPictures?galleryId=${galleryId}`);
}
