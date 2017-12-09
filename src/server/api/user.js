/**
 * Created by Hitigerzzz on 2017/12/3.
 */
const express = require('express');
const sql = require('../DBHelper').sql;
const tables = require('../tables');
const HttpMessage = require('../../constants/HttpMessage');
const { md5, responseClient, MD5_SUFFIX } = require('../util');

const router = express.Router();

router.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // 查看用户名是否已存在
  sql(`select * from ${tables.userTable} where username = ?`, [username], 'get').then((data) => {
    if (data) { // 用户已存在
      responseClient(res, HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
        HttpMessage.message.user.USER_EXISTS);
    } else {    // 用户不存在，进行注册
      sql(`insert into ${tables.user}`, [username, '', '', md5(password + MD5_SUFFIX)], 'run').then((result) => {
        responseClient(res, HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
          HttpMessage.message.user.USER_REGISTER_SUCCESS, result);
      });
    }
  }).catch((err) => {
    responseClient(res, HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  sql(`select * from ${tables.userTable} where username = ? and password = ?`, [username, md5(password + MD5_SUFFIX)], 'get').then((data) => {
    if (data) { /* eslint-disable no-param-reassign */
      // 存在该用户
      req.session.userInfo = data;
      responseClient(res, HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
        HttpMessage.message.user.USER_LOGIN_SUCCESS, data);
    } else {
      // 不存在该用户
      responseClient(res, HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
        HttpMessage.message.user.USER_LOGIN_FAILURE);
    }
  }).catch((err) => {
    responseClient(res, HttpMessage.status.INTERNAL_SERVER_ERROR, HttpMessage.result.ERROR,
      HttpMessage.message.server.SERVER_ERROR, err);
  });
});

router.get('/userLoginInfo', (req, res) => {
  console.log(req.session);
  const userInfo = req.session.userInfo;
  if (userInfo) {
    console.log('/userLoginInfo', '已登录');
    responseClient(res, HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS, '', userInfo);
  } else {
    console.log('/userLoginInfo', '未登录');
    responseClient(res, HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
      HttpMessage.message.USER_LOGIN_AGAIN, null);
  }
});

module.exports = router;
