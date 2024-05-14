// 归并排序
function mergeSort(arr: number[]) {
    function merge(left: number[], right: number[]) {
        const res: number[] = []
        while (left.length && right.length) {
            if (left[0] > right[0]) {
                res.push(right.shift()!)
            } else {
                res.push(left.shift()!)
            }
        }
        while (left.length) {
            res.push(left.shift()!)
        }
        while (right.length) {
            res.push(right.shift()!)
        }
        return res
    }

    function rec(arr: number[]) {
        if (arr.length === 1) return arr
        const mid = Math.floor(arr.length / 2)
        const sortLeft = rec(arr.slice(0, mid))
        const sortRight = rec(arr.slice(mid, arr.length))
        return merge(sortLeft, sortRight)
    }
    return rec(arr)
}

function swap(arr: number[], n1: number, n2: number) {
    const temp = arr[n1]
    arr[n1] = arr[n2]
    arr[n2] = temp
}

function quickSort(arr: number[]) {
    const tempArr = [...arr]
    function rec(arr: number[]) {
        if (arr.length <= 1) return arr
        const left: number[] = []
        const right: number[] = []
        const base = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < base) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return [...rec(left), base, ...rec(right)]
    }

   return rec(tempArr)
}

function insetSort(arr: number[]) {
    const temp = [...arr]
    for (let i  = 1; i < temp.length; i++) {
        let j = i
        while(j > 0) {
            if(temp[j - 1] > temp[j]) {
                swap(temp, j-1, j)
            }
            j-- 
        }
    }
    return temp
}

function genArr(length:number = 1000) {
   return Array.from({length}, () => Math.floor(Math.random() * length))
}
const testArr = genArr(1000000)
// console.time("merge")
// mergeSort(testArr)
// console.timeEnd("merge")
const time: number[] = []
for (let i = 0; i< 10; i++) {
    const start = performance.now()
    quickSort(testArr)
    time.push(performance.now() - start)
}
console.log(time.reduce((a, b) => a + b) / time.length)

// console.time("inset")
// insetSort(testArr)
// console.timeEnd("inset")
