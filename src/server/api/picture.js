/**
 * Created by Hitigerzzz on 2017/12/5.
 */
const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const pictureService = require('../service/pictureService');
const { responseClient } = require('../util');

const router = express.Router();
const IMG_ROOT_PATH = path.join(__dirname, '../static/img');
const FILE_FORMAT = 'binary';
const upload = multer({ dest: path.join(IMG_ROOT_PATH, 'picture') });

/**
 * 获得单张图片
 */
router.get('/:type/:name', (req, res) => {
  const imgUrl = path.join(IMG_ROOT_PATH, req.params.type, req.params.name);
  const content = fs.readFileSync(imgUrl, FILE_FORMAT);
  res.write(content, FILE_FORMAT);
  res.end();
});

router.post('/preUpload', upload.array('file'), (req, res) => {
  pictureService.preUpload(req.files[0], (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});
router.post('/upload', (req, res) => {
  pictureService.upload(req.body, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

router.get('/getUserAllPictures', (req, res) => {
  const userId = req.query.userId;
  pictureService.getUserAllPictures(userId, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

module.exports = router;

