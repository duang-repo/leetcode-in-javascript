/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 *
 * https://leetcode-cn.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (50.75%)
 * Likes:    188
 * Dislikes: 0
 * Total Accepted:    19.9K
 * Total Submissions: 39.2K
 * Testcase Example:  '12'
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 *
 * 示例 1:
 *
 * 输入: n = 12
 * 输出: 3
 * 解释: 12 = 4 + 4 + 4.
 *
 * 示例 2:
 *
 * 输入: n = 13
 * 输出: 2
 * 解释: 13 = 4 + 9.
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n <= 0) return 0;
  // 四平方和定理提高算法效率，不知道该定理可以不加这两行
  while (n % 4 === 0) n /= 4;
  if (n % 8 === 7) return 4;

  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};
// @lc code=end

// 四平方和定理：任何正整数都能表示为4个整数的平方和。
// 状态转移方程：dp[i] = min(dp[i], dp[i - j * j] + 1)
// 动态规划问题，可以从后往前倒推，本数字i的最小平方和组成个数为: i减去一个比该数小的平方数j^2后的数所需要的最小平方和组成个数+1(这个1指代的就是j)的所有情况的最小值
console.log(numSquares(3));
