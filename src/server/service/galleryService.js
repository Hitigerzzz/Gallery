/**
 * Created by Hitigerzzz on 2017/12/11.
 */
const sql = require('../DBHelper').sql;
const tables = require('../tables');
const HttpMessage = require('../../constants/HttpMessage');

exports.getUserAllGalleries = (userId, callback) => {
  const command = `SELECT * FROM ${tables.GALLERY_TABLE} WHERE userId = ?`;
  sql(command, [userId], 'all').then((data) => {
    if (data && data.length > 0) {
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
        HttpMessage.message.gallery.GALLERY_GET_ALL_SUCCESS, data);
    } else if (data && data.length === 0) {
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
        HttpMessage.message.gallery.GALLERY_GET_ALL_EMPTY, data);
    }
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};

exports.getGalleryAllPictures = (galleryId, callback) => {
  const command = `SELECT * FROM ${tables.GALLERY_PICTURES_TABLE} WHERE galleryId = ?`;
  sql(command, [galleryId], 'all').then((data) => {
    if (data && data.length > 0) {
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
        HttpMessage.message.gallery.GALLERY_GET_ALL_PICTURE_SUCCESS, data);
    } else if (data && data.length === 0) {
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
        HttpMessage.message.gallery.GALLERY_GET_ALL_PICTURE_EMPTY, data);
    }
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
}
