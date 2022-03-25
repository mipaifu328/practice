/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2022-03-15 13:47:27
 * @LastEditors: mipaifu328
 * @LastEditTime: 2022-03-16 16:27:31
 */
function debounce(fn, delay = 500) {
  let timer = null
  return function (...arg) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arg)
      timer = null
    }, delay)
  }
}
export default debounce
