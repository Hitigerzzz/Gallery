/**
 * Created by Hitigerzzz on 2017/12/3.
 */
const express = require('express');
const galleryService = require('../service/galleryService');

const router = express.Router();

const { responseClient } = require('../util');

router.get('/getUserAllGalleries', (req, res) => {
  const userId = req.query.userId;
  galleryService.getUserAllGalleries(userId, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

router.get('/getGalleryAllPictures', (req, res) => {
  const galleryId = req.query.galleryId;
  galleryService.getGalleryAllPictures(galleryId, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

router.post('/createGallery', (req, res) => {
});

router.get('/getGalleryInfo', (req, res) => {
  const galleryId = req.query.galleryId;
  galleryService.getGalleryInfo(galleryId, (httpCode, code, message, data) => {
    responseClient(res, httpCode, code, message, data);
  });
});

module.exports = router;
