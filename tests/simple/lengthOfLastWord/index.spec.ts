import { lengthOfLastWord } from "../../../src/simple/lengthOfLastWord"

describe('lengthOfLastWord', () => {

  test('Hello World', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5)
  })
  test('   fly me   to   the moon  ', () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4)
  })
  test('luffy is still joyboy', () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toBe(6)
  })

})