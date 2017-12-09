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
    },
    server: {
      SERVER_ERROR: 'server error',
    },
  },
};

