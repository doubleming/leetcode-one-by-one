pub struct  Solution;

impl Solution {
    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let sort_res = Solution::merge(nums);
        let mut res: Vec<Vec<i32>> = vec![];
        let length = sort_res.len();
        for (index, num) in sort_res.iter().enumerate() {
            if index >= length - 2 {
                break;
            }
            if *num > 0 {
                break;
            }
            if index > 0 && *num == sort_res[index - 1] {
                continue;
            }
            let mut p1 = index + 1;
            let mut p2 = length - 1;
            while p1 < p2 {
                let total = *num + sort_res[p1] + sort_res[p2];
                if total < 0 {
                    p1 += 1
                } else if total > 0 {
                    p2 -= 1
                } else {
                    res.push(vec![*num, sort_res[p1], sort_res[p2]]);
                    p1 += 1;
                    p2 -= 1;
                    while sort_res[p1] == sort_res[p1 - 1] && p1 < p2 {
                        p1 += 1;
                    }
                    while sort_res[p2] == sort_res[p2 + 1] && p2 > p1 {
                        p2 -= 1;
                    }
                }
            }
        }
        return res;
    }

    pub fn merge(nums: Vec<i32>) -> Vec<i32> {
        let length = nums.len();
        if length <= 1 {
            return nums;
        }
        let mid = length / 2;
        let left = Solution::merge(nums[0..mid].to_vec());
        let right = Solution::merge(nums[mid..length].to_vec());

        let mut l = 0;
        let mut r = 0;
        let mut res: Vec<i32> = vec![];
        while l < left.len() && r < right.len() {
            if left[l] < right[r] {
                res.push(left[l]);
                l += 1;
            } else {
                res.push(right[r]);
                r += 1;
            }
        }
        while l < left.len() {
            res.push(left[l]);
            l = l + 1
        }
        while r < right.len() {
            res.push(right[r]);
            r += 1;
        }

        return res;
    }
}