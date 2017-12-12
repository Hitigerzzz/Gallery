/**
 * Created by Hitigerzzz on 2017/12/4.
 */
module.exports = {
  USER_TABLE: 'user',
  INSERT_USER: 'user (username, address, description, password) values(?, ?, ?, ?)',
  PICTURE_TABLE: 'picture',
  INSERT_PICTURE: 'picture (title, category, description, pictureUrl, userId, posttime) values(?, ?, ?, ?, ?, ?)',
  GALLERY_TABLE: 'gallery',
  INSERT_GALLERY: 'gallery (title, description, userId) values(?, ?, ?)',
  GALLERY_PICTURES_TABLE: 'gallery_pictures',
  COMMENT_TABLE: 'comment',
};
