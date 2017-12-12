/**
 * Created by Hitigerzzz on 2017/12/10.
 */
import * as PictureService from '../services/PictureService';
import * as timeHelper from '../utils/timeHelper';

import HttpMessage from '../constants/HttpMessage';

export default {

  namespace: 'picture',

  state: {
    uploadModalVisible: false,
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
      const response = yield call(PictureService.uploadPicture, picture);
      console.log('models/picture/uploadPicture/response', response);
      if (response.data.code === HttpMessage.result.SUCCESS) {
        // 关闭上传弹出框
        yield put({
          type: 'savUploadModalVisible',
          payload: {
            uploadModalVisible: false,
          },
        });
        // 重新获取用户图片
        yield put({
          type: 'user/getUserAllPictures',
        });
      }
    },
  },

  reducers: {
    savUploadModalVisible(state, { payload: { uploadModalVisible } }) {
      return { ...state, uploadModalVisible };
    },
  },

};
