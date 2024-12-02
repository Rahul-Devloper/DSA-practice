// Note: Bubble SOrt is a poor sorting algorithm in the real world.
// Majorly used in interviews.

// Each iteration moves the largest unsorted element to its correct position.
// The number of comparisons decreases with each iteration because the largest elements are already sorted.
// In the best case (already sorted array), Bubble Sort can detect this early and stop (if optimized with a swapped flag).

//NOte:
// while loop proceeds with the loop only if condition is satisfied
//do..while loop executes the code block once and then check for condition satisfaction and if true executes the code block again and if false..it stops

const array = [-6, 20, 8, -2, 4]
// first [-6,8,-2,4,20]

//to sort in ascending order
// function bubbleSort(array) {
//   let swapped
//   let n = array.length
//   do {
//     swapped = false
//     for (let i = 0; i < n - 1; i++) {
//       if (array[i] > array[i + 1]) {
//         let temp = array[i]
//         array[i] = array[i + 1]
//         array[i + 1] = temp
//         swapped = true
//       }
//     }
//     n-- //reducing the iterations as the last element is already sorted and the array lenght can be shortened to focus on remaining elementes
//   } while (swapped)
//   return array
// }

// console.log(bubbleSort(array))


//to sort in descending order
// you can either set ponters for left Index, or just swap the condition inside the if loop.
function bubbleSort(array) {
    let swapped
    // let leftIndex = 0
    let n = array.length

    do {
      swapped = false
      for (let i = 0; i < n - 1; i++) {
        if (array[i] < array[i + 1]) {
          let temp = array[i]
          array[i] = array[i + 1]
          array[i + 1] = temp
          swapped = true
        }
      }
    //   leftIndex ++ //reducing the iterations as the last element is already sorted and the array lenght can be shortened to focus on remaining elementes
    n--
    } while (swapped)
    return array
  }
  
  console.log(bubbleSort(array))
  
  