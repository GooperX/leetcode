
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/**
 * 83. 
 * 给定一个已排序的链表的头 head ，删除所有重复的元素，使每个元素只出现一次 。返回已排序的链表.
 * @see https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * 
 * @example
 * 输入: head = [1,1,2]
 * 输出: [1,2]
 * 
 * 输入: head = [1,1,2,3,3]
 * 输出: [1,2,3]
 * 
 */
export const deleteDuplicates = (head: ListNode | null): ListNode | null => {

  let cur: ListNode | null = head

  while (cur && cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}

export const toArray = (head: ListNode | null): number[] => {

  const res = []
  let cur = head

  while (cur) {
    res.push(cur.val)
    cur = cur.next
  }

  return res
}