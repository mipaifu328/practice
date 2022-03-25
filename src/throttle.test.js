/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2022-03-15 13:47:27
 * @LastEditors: mipaifu328
 * @LastEditTime: 2022-03-23 17:06:28
 */
import throttle from "./throttle"
import { test, expect, vi } from 'vitest'

vi.useFakeTimers()

test("throttle test", () => {
  var test = vi.fn()
  var throttled = throttle(test, 1000)

  throttled()
  throttled()
  throttled()

  setTimeout(throttled, 900)

  setTimeout(throttled, 1500)

  vi.runAllTimers()

  expect(test).toHaveBeenCalledTimes(2)
})
