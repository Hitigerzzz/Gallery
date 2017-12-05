/**
 * Created by Hitigerzzz on 2017/12/3.
 */
const express = require('express');
const sql = require('../DBHelper').sql;
const tables = require('../tables');

const { md5, responseClient } = require('../util');

const router = express.Router();

router.post('/signup', (req, res) => {
  const username = req.body.data.username;
  const password = req.body.data.password;
  const repassword = req.body.data.repassword;

  // TODO 检验参数
  try {
    if (password !== repassword) {
      throw new Error('password doesn\'t match');
    }
  } catch (e) {
    responseClient(res, 400, 2, e.message);
  }
  // 查看用户名是否已存在
  sql(`select * from ${tables.userTable} where username = ?`, [username], 'get').then((data) => {
    // 用户已存在
    if (data) {
      responseClient(res, 200, 1, 'username already exists');
    } else {
      // 用户不存在，进行注册
      sql(`insert into ${tables.user}`, [username, '', '', md5(password)], 'run').then((result) => {
        responseClient(res, 200, 0, 'signup successfully', result);
      });
    }
  }).catch((err) => {
    responseClient(res, 500, 3, '服务器异常', err);
  });
});

router.post('/login', (req, res) => {
  const username = req.body.data.username;
  const password = req.body.data.password;

  sql(`select * from ${tables.userTable} where username = ? and password = ?`, [username, md5(password)], 'get').then((data) => {
    if (data) {
      // 存在该用户
      responseClient(res, 200, 0, 'login successfully', data);
    } else {
      // 不存在该用户
      responseClient(res, 200, 1, 'login failure', data);
    }
  }).catch((err) => {
    responseClient(res, 500, 3, '服务器异常', err);
  });
});

module.exports = router;
