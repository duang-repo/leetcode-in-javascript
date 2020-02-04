/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums || nums.length <= 0) return 0;
  const dp = new Array(nums.length).fill(1);
  let res = 1;

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    for (let j = 0; j < i; j++) {
      if (nums[j] < cur) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};
// @lc code=end

// 严格最长升序子序列，这道题如果是求连续最长升序子序列则非常简单，对数组进行一次双指针查询，往后遍历到小于前一个数为止记录两指针差值即可。
// 但这里的升序序列不一定连续，例如[2，5，3，4]这个数组就能分出[2,3,4]的升序子序列，如果再用上述办法暴力解的话就需要再多一次循环判断是否需要纳入当前快指针进入子序列。同时在这里也可以看出这中判断是存在最优子结构的，因此很容易联想到用动态规划来解。
// 构建一个一维数组dp[i]，表示以第i个数字为结尾的最长上升子序列的长度。dp[i]的值应为i之前所有比nums[i]小的值所对应的子序列长度中最长的+1。
// 这样很容易得到了状态转移方程：dp[i] = max(dp[j] + 1) (0<j<i && nums[j] < nums[i])

// 这样dp[n]求的是以数组最后一个数字结尾的最长升序子序列，如果要求整个数组的，只需要取dp中最大的值即可。

console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]));