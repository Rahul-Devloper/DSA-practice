// Linear Search
let arr = [-5, 2, 4, 6, 8]
let t = 8

function binarySearch(array, target) {
  let sortedArray = array.sort((a, b) => a - b) // sorting in ascending order
  let leftIndex = 0 // start of array
  rightIndex = sortedArray.length - 1 // end of array
  return search(sortedArray, target, leftIndex, rightIndex)
}

function search(sortedArray, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (sortedArray[middleIndex] == target) {
    return middleIndex
  }
  if (target < sortedArray[middleIndex]) {
    // choosing left side
    return search(sortedArray, target, leftIndex, middleIndex - 1)
  } else {
    // choosing the right side
    return search(sortedArray, target, middleIndex + 1, rightIndex)
  }
}

console.log(binarySearch(arr, t))
