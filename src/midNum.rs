use std::cmp::min;

fn f<'a>(i:usize, j: usize, k: usize, nums1: &'a Vec<i32> ,nums2: &'a Vec<i32>) -> &'a i32 {
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
        return f(i + mid, j, k - mid, nums1, nums2)
    } else {
        return f(i, j + mid, k - mid, nums1, nums2)
    };
}

pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
    let l1 = nums1.len();
    let l2 = nums2.len();
    let mid1 = f(0,0, (l1 + l2 + 1) / 2, &nums1, &nums2);
    let mid2 = f(0,0,(l1 + l2 + 2) / 2, &nums1, &nums2);
    (*mid1 as f64+ *mid2 as f64) / 2.0
}

struct Solution {}

impl Solution {
    pub fn a(l: i32)->i32 {
        l
    }
    pub fn b(l: i32) -> i32 {
       Solution::a(l)
    }
}