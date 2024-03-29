/* eslint-disable no-param-reassign */
/**
 * Created by Hitigerzzz on 2017/12/3.
 */
const express = require('express');
const HttpMessage = require('../../constants/HttpMessage');
const userService = require('../service/userService');
const { responseClient } = require('../util');

const router = express.Router();

router.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  userService.register(username, password, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  userService.login(username, password, req, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

router.get('/logout', (req, res) => {
  req.session.userInfo = null;
  responseClient(res, HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS,
    HttpMessage.message.user.USER_LOGOUT_SUCCESS, null);
});

router.get('/userLoginInfo', (req, res) => {
  // console.log(req.session);
  const userInfo = req.session.userInfo;
  if (userInfo) {
    // console.log('user/userLoginInfo', '已登录');
    responseClient(res, HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.SUCCESS, '', userInfo);
  } else {
    // console.log('user/userLoginInfo', '未登录');
    responseClient(res, HttpMessage.status.CLIENT_SUCCESS, HttpMessage.result.FAILURE,
      HttpMessage.message.user.USER_LOGIN_AGAIN, null);
  }
});

router.get('/userInfo', (req, res) => {
  // console.log(req.session);
  const userId = req.query.userId;
  userService.getUserInfo(userId, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

router.post('/follow', (req, res) => {
  const followerId = req.body.followerId;
  const followingId = req.body.followingId;
  userService.follow(followerId, followingId, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

router.post('/unfollow', (req, res) => {
  const followerId = req.body.followerId;
  const followingId = req.body.followingId;
  userService.unfollow(followerId, followingId, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

router.get('/getFollowing', (req, res) => {
  const userId = req.query.userId;
  userService.getFollowing(userId, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});
module.exports = router;
