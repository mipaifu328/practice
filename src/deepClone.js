/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2022-03-15 14:39:07
 * @LastEditors: mipaifu328
 * @LastEditTime: 2022-03-15 15:19:57
 */
function deepClone(obj, cache = new WeakMap()) {
  if (typeof obj !== "object" || obj == null) {
    // 非对象
    return obj
  }

  if (cache.get(obj)) {
    return cache.get(obj)
  }
  const cloneObj = new obj.constructor()
  cache.set(obj, cloneObj)

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache) // 递归
    }
  }
  return cloneObj
}

export default deepClone
