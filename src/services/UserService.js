/**
 * Created by Hitigerzzz on 2017/12/5.
 */
import request from '../utils/request';

const USER_API = '/api/user/';

export function login(user) {
  return request(`${USER_API}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
}

export function register(user) {
  return request(`${USER_API}register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
}

/**
 * 获取用户登录信息
 */
export function fetchUserLoginInfo() {
  return request(`${USER_API}userLoginInfo`);
}
