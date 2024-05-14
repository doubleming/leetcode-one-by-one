const arr1 = [1,2,3,4,5,6,7]
const arr2 = [4,5,6,7,8,9,10,29,1]

const getCommonData = (arr1, arr2) => {
  return arr1.filter(val => arr2.includes(val))
}

const getDiffData = (arr1, arr2) => {
  return arr1.filter(val => !arr2.includes(val))

  }

const getAllData = (arr1, arr2) => {

 return [...new Set([...arr1,...arr2])]
}
  


console.log(getCommonData(arr1, arr2))
console.log(getDiffData(arr1, arr2))
console.log(getAllData(arr1, arr2))