/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return [];
  const res = helper(1, n);
  return res;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function helper(l, r) {
  if (l > r) return [null];
  if (l === r) return [new TreeNode(l)];

  const subTree = [];
  for (let i = l; i <= r; i++) {
    const leftSubTree = helper(l, i - 1);
    const rightSubTree = helper(i + 1, r);

    for (let leftNode of leftSubTree) {
      for (let rightNode of rightSubTree) {
        const rootNode = new TreeNode(i);
        rootNode.left = leftNode;
        rootNode.right = rightNode;
        subTree.push(rootNode);
      }
    }
  }
  return subTree;
}
// @lc code=end

// 这道题请与Unique Binary Search Trees II配合食用，这道题需要求对按数字顺序1~n组成的树进行先序遍历,求所有可能的组成。
// 因为我们知道先序遍历的二叉查找树，父节点一定会大于左子节点，小于右子节点，因此我们可以使用递归来解这个问题（暂时还没有想出使用动态规划的话用什么存入dp数组里，但思想上还是使用dp的思想减少解重复子问题次数）
// 首先选取当前根节点为x，则左子树节点数为(l ~ x-1)，右子树节点数为(x+1, r)，之后进行递归遍历即可。
console.log(generateTrees(3));
