/**
 * Created by Hitigerzzz on 2017/12/11.
 */
import pathToRegexp from 'path-to-regexp';
import * as GalleryService from '../services/GalleryService';
import * as UserService from '../services/UserService';

export default {

  namespace: 'gallery',

  state: {
    galleryInfo: '',
    pictures: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/gallery/:galleryId').exec(pathname);
        if (match) {
          dispatch({ type: 'user/initUserInfo' });
          dispatch({ type: 'getGalleryInfo', payload: { galleryId: match[1] } });
          dispatch({ type: 'getGalleryAllPictures', payload: { galleryId: match[1] } });
        }
      });
    },
  },

  effects: {
    *getGalleryInfo({ payload: { galleryId } }, { call, put }) {
      // 判断是否已经登录
      const loginInfo = yield call(UserService.fetchUserLoginInfo);
      const userInfo = loginInfo.data.data;
      if (userInfo) {
        const response = yield call(GalleryService.getGalleryInfo, galleryId);
        console.log('models/gallery/getGalleryInfo/response', response);
        yield put({
          type: 'saveGalleryInfo',
          payload: {
            galleryInfo: response.data.data,
          },
        });
      }
    },
    *getGalleryAllPictures({ payload: { galleryId } }, { call, put }) {
      // 判断是否已经登录
      const loginInfo = yield call(UserService.fetchUserLoginInfo);
      const userInfo = loginInfo.data.data;
      if (userInfo) {
        const response = yield call(GalleryService.getGalleryAllPictures, galleryId);
        console.log('models/gallery/getGalleryAllPictures/response', response);
        yield put({
          type: 'savePictures',
          payload: {
            pictures: response.data.data,
          },
        });
      }
    },
  },

  reducers: {
    saveGalleryInfo(state, { payload: { galleryInfo } }) {
      return { ...state, galleryInfo };
    },
    savePictures(state, { payload: { pictures } }) {
      return { ...state, pictures };
    },
  },
};
