// Linear Search
let arr = [1, 2, 3, 4, 5, 6]
let t = 6

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }
  return -1
}

console.log(linearSearch(arr, t))