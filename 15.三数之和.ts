/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    function mergeSort(nums: number[]): number[] {
        function splitNums(nums: number[]) {
            const len = nums.length
            if (len <= 1) {
                return nums;
            }
            const mid = Math.floor(len / 2);
            const leftArr = splitNums(nums.slice(0, mid));
            const rightArr = splitNums(nums.slice(mid, len));
            return merge(leftArr, rightArr);
        }

        function merge(left: number[], right: number[]) {
            const temp: number[] = []
            let l = 0, r = 0;
            while (l < left.length && r < right.length) {
                if (left[l] < right[r]) {
                    temp.push(left[l])
                    l++
                } else {
                    temp.push(right[r])
                    r++
                }
            }
            if (l < left.length) {
                temp.push(...left.slice(l))
            }
            if (r < right.length) {
                temp.push(...right.slice(r))
            }
            return temp
        }
        return splitNums(nums)
    }
    const res: number[][] = []
    const sortNums = mergeSort(nums)
    for (let i = 0, len = sortNums.length; i < len - 2; i++) {
        const current = sortNums[i]
        if (current > 0) {
            break
        }
        if (i > 0 && current === sortNums[i - 1]) {
            continue
        }
        let lp = i + 1
        let rp = len - 1
        while (lp < rp) {
            const sumTemp = current + sortNums[lp] + sortNums[rp]
            if (sumTemp < 0) {
                lp++
            } else if (sumTemp > 0) {
                rp--
            } else {
                res.push([current, sortNums[lp], sortNums[rp]])
                lp++
                rp--
                while(lp < rp && sortNums[lp] === sortNums[lp - 1]){
                    lp++
                }
                while(lp < rp && sortNums[rp] === sortNums[rp + 1]) {
                    rp--
                }
            }
        }
    }
    return res
};

// @lc code=end

