/**
 * Created by Hitigerzzz on 2017/12/11.
 */
const sql = require('../DBHelper').sql;
const tables = require('../tables');
const HttpMessage = require('../../constants/HttpMessage');
const { md5, MD5_SUFFIX } = require('../util');

exports.login = (username, password, req, callback) => {
  sql(`select * from ${tables.USER_TABLE} where username = ? and password = ?`, [username, md5(password + MD5_SUFFIX)], 'get').then((data) => {
    if (data) { /* eslint-disable no-param-reassign */
      // 存在该用户
      delete data.password;
      req.session.userInfo = data;
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
        HttpMessage.message.user.USER_LOGIN_SUCCESS, data);
    } else {
      // 不存在该用户
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
        HttpMessage.message.user.USER_LOGIN_FAILURE);
    }
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};

exports.register = (username, password, callback) => {
  const commandSearch = `select * from ${tables.USER_TABLE} where username = ?`;
  // 查看用户名是否已存在
  sql(commandSearch, [username], 'get').then((data) => {
    if (data) { // 用户已存在
      callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
        HttpMessage.message.user.USER_EXISTS);
    } else {    // 用户不存在，进行注册
      sql(`insert into ${tables.INSERT_USER}`, [username, '', '', md5(password + MD5_SUFFIX)], 'run').then((result) => {
        callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
          HttpMessage.message.user.USER_REGISTER_SUCCESS, result);
      });
    }
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};

