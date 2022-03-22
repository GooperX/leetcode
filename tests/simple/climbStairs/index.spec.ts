import { climbStairs } from './../../../src/simple/climbStairs/index';


describe('climbStairs', () => {

  test('n = 2', () => {
    expect(climbStairs(2)).toBe(2)
  })

  test('n = 3', () => {
    expect(climbStairs(3)).toBe(3)
  })

  test('n = 4', () => {
    expect(climbStairs(4)).toBe(5)
  })

  test('n = 5', () => {
    expect(climbStairs(5)).toBe(8)
  })
})