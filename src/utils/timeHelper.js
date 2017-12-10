/**
 * Created by Hitigerzzz on 2017/12/10.
 */
export function getCurrentTime() {
  return DateToYYYYMMDDHHMM(new Date());
}

/**
 * @return {string}
 */
export function DateToYYYYMMDDHHMM(date) {
  const Y = `${date.getFullYear()}-`;
  const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const D = `${date.getDate()} `;
  const h = `${date.getHours()}`;
  const m = `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
  // const s = date.getSeconds();
  return Y + M + D + [h, m].join(':');
}
