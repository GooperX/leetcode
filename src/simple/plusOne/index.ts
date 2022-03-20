
/**
 * 66. 
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 * 
 * @example
 * 输入: digits = [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 输入: digits = [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 输入: digits = [0]
 * 输出: [1]
 * 
 */
export const plusOne = (digits: number[]): number[] => {

  let index = digits.length - 1

  while (index >= 0) {
    if (digits[index] === 9) {
      index--
    } else {
      break
    }
  }

  if (index === -1) {
    const res = new Array(digits.length + 1).fill(0)
    res[0] = 1
    return res
  }

  digits[index] = digits[index] + 1

  digits.fill(0, index + 1)

  return digits
}