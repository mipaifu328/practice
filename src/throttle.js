/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2022-03-15 13:47:27
 * @LastEditors: mipaifu328
 * @LastEditTime: 2022-03-15 14:30:48
 */
function throttle(fn, delay = 500) {
  let timer = null
  return function (...arg) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arg)
        timer = null
      }, delay)
    }
  }
}

export default throttle
