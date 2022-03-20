import { plusOne } from './../../../src/simple/plusOne/index';


describe('plusOne', () => {
  test('[1,2,3]', () => {
    expect(plusOne([1,2,3])).toStrictEqual([1,2,4])
  })

  test('[4,3,2,1]', () => {
    expect(plusOne([4,3,2,1])).toStrictEqual([4,3,2,2])
  })

  test('[0]', () => {
    expect(plusOne([0])).toStrictEqual([1])
  })

  test('[9,9,9]', () => {
    expect(plusOne([9,9,9])).toStrictEqual([1,0,0,0])
  })
})