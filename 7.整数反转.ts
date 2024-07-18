/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    const stack: number[] = []
    const isNa = x < 0
    x = isNa ? x*-1 : x
    while(x) {
        const d = x % 10
        stack.push(d)
        x = Math.floor(x / 10)
    }
    let degit = 0
    let res = 0
    while(stack.length) {
        const d = stack.pop()
        if (d === undefined) {
            break
        }
        if (d === 0 && degit === 0) {
            continue
        }
        res += d * (10 ** degit)

        degit += 1
    }
    res = isNa ? res * -1 : res
    if (res > (2 ** 31 - 1) || res < -(2 ** 31)) {
        return 0
    }
    return res
};
// @lc code=end

