class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

/**
 * 94. 二叉树的中序遍历
 * 
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历。
 * 
 * @example
 * 输入: root = [1,null,2,3]
 * 输出: [1,3,2]
 * 
 * 输入: root = []
 * 输出: []
 */
function inorderTraversal(root: TreeNode | null): number[] {
  // 递归解法
  if (root === null) return []

  const res: number[] = []

  root.left && res.push(...inorderTraversal(root.left))
  res.push(root.val)
  root.right && res.push(...inorderTraversal(root.right))

  return res
}