/*
 * @lc app=leetcode.cn id=3 lang=rust
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        if s.len() == 0 {
            return  0;
          }
          if s.len() == 1 {
            return  1;
          }
          let str_len = s.len();
          let char_bytes = s.as_bytes();
          let mut p1= 0;
          let mut p2 = 0;
          let mut max = 0;
          for i in 1..str_len {
            for j in p1..=p2 {
              if char_bytes[i] == char_bytes[j]  {
                max = max.max(p2 - p1 + 1);
                p1 = j + 1;
                break;
              }
            }
            p2 = i;
          }
          max.max(p2 - p1 + 1) as i32
    }
}
// @lc code=end

