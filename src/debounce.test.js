/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2022-03-15 13:47:27
 * @LastEditors: mipaifu328
 * @LastEditTime: 2022-03-23 17:06:00
 */
import { test, expect, vi } from 'vitest'
import debounce from "./debounce"
vi.useFakeTimers()

test("debounced test", () => {
  var test = vi.fn()
  var debounced = debounce(test, 1000)

  debounced()
  debounced()
  debounced()

  setTimeout(debounced, 900)

  setTimeout(debounced, 1500)

  vi.runAllTimers()

  expect(test).toHaveBeenCalledTimes(1)
})
