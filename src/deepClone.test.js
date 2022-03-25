/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2022-03-15 14:49:49
 * @LastEditors: mipaifu328
 * @LastEditTime: 2022-03-23 17:07:07
 */
import deepClone from "./deepClone"
import {test, expect} from 'vitest'

test("deepClone test", () => {
  // 测试
  const obj = { name: "Jack", address: { x: 100, y: 200 } }
  obj.a = obj // 循环引用
  const newObj = deepClone(obj)
  expect(newObj.address === obj.address).toBeFalsy()
})
