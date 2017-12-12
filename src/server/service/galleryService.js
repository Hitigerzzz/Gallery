/* eslint-disable no-param-reassign */
/**
 * Created by Hitigerzzz on 2017/12/11.
 */
const sql = require('../DBHelper').sql;
const tables = require('../tables');
const HttpMessage = require('../../constants/HttpMessage');

exports.getUserAllGalleries = (userId, callback) => {
  const command = `SELECT galleryId, title, ${tables.GALLERY_TABLE}.description, ${tables.GALLERY_TABLE}.userId,
  username, avatar
  FROM ${tables.GALLERY_TABLE}, ${tables.USER_TABLE}
  WHERE ${tables.GALLERY_TABLE}.userId = ? AND ${tables.GALLERY_TABLE}.userId = ${tables.USER_TABLE}.userId`;
  sql(command, [userId], 'all').then((data) => {
    if (data && data.length > 0) {
      const promises = [];
      const length = data.length;
      const SQL_FIND_PICTURES = `SELECT * FROM ${tables.GALLERY_PICTURES_TABLE}, ${tables.PICTURE_TABLE} WHERE galleryId = ? and
      ${tables.GALLERY_PICTURES_TABLE}.pictureId = ${tables.PICTURE_TABLE}.pictureId`;
      for (let i = 0; i < length; i += 1) { /* eslint-disable prefer-const */
        const gallery = data[i];
        let promise = sql(SQL_FIND_PICTURES, [gallery.galleryId], 'all').then((pictures) => {
          gallery.pictures = pictures;
          return gallery;
        });
        promises.push(promise);
      }
      Promise.all(promises).then((galleries) => {
        callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
          HttpMessage.message.gallery.GALLERY_GET_ALL_SUCCESS, galleries);
      });
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
  const command = `SELECT * FROM ${tables.GALLERY_PICTURES_TABLE} WHERE galleryId = ? `;
  sql(command, [galleryId], 'all').then((data) => {
    if (data && data.length > 0) {
      // 根据 pictureId 找 picture 完整信息
      const promises = [];
      const length = data.length;
      const SQL_FIND_PICTURES = `SELECT * FROM ${tables.PICTURE_TABLE} WHERE pictureId = ?`;
      const SQL_FIND_USER = `SELECT * FROM ${tables.USER_TABLE} WHERE userId = ?`;
      for (let i = 0; i < length; i += 1) { /* eslint-disable prefer-const */
        let picture = data[i];
        let promise = sql(SQL_FIND_PICTURES, [picture.pictureId], 'all').then((pictureDetail) => {
          return sql(SQL_FIND_USER, [pictureDetail[0].userId], 'get').then((user) => {
            let item = pictureDetail[0];
            item.username = user.username;
            item.avatar = user.avatar;
            item.galleryId = galleryId;
            return item;
          });
        });
        promises.push(promise);
      }
      Promise.all(promises).then((gallery) => {
        callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
          HttpMessage.message.gallery.GALLERY_GET_ALL_PICTURE_SUCCESS, gallery);
      });
    } else if (data && data.length === 0) {
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
        HttpMessage.message.gallery.GALLERY_GET_ALL_PICTURE_EMPTY, data);
    }
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};

exports.getGalleryInfo = (galleryId, callback) => {
  const command = `SELECT * FROM ${tables.GALLERY_TABLE} WHERE galleryId = ?`;
  sql(command, [galleryId], 'get').then((data) => {
    if (data) {
      // 存在该图库
      const SQL_FIND_USER = `SELECT * FROM ${tables.USER_TABLE} WHERE userId = ?`;
      sql(SQL_FIND_USER, [data.userId], 'get').then((user) => {
        data.username = user.username;
        data.avatar = user.avatar;
        callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
          HttpMessage.message.gallery.GALLERY_GET_INFO_SUCCESS, data);
      });
    } else {
      // 不存在该图库
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
        HttpMessage.message.gallery.GALLERY_NOT_EXIST);
    }
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};

exports.createGallery = (title, description, userId, callback) => {
  const SQL_INSERT_GALLERY = `INSERT INTO ${tables.INSERT_GALLERY}`;
  const params = [title, description, userId];
  sql(SQL_INSERT_GALLERY, params, 'run').then((result) => {
    callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
      HttpMessage.message.gallery.GALLERY_CREATE_SUCCESS, result);
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};
