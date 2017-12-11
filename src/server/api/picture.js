/**
 * Created by Hitigerzzz on 2017/12/5.
 */
const express = require('express');
const path = require('path');
const fs = require('fs');
const multipart = require('connect-multiparty');
const pictureService = require('../service/pictureService');
const { responseClient } = require('../util');

const router = express.Router();
const multipartMiddleware = multipart();
const IMG_ROOT_PATH = path.join(__dirname, '../static/img');
const FILE_FORMAT = 'binary';

/**
 * 获得单张图片
 */
router.get('/:type/:name', (req, res) => {
  const imgUrl = path.join(IMG_ROOT_PATH, req.params.type, req.params.name);
  const content = fs.readFileSync(imgUrl, FILE_FORMAT);
  res.write(content, FILE_FORMAT);
  res.end();
});

router.post('/preUpload', (req, res) => {
  res.end();
});
router.post('/upload', multipartMiddleware, (req, res) => {
  console.log('img/upload');
  console.log(req.body);
  console.log(req.body.file);
  const filePath = path.join(IMG_ROOT_PATH, 'picture', 'test.jpg');
  fs.writeFile(filePath, req.body.file, FILE_FORMAT, (err) => {
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      res.send('save successfully！');
    }
  });
});

router.get('/getUserAllPictures', (req, res) => {
  const userId = req.query.userId;
  pictureService.getUserAllPictures(userId, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

module.exports = router;

