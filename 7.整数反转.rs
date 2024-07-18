/*
 * @lc app=leetcode.cn id=7 lang=rust
 *
 * [7] 整数反转
 */

// @lc code=start
impl Solution {
    pub fn reverse(x: i32) -> i32 {
        if x > 2i32.pow(31) - 1 || x < -2i32.pow(31) {
            return 0;
        }
        let mut a = 0;
        let is_na = x < 0;
        let mut temp = if is_na { x * -1 } else { x };
        while temp > 0 {
            let res = temp % 10;
            a = a * 10 + res;
            temp = temp / 10;
        }
        if is_na {
            a = a * -1
        }
        return a;
    }
}
// @lc code=end
