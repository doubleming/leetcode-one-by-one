/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const subMap = new Map()
    for (let index = 0; index < nums.length; index++) {
        const val = nums[index];
        if (subMap.has(val)) {
            return [subMap.get(val), index]
        }
        subMap.set(target-val, index)
    }
};
// @lc code=end

