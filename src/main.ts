import { removeElement } from './simple/removeElement'
import { twoSum } from './simple/two-sum'
import { isPalindrome } from './simple/isPalindrome'
import { longestCommonPrefix } from './simple/longestCommonPrefix'
import { removeDuplicates } from './simple/removeDuplicates'

// console.log('res1', twoSum([2,7,11,15], 13))
// console.log('res2', twoSum([3,2,4], 6))
// console.log('res3', twoSum([3,2,4], 11))
// console.log('res4', twoSum([2,7,11,15], 4))

// console.log('res1', '234', isPalindrome(234))
// console.log('res2', '232', isPalindrome(232))
// console.log('res3', '189672', isPalindrome(189672))
// console.log('res4', '73837', isPalindrome(73837))

// console.log('res1',longestCommonPrefix(['regex', 'regpx', 'regax', 'regkl']))
// console.log('res2',longestCommonPrefix(['jakslkd', 'ashj', 'zxcas', 'qwexx']))
// console.log('res3',longestCommonPrefix(['jks', 'jksl', 'jksooo', 'jkl']))
// console.log('res4',longestCommonPrefix(['rdfh', 'rfgx', 'rvbn', 'rnmhgjg']))
// console.log('res5',longestCommonPrefix(['gxcv', 'grty', 'gq', 'gasdwe']))
// console.log('res6',longestCommonPrefix(['dfg', 'dfghh', 'dfgbb', '']))
// console.log('res7',longestCommonPrefix(['cir','car']))

// console.log('res1', removeDuplicates([1, 3, 5, 7, 9, 11, 11, 12, 12, 12, 13]))
// console.log('res2', removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 6, 6]))
// console.log('res3', removeDuplicates([1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 9]))
// console.log('res4', removeDuplicates([1, 2, 3, 4, 5]))

console.log('res1', removeElement([1, 3, 5, 7, 9, 11, 12, 12, 12, 13], 12))
console.log('res2', removeElement([1, 2, 3, 4, 4, 4, 5, 6], 4))
console.log('res3', removeElement([1, 1, 1, 2, 3, 4, 5, 6, 9], 1))
console.log('res4', removeElement([1, 2, 3, 4, 5], 4))
console.log('res5', removeElement([3, 2, 2, 3], 3))
