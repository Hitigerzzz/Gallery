/**
 * Created by Hitigerzzz on 2017/12/5.
 */
import pathToRegexp from 'path-to-regexp';
import * as UserService from '../services/UserService';
import * as PictureService from '../services/PictureService';
import * as GalleryService from '../services/GalleryService';

import HttpMessage from '../constants/HttpMessage';

export default {

  namespace: 'user',

  state: {
    userInfo: '',
    loginModalVisible: false,
    pictures: [],
    isNeedRefresh: false, // 是否需要刷新
    galleries: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        const match = pathToRegexp('/:userId').exec(pathname);
        if (match) {
          dispatch({ type: 'initUserInfo', payload: query });
          dispatch({ type: 'getUserAllPictures', payload: query });
          dispatch({ type: 'getUserAllGalleries', payload: query });
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
        const userModel = yield select(state => state.user);
        if (userModel.isNeedRefresh) {
          yield put({
            type: 'getUserAllPictures',
          });
          yield put({
            type: 'getUserAllGalleries',
          });
        }
      } else {
        // 用户名或密码错误
      }
    },
    // *logout({ payload }, { call, put, select }) {
    //   const user = yield select(state => state.user);
    //   if (user.userInfo) {
    //     const userId = user.userInfo.userId;
    //   }
    // },
    *initUserInfo({ payload }, { call, put }) {
      const response = yield call(UserService.fetchUserLoginInfo);
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
    *getUserAllPictures({ payload }, { call, put }) {
      // 判断是否已经登录
      const loginInfo = yield call(UserService.fetchUserLoginInfo);
      const userInfo = loginInfo.data.data;
      if (userInfo) { // 已登录
        const response = yield call(PictureService.getUserAllPictures, userInfo.userId);
        yield put({
          type: 'saveUserAllPictures',
          payload: {
            pictures: response.data.data,
          },
        });
        yield put({
          type: 'saveNeedRefresh',
          payload: {
            isNeedRefresh: false,
          },
        });
      } else { // 需要登录后刷新数据
        yield put({
          type: 'saveNeedRefresh',
          payload: {
            isNeedRefresh: true,
          },
        });
      }
    },
    *getUserAllGalleries({ payload }, { call, put }) {
      // 判断是否已经登录
      const loginInfo = yield call(UserService.fetchUserLoginInfo);
      const userInfo = loginInfo.data.data;
      if (userInfo) {
        const response = yield call(GalleryService.getUserAllGalleries, userInfo.userId);
        yield put({
          type: 'saveGalleries',
          payload: {
            galleries: response.data.data,
          },
        });
        yield put({
          type: 'saveNeedRefresh',
          payload: {
            isNeedRefresh: false,
          },
        });
      } else { // 需要登录后刷新数据
        yield put({
          type: 'saveNeedRefresh',
          payload: {
            isNeedRefresh: true,
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
    saveUserAllPictures(state, { payload: { pictures } }) {
      return { ...state, pictures };
    },
    saveNeedRefresh(state, { payload: { isNeedRefresh } }) {
      return { ...state, isNeedRefresh };
    },
    saveGalleries(state, { payload: { galleries } }) {
      return { ...state, galleries };
    },
  },

};
