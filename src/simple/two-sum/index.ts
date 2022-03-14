interface Mapper {
  [key: number]: number
}

/**
 * 1
 * @description 
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 * @example 
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * @param {number[]} nums 给定数字数组
 * @param {number} target 两数和
 * @returns {number[]} 下标数组
 */
export const twoSum = (nums: number[], target: number): number[] => {
  const res: number[] = []
  const mapper = {} as Mapper
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    const rest = target - val // 另一个数
    if (mapper[rest] !== undefined) {
      res.push(mapper[rest])
      res.push(i)
      break
    }
    mapper[val] = i
  }
  return res
}