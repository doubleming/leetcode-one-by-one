/*
 * @lc app=leetcode.cn id=4 lang=rust
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
impl Solution {
    fn f<'a>(i:usize, j: usize, k: usize, nums1: &'a Vec<i32> ,nums2: &'a Vec<i32>) -> &'a i32 {
        fn min<'b>(n1: &'b i32, n2: &'b i32) -> &'b i32 {
            if n1 <= n2 {
                n1
            } else {
                n2
            }
        }
        if i >= nums1.len() {
            return nums2.get(j + k - 1).unwrap();
        }
        if j >= nums2.len() {
            return  nums1.get(i + k - 1).unwrap();
        }
        if k == 1 {
            return min(nums1.get(i).unwrap(), nums2.get(j).unwrap());
        }
        let mid = k / 2;
        let lm1 = match nums1.get(i + mid - 1) {
            Some(&x) => x,
            _ => 1 << 20,
        };
        let lm2 = match nums2.get(j + mid - 1) {
            Some(&x) => x,
            _ => 1 << 20,
        };
        if lm1 <= lm2 {
            return Solution::f(i + mid, j, k - mid, nums1, nums2)
        } else {
            return Solution::f(i, j + mid, k - mid, nums1, nums2)
        };
    }

    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
        let l1 = nums1.len();
        let l2 = nums2.len();
        let mid1 = Solution::f(0,0, (l1 + l2 + 1) / 2, &nums1, &nums2);
        let mid2 = Solution::f(0,0,(l1 + l2 + 2) / 2, &nums1, &nums2);
        (*mid1 as f64+ *mid2 as f64) / 2.0
    }
}
// @lc code=end

