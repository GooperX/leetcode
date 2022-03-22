import { deleteDuplicates, ListNode, toArray } from './../../../src/simple/deleteDuplicates/index';


describe('deleteDuplicates', () => {

  test('[1,1,2]', () => {
    const head = new ListNode(1)
    head.next = new ListNode(1)
    head.next.next = new ListNode(2)

    deleteDuplicates(head)

    expect(toArray(head)).toStrictEqual([1, 2])

  })
})