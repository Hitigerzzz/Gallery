/**
 * Created by Hitigerzzz on 2017/12/10.
 */
const sql = require('../DBHelper').sql;
const tables = require('../tables');
const HttpMessage = require('../../constants/HttpMessage');

exports.upload = (info, file) => {

};

exports.getUserAllPictures = (userId, callback) => {
  const command = `SELECT * FROM ${tables.PICTURE_TABLE} WHERE userId = ?`;
  sql(command, [userId], 'all').then((data) => {
    if (data && data.length > 0) {
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
        HttpMessage.message.picture.PICTURE_GET_ALL_SUCCESS, data);
    } else if (data && data.length === 0) {
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
        HttpMessage.message.picture.PICTURE_GET_ALL_EMPTY, data);
    }
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};
