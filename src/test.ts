function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const newArr: number[] = []
    let p1 = 0
    let p2 = 0
    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] < nums2[p2]) {
            newArr.push(nums1[p1])
            p1++
        } else {
            newArr.push(nums2[p2])
            p2++
        }
    }
    if(p1 < nums1.length) {
        newArr.push(...nums1.slice(p1))
    }
    if(p2 < nums2.length) {
        newArr.push(...nums2.slice(p2))
    }
    const mid1 = Math.floor((newArr.length + 1) / 2)
    const mid2 = Math.floor((newArr.length + 2) / 2)
    return (newArr[mid1-1] + newArr[mid2-1]) / 2

};

function findMedianSortedArrays1(nums1: number[], nums2: number[]): number {
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
        const mid = Math.floor(k / 2)
        const lm1 = mid + i > l1 ? 1 << 30 : nums1[mid + i - 1]
        const lm2 = mid + j > l2 ? 1 << 30 : nums2[mid + j - 1]
        return lm1 <= lm2 ? f(i+mid,j,k-mid) : f(i, j + mid, k - mid)
    }
    const mid1 = f(0, 0, Math.floor((l1 + l2 + 1) / 2))
    const mid2 = f(0, 0, Math.floor((l1 + l2 + 2) / 2))
    return (mid1 + mid2) / 2
};


function main() {
    // const nums1 = [1,3,10,20,50]
    // const nums2 = [2, 6,7,8,9,12,13]
    const nums1 = [1,2]
    const nums2 = [3,4]
    const res1 = findMedianSortedArrays(nums1, nums2)
    const res2 = findMedianSortedArrays1(nums1, nums2)
    console.log(res1, res2)
}

main()