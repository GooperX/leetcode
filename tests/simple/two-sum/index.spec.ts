import { twoSum } from './../../../src/simple/two-sum/index';

test('two-sum test', () => {
  expect(twoSum([2,7,11,15], 13)).toStrictEqual([0, 2])
})