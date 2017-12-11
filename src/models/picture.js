/**
 * Created by Hitigerzzz on 2017/12/10.
 */
import * as PictureService from '../services/PictureService';
import * as timeHelper from '../utils/timeHelper';

export default {

  namespace: 'picture',

  state: {

  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
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

  },

  reducers: {
  },

};
