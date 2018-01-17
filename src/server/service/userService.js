/**
 * Created by Hitigerzzz on 2017/12/11.
 */
const sql = require('../DBHelper').sql;
const tables = require('../tables');
const HttpMessage = require('../../constants/HttpMessage');
const {md5, MD5_SUFFIX} = require('../util');

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

exports.follow = (followerId, followingId, callback) => {
  const SQL_INSERT_FOLLOW = `INSERT INTO ${tables.INSERT_FOLLOW}`;
  sql(SQL_INSERT_FOLLOW, [followerId, followingId], 'run').then((result) => {
    const SQL_UPDATE_ING = `UPDATE ${tables.USER_TABLE} SET followingNum = followingNum + 1 WHERE userId = ?`;
    sql(SQL_UPDATE_ING, followerId, 'run').then((data) => {
      const SQL_UPDATE_ER = `UPDATE ${tables.USER_TABLE} SET followerNum = followerNum + 1 WHERE userId = ?`;
      sql(SQL_UPDATE_ER, followingId, 'run').then((data1) => {
        callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
          HttpMessage.message.user.USER_FOLLOW_SUCCESS, data1);
      });
    });
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};

exports.unfollow = (followerId, followingId, callback) => {
  const SQL_INSERT_FOLLOW = `DELETE FROM ${tables.FOLLOW_TABLE} WHERE followerId = ? AND followingId = ?`;
  sql(SQL_INSERT_FOLLOW, [followerId, followingId], 'run').then((result) => {
    const SQL_UPDATE_ING = `UPDATE ${tables.USER_TABLE} SET followingNum = followingNum - 1 WHERE userId = ?`;
    sql(SQL_UPDATE_ING, followerId, 'run').then((data) => {
      const SQL_UPDATE_ER = `UPDATE ${tables.USER_TABLE} SET followerNum = followerNum - 1 WHERE userId = ?`;
      sql(SQL_UPDATE_ER, followingId, 'run').then((data1) => {
        callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
          HttpMessage.message.user.USER_UNFOLLOW_SUCCESS, data1);
      });
    });
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};

exports.getFollowing = (userId, callback) => {
  const SQL_FIND_FOLLOWING = `SELECT * from ${tables.FOLLOW_TABLE}, ${tables.USER_TABLE} WHERE ${tables.FOLLOW_TABLE}.followerId = ?
  AND ${tables.FOLLOW_TABLE}.followingId = ${tables.USER_TABLE}.userId`;
  sql(SQL_FIND_FOLLOWING, [userId], 'all').then((result) => {
    callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
      HttpMessage.message.user.USER_FOLLOW_SUCCESS, result);
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
};

exports.getUserInfo = (userId, callback) => {
  const SQL = `SELECT * from ${tables.USER_TABLE} WHERE userId = ?`;
  sql(SQL, [userId], 'get').then((result) => {
    callback(HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS, '', result);
  }).catch((err) => {
    callback(HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
}
