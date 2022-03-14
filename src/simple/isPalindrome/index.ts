/**
 * 9
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @example
 * 输入：x = 121
 * 输出：true
 * 
 * @example
 * 输入：x = -121
 * 输出：false
 * 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 */

export function isPalindrome(x: number): boolean {
  console.time()
  if (x < 0) return false
  if (x === 0) return true
  // const str = x + ''
  // const temp = str.split('').reverse().join()
  // return temp === str
  let rev = 0
  let temp = x
  while (temp !== 0) {
    rev = rev * 10 + temp % 10
    temp = Math.floor(temp / 10)
  }
  console.timeEnd()
  return rev === x
}