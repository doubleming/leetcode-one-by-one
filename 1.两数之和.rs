/*
 * @lc app=leetcode.cn id=1 lang=rust
 *
 * [1] 两数之和
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
         let mut subMap = HashMap::new();
         for (i, &x) in nums.iter().enumerate() {
            let y = target - x;
            if let Some(&j) = subMap.get(&x) {
                return vec![j as i32, i as i32];
            }
            subMap.insert(y, i as i32);
         }
        return vec![]
    }
}
// @lc code=end

