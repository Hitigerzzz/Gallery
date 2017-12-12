/**
 * Created by Hitigerzzz on 2017/12/10.
 */
const fs = require('fs');
const path = require('path');
const sql = require('../DBHelper').sql;
const tables = require('../tables');
const HttpMessage = require('../../constants/HttpMessage');

const PICTURE_ROOT_PATH = path.join(__dirname, '../static/img/picture');
const PICTURE_RELATIVE_PATH = 'img/picture/';

exports.preUpload = (file, callback) => {
  const fileName = Date.now().toString() + file.originalname;
  const filePath = path.join(PICTURE_ROOT_PATH, fileName);
  fs.rename(file.path, filePath, (err) => {
    if (err) {
      callback();
    } else {
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
        HttpMessage.message.picture.PICTURE_UPLOAD_SUCCESS,
        { pictureUrl: PICTURE_RELATIVE_PATH + fileName });
    }
  });
};

exports.upload = (picture, callback) => {
  const SQL_INSERT_PICTURE = `INSERT INTO ${tables.INSERT_PICTURE}`;
  const params = [picture.title, picture.category, picture.description,
    picture.pictureUrl, picture.userId, picture.postTime];
  sql(SQL_INSERT_PICTURE, params, 'run').then((result) => {
    callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
        HttpMessage.message.picture.PICTURE_UPLOAD_SUCCESS, result);
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};

exports.getUserAllPictures = (userId, callback) => {
  const command = `SELECT * FROM ${tables.PICTURE_TABLE} WHERE userId = ?`;
  sql(command, [userId], 'all').then((data) => {
    if (data && data.length > 0) {
      const promises = [];
      const length = data.length;
      const SQL_FIND_USER = `SELECT * FROM ${tables.USER_TABLE} WHERE userId = ?`;
      for (let i = 0; i < length; i += 1) { /* eslint-disable prefer-const */
        const picture = data[i];
        let promise = sql(SQL_FIND_USER, [picture.userId], 'get').then((user) => {
          picture.username = user.username;
          picture.avatar = user.avatar;
          return picture;
        });
        promises.push(promise);
      }
      Promise.all(promises).then((pictures) => {
        callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
          HttpMessage.message.picture.PICTURE_GET_ALL_SUCCESS, pictures);
      });
    } else if (data && data.length === 0) {
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
        HttpMessage.message.picture.PICTURE_GET_ALL_EMPTY, data);
    }
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};
