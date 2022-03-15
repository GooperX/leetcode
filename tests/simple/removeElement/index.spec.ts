import { removeElement } from './../../../src/simple/removeElement/index';


test('removeElement test', () => {
  expect(removeElement([1, 2, 2, 3, 4], 2)).toBe(3)
})