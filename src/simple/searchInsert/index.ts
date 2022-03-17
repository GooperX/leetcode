
/**
 * 35
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * nums 为无重复元素的升序排列数组
 * 
 * @example
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 * 
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 * 
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 * 
 * 输入: nums = [1,3,5,6], target = 0
 * 输出: 0
 * 
 * @param nums 排序数组
 * @param target 目标值
 */
export const searchInsert = (nums: number[], target: number): number => {

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = ((right - left) >> 1) + left // 利用位运算取整
    if (nums[mid] >= target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}