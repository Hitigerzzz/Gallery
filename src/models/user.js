/**
 * Created by Hitigerzzz on 2017/12/5.
 */
import * as UserService from '../services/UserService';

export default {

  namespace: 'user',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *login({ payload: user }, { call, put }) {
      const response = yield call(UserService.login, user);
      console.log('here');
      console.log(response);
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
