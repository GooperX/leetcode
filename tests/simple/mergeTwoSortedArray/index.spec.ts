import { mergeTwoSortedArray } from './../../../src/simple/mergeTwoSortedArray/index';
describe('mergeTwoSortedArray', () => {
  it('nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', () => {
    mergeTwoSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3)
  })

  it('nums1 = [1], m = 1, nums2 = [], n = 0', () => {
    mergeTwoSortedArray([1], 1, [], 0)
  })
})