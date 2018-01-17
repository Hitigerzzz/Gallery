/**
 * Created by Hitigerzzz on 2017/12/5.
 */
module.exports = exports = {
  status: {
    CLIENT_SUCCESS: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
  result: {
    SUCCESS: 0,
    FAILURE: 1,
    ERROR: 2,
  },
  message: {
    user: {
      USER_EXISTS: 'user already exists',
      USER_REGISTER_SUCCESS: 'register successfully',
      USER_LOGIN_FAILURE: 'incorrect username or password',
      USER_LOGIN_SUCCESS: 'login successfully',
      USER_LOGIN_AGAIN: 'please login again',
      USER_LOGOUT_SUCCESS: 'logout successfully',
      USER_FOLLOW_SUCCESS: 'follow successfully',
      USER_UNFOLLOW_SUCCESS: 'unfollow successfully',
    },
    picture: {
      PICTURE_UPLOAD_SUCCESS: 'upload picture successfully',
      PICTURE_UPLOAD_FAILURE: 'upload picture unsuccessfully',
      PICTURE_GET_ALL_SUCCESS: 'get all pictures successfully',
      PICTURE_GET_ALL_EMPTY: 'user doesn\'t have picture',
    },
    gallery: {
      GALLERY_CREATE_SUCCESS: 'create gallery successfully',
      GALLERY_GET_INFO_SUCCESS: 'get gallery information successfully',
      GALLERY_NOT_EXIST: 'gallery not exist',
      GALLERY_GET_ALL_SUCCESS: 'get all galleries successfully',
      GALLERY_GET_ALL_EMPTY: 'user doesn\'t have gallery',
      GALLERY_GET_ALL_PICTURE_SUCCESS: 'get all pictures successfully',
      GALLERY_GET_ALL_PICTURE_EMPTY: 'the gallery is empty',
    },
    server: {
      SERVER_ERROR: 'server error',
    },
  },
};

