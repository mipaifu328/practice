/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2022-03-25 15:00:42
 * @LastEditors: mipaifu328
 * @LastEditTime: 2022-03-25 16:23:00
 */

// import { describe } from "vitest";
import { expect, test } from "vitest";
import { translateTree } from './translateTree'


// let arr = [
//   {id: 1, name: '部门1', pid: 0},
//   {id: 2, name: '部门2', pid: 1},
//   {id: 3, name: '部门3', pid: 1},
//   {id: 4, name: '部门4', pid: 3},
//   {id: 5, name: '部门5', pid: 4},
// ]
// describe('should', () => {
//   test('tree', () => {
//     // const result = translateTree()
//     function sss() {return 123}
//     expect(sss()).toMatchInlineSnapshot()
//   })
// })

test('hello vitest', () => {
  let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
  ]
  expect(translateTree(arr)).toMatchInlineSnapshot(`
    [
      {
        "children": [
          {
            "children": [],
            "id": 2,
            "name": "部门2",
            "pid": 1,
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "id": 5,
                    "name": "部门5",
                    "pid": 4,
                  },
                ],
                "id": 4,
                "name": "部门4",
                "pid": 3,
              },
            ],
            "id": 3,
            "name": "部门3",
            "pid": 1,
          },
        ],
        "id": 1,
        "name": "部门1",
        "pid": 0,
      },
    ]
  `)
})