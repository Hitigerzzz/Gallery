/**
 * Created by Hitigerzzz on 2017/12/3.
 */
const express = require('express');
const bodyParser = require('body-parser');
const dbHelper = require('./DBHelper');
const routes = require('./routes/index');

const app = express();

// bd 解析器
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 连接数据库
dbHelper.connect().then((result) => {
  console.log('here');
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
