/**
 * Created by Hitigerzzz on 2017/12/5.
 */
const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const IMG_ROOT_PATH = path.join(__dirname, '../static/img');
const FILE_FORMAT = 'binary';

/**
 * 获得图片
 */
router.get('/:type/:name', (req, res) => {
  const imgUrl = path.join(IMG_ROOT_PATH, req.params.type, req.params.name);
  const content = fs.readFileSync(imgUrl, FILE_FORMAT);
  res.write(content, FILE_FORMAT);
  res.end();
});

router.post('/upload', (req, res) => {
  console.log('img/upload');
  console.log(req.files);
  console.log(req.files.thumbnail.name);
  res.end();
});

module.exports = router;

