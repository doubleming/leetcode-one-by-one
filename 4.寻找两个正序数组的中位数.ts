/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const l1 = nums1.length
    const l2 = nums2.length
    const f = (i: number, j:number, k:number) => {
        if (i >= l1) {
            return nums2[j + k - 1]
        }
        if (j >= l2) {
            return nums1[i + k - 1]
        }
        if (k === 1) {
            return Math.min(nums1[i], nums2[j])
        }
        const mid = Math.floor( k / 2)
        const lm1 = mid + i > l1 ? 1 << 30 : nums1[mid + i - 1]
        const lm2 = mid + j > l2 ? 1 << 30 : nums2[mid + j - 1]
        return lm1 <= lm2 ? f(i+mid,j,k-mid) : f(i, j + mid, k - mid)
    }
    const mid1 = f(0, 0, Math.floor((l1 + l2 + 1) / 2))
    const mid2 = f(0, 0, Math.floor((l1 + l2 + 2) / 2))
    return (mid1 + mid2) / 2
};
// @lc code=end

