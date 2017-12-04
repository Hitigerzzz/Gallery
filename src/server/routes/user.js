/**
 * Created by Hitigerzzz on 2017/12/3.
 */
const express = require('express');
const sql = require('../DBHelper').sql;
const tables = require('../tables');

const { md5, responseClient } = require('../util');

const router = express.Router();

router.post('/signup', (req, res, next) => {
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
  // 待写入数据库的用户信息
  sql(`insert into ${tables.user}`, [username, '', '', md5(password)], 'run').then((data) => {
    responseClient(res, 200, 0, 'signup successfully', data);
    next();
  }).catch((err) => {
    responseClient(res, 500, 3, '服务器异常', err);
    next();
  });
});

router.post('/login', (req, res, next) => {
  const username = req.body.data.username;
  const password = req.body.data.password;

  sql(`select * from ${tables.userTable} where username = ? and password = ?`, [username, md5(password)], 'each').then((data) => {
    responseClient(res, 200, 0, 'login successfully', data);
    next();
  }).catch((err) => {
    responseClient(res, 500, 3, '服务器异常', err);
    next();
  });
});

module.exports = router;
