/**
 * 14
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * @example
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 */

export const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return ''
  let res: string = ''

  const minLengthStr = strs.reduce((prev, cur) => {
    return cur.length > prev.length ? prev : cur
  }, strs[0])

  // console.log('minLengthStr', minLengthStr)
  res = minLengthStr

  if (minLengthStr === '') return ''

  for (let i = 0; i < strs.length; i++) {
    let j = 0
    for (; j < minLengthStr.length; j++) {
      if (res[j] !== strs[i][j]) {
        break
      }
    }
    res = strs[i].substring(0, j)
    if (res === '') return ''
  }

  return res
}