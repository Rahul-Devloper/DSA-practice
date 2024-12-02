// Linear Search
let arr = [-5, 2, 4, 6, 8]
let t = 80

// Binary Search is about finding the middle element of the array and breaking the array into smaller parts respective to the target location.

//Conditions
// make sure array is sorted  (Very Important)
//Find the middle element of array.
// check if target and middle element match, if not...check if target is greater or smaller than middle element.
// if greater, check on righ...else check left.
// break the arrays using pointers to move along the array and to set your own start and end points for loop to start.
// If target not present , return -1 or false
function binarySearch(array, target) {
  array.sort((a, b) => a - b) // sorting in ascending order
  if (array.length > 0) {
    //setting pointers
    let leftIndex = 0 // start of array
    rightIndex = array.length - 1 // end of array

    while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
      if (array[middleIndex] == target) {
        return middleIndex
      }
      //choosing to search either on right side or left side
      if (target < array[middleIndex]) {
        // choosing left side
        rightIndex = middleIndex - 1
      } else {
        // choosing the right side
        leftIndex = middleIndex + 1
      }
    }
    return -1
  }
}

console.log(binarySearch(arr, t))
