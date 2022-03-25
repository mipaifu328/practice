/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2022-03-23 17:08:28
 * @LastEditors: mipaifu328
 * @LastEditTime: 2022-03-23 17:56:59
 */

import { test, expect } from "vitest";

interface baseType {
  name?: string
  type: 'CAT' | 'DOG'
}

type base = {
  name?: string
  type: 'CAT' | 'DOG'
}

function getType(type: base): baseType {
  return {
    type: 'CAT'
  }
}

getType({
  type: 'CAT'
})

test('两数之和', () => {
  expect(1 + 1).toBe(2)
}) 