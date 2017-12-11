/**
 * Created by Hitigerzzz on 2017/12/10.
 */
import pathToRegexp from 'path-to-regexp';
import * as PictureService from '../services/PictureService';
import * as UserService from '../services/UserService';
import * as timeHelper from '../utils/timeHelper';

export default {

  namespace: 'picture',

  state: {
    pictures: [],
    isNeedRefresh: false, // 是否需要刷新
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        const match = pathToRegexp('/:userId').exec(pathname);
        if (match) {
          dispatch({ type: 'getUserAllPictures', payload: query });
        }
      });
    },
  },

  effects: {
    *uploadPicture({ payload }, { call, put, select }) {
      const user = yield select(state => state.user);
      const picture = { ...payload,
        postTime: timeHelper.getCurrentTime(),
        userId: user.userInfo.userId };
      console.log('models/picture/uploadPicture/picture', picture);
      const response = yield call(PictureService.uploadPicture, picture);
      console.log('models/picture/uploadPicture/response', response);
    },
    *getUserAllPictures({ payload }, { call, put, select }) {
      // 判断是否已经登录
      // const loginInfo = yield call(UserService.fetchUserLoginInfo);
      const user = yield select(state => state.user);
      const userInfo = user.userInfo;
      if (userInfo) { // 已登录
        const response = yield call(PictureService.getUserAllPictures, userInfo.userId);
        console.log('models/picture/getUserAllPictures/response', response);
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
  },

  reducers: {
    saveUserAllPictures(state, { payload: { pictures } }) {
      return { ...state, pictures };
    },
    saveNeedRefresh(state, { payload: { isNeedRefresh } }) {
      return { ...state, isNeedRefresh };
    },
  },

};
