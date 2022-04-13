import { lengthOfLongestSubstring } from "../../../src/medium/lengthOfLongestSubstring"

describe('lengthOfLongestSubstring', () => {
  it('abcabcbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })
  it('bbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })
  it('pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })
})