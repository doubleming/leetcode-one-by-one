/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
   if (numRows === 1) return s;
   let pointNum = numRows - 2;
   const headNum = numRows - 2
   const tailNum = 2 * numRows - 3
   const strArr = Array.from<number, string[]>({length: numRows}, () => [])
   let i = 0
   while(i < s.length) {
    const char = s[i]
    if (pointNum > headNum) {
      strArr[pointNum - headNum].push(char)
    } else {
      strArr[headNum - pointNum].push(char)
    }
    if (pointNum === tailNum) {
      pointNum = 0
    } else {
      pointNum += 1
    }
    i++
   }
  return strArr.map(item => item.join("")).join("")
};
// @lc code=end

