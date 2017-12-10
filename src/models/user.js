/**
 * Created by Hitigerzzz on 2017/12/5.
 */
import * as UserService from '../services/UserService';

export default {

  namespace: 'user',

  state: {
    userInfo: '',
    loginModalVisible: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === '/123') {
          console.log('所有监听路由');
          dispatch({ type: 'initUserInfo', payload: query });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *login({ payload: user }, { call, put }) {
      const response = yield call(UserService.login, user);
      console.log('models/user/login');
      console.log(response);
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
