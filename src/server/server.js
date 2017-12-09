/**
 * Created by Hitigerzzz on 2017/12/3.
 */
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dbHelper = require('./DBHelper');
const routes = require('./api/index');

const app = express();

// body 解析器
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// session
app.use(cookieParser());
app.use(session({
  secret: 'express_react_cookie',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 1000 * 30 }, // 过期时间 30 min
}));
// 连接数据库
dbHelper.connect().then((result) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
});

// 路由
routes(app);

app.get('/', (req, res) => {
  res.send('hello, express!!!!555');
});

app.listen(3000);
