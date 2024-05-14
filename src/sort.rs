

pub fn merge_sort(arr: Vec<u32>) -> Vec<u32> {
    // 归并排序
    fn merge(mut left: Vec<u32>, mut right: Vec<u32>) -> Vec<u32> {
        let mut result = vec![];
        while left.len() > 0 && right.len() > 0 {
            if left[0] < right[0] {
                result.push(left[0]);
                left.remove(0);
            } else {
                result.push(right[0]); 
                right.remove(0);
            }
        }
        if left.len() > 0 {
            result.extend(left);
        }
        if right.len() > 0 {
            result.extend(right);
        }
        result
    }

    if arr.len() <= 1 {
        return arr
    }

    let mid = arr.len() / 2;
    let left = merge_sort(arr[0..mid].to_vec());
    let right = merge_sort(arr[mid..].to_vec());
    merge(left, right)
}

// 快速排序
// pub fn quick_sort(arr: Vec<u32>) {
//     fn rec(arr: Vec<u32>) -> Vec<u32> {
//         if arr.len() <= 1 {
//             return arr
//         }
//         let mut left: Vec<u32> = vec![];
//         let mut right: Vec<u32> = vec![];
//         let base = arr[0];
//         for i in 1..arr.len() {
//             if arr[i] < base {
//                 left.push(arr[i])
//             } else {
//                 right.push(arr[i])
//             }
//         }
//         let left = rec(left);
//         let right = rec(right);
//         [left, vec![base], right].concat()
//     }
//     rec(arr)
// }

pub fn quick_sort(arr: Vec<u32>) -> Vec<u32> {
    fn rec(arr: Vec<u32>) -> Vec<u32> {
        if arr.len() <= 1 {
            return  arr;
        }
        let base = arr[0];
        let mut left:Vec<u32> = vec![];
        let mut right:Vec<u32> = vec![];
        for i in 1..arr.len() {
            if arr[i] < base {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        [rec(left), vec![base], rec(right)].concat()
    }
    rec(arr)
}