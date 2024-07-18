function convert(s: string, numRows: number): string {
   if (numRows === 1) return s;
   const res = Array.from<number, string[]>({length: numRows}, () => []);
   // 遍历字符串，按行添加
   let flag = false // 标记是否从上到下拍
   let j = 0
   for (let i = 0; i < s.length; ++i) {
      if (flag) {
        j -= 1
      }
      if (j === 0) {
        flag = false
      }
      const char = s[i]
      res[j].push(char)
      if (j === numRows - 1) {
        flag = true
      } 
      if (!flag) {
        j += 1
      }
   }
   return res.map(item => item.join("")).join("")
};

function convert1(s: string, numRows: number): string {
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
const test = 'PAYPALISHIRING'
const t1 = convert(test, 4)
const t2 = convert1(test, 4)
console.log(t1, t2, t1===t2)