import { searchInsert } from "../../../src/simple/searchInsert"


describe('searchInsert', () => {
  test('[1, 2, 4, 5, 7]', () => {
    const res = searchInsert([1, 2, 4, 5, 7], 3)
    expect(res).toBe(2)
  })

  test('[1, 3, 5, 6, 9]', () => {
    const res = searchInsert([1, 3, 5, 6, 9], 6)
    expect(res).toBe(3)
  })

  test('[2, 3, 6, 8, 11, 13]', () => {
    const res = searchInsert([2, 3, 6, 8, 11, 13], 15)
    expect(res).toBe(6)
  })

  test('[2]', () => {
    const res = searchInsert([2], 6)
    expect(res).toBe(1)
  })

  test('[]', () => {
    const res = searchInsert([], 9)
    expect(res).toBe(0)
  })
})