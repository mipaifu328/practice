/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2022-03-25 14:59:46
 * @LastEditors: mipaifu328
 * @LastEditTime: 2022-03-25 16:14:26
 */
export function translateTree(array) {
  
  let result = []
	let map = {}

	for(let item of array) {
		map[item.id] = {
			...item,
			children: []
		}
	}

	for(let item of array) {
		const id = item.id
		const pid = item.pid
		const treeItem = map[id]
		if(item.pid === 0){
			result.push(treeItem)
		}else{
			if(!map[pid]){
				map[pid] = {
					children: []
				}
			}
			map[pid].children.push(treeItem)
		}
	}


  return result
}