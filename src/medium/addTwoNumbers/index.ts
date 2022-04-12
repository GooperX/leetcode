

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/**
 * 2. 两数相加
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * @example
 * 输入: l1 = [2,4,3], l2 = [5,6,4]
 * 输出: [7,0,8]
 * 解释: 342 + 465 = 807.
 * 
 * 输入: l1 = [0], l2 = [0]
 * 输出: [0]
 * 
 * 输入: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出: [8,9,9,9,0,0,0,1]
 * 
 * @param l1 
 * @param l2 
 * @returns 
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2
  if (!l2) return l1

  let cur: ListNode | null = null
  let result: ListNode | null = cur
  let l1cur: ListNode | null = l1
  let l2cur: ListNode | null = l2

  let plusOne: number = 0

  while (l1cur || l2cur) {
    const res = (l1cur ? l1cur.val : 0) + (l2cur ? l2cur.val : 0) + plusOne
    if (!cur) {
      result = cur = new ListNode(res % 10)
    } else {
      cur.next = new ListNode(res % 10)
      cur = cur.next
    }
    plusOne = Math.floor(res / 10)

    if (l1cur) {
      l1cur = l1cur.next
    }
    if (l2cur) {
      l2cur = l2cur.next
    }
  }

  if (plusOne > 0 && cur) {
    cur.next = new ListNode(plusOne)
  }

  return result
}