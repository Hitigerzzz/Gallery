/**
 * Created by Hitigerzzz on 2017/12/5.
 */
import pathToRegexp from 'path-to-regexp';
import * as UserService from '../services/UserService';
import HttpMessage from '../constants/HttpMessage';

export default {

  namespace: 'user',

  state: {
    userInfo: '',
    loginModalVisible: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        const match = pathToRegexp('/:userId').exec(pathname);
        if (match) {
          dispatch({ type: 'initUserInfo', payload: query });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *login({ payload: user }, { call, put, select }) {
      const response = yield call(UserService.login, user);
      console.log('models/user/login', response.data);
      if (response.data.code === HttpMessage.result.SUCCESS) {
        // 关闭登录弹出框
        yield put({
          type: 'saveLoginModalVisible',
          payload: {
            loginModalVisible: false,
          },
        });
        // 保存用户信息
        yield put({
          type: 'saveUserLoginInfo',
          payload: {
            userInfo: response.data.data,
          },
        });
        const picture = yield select(state => state.picture);
        console.log('models/user/login/picture', picture);
        if (picture.isNeedRefresh) {
          yield put({
            type: 'picture/getUserAllPictures',
          });
        }
      } else {
        // 用户名或密码错误
      }
    },
    *logout({ payload }, { call, put, select }) {
      const user = yield select(state => state.user);
      if (user.userInfo) {
        const userId = user.userInfo.userId;
      }
    },
    *initUserInfo({ payload }, { call, put }) {
      const response = yield call(UserService.fetchUserLoginInfo);
      console.log('models/user/initUserInfo', response);
      if (response.data.data) {
        // 已登录，获得用户信息
        yield put({
          type: 'saveUserLoginInfo',
          payload: {
            userInfo: response.data.data,
          },
        });
      } else {
        // 未登录，弹出登录提示框
        yield put({
          type: 'saveLoginModalVisible',
          payload: {
            loginModalVisible: true,
          },
        });
      }
    },
  },

  reducers: {
    saveUserLoginInfo(state, { payload: { userInfo } }) {
      return { ...state, userInfo };
    },
    saveLoginModalVisible(state, { payload: { loginModalVisible } }) {
      return { ...state, loginModalVisible };
    },
  },

};
