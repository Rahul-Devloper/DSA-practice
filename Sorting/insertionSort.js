let array = [-1, -6, 20, 8, -2, 4]
// In insertion sort, it is always assumed that the first element/ index 0 is sorted. So, the function should start from the next index or index 1

function insertionSort(array) {
  // declaring i for the For Loop and declaring j for the While loop helps to avoid confusiong and improves readability
  // it is a best practice to use one variable for each loop. Eg: the while loop does not use the i variable anywhere inside,
  // but instead uses the j variable and increments/ decrements by 1 to move inside the array.
  // trying to use i also inside the while loop might modify the original array inpurpoley and causes distrotion.
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i] // Current element to be inserted
    let j = i - 1 // Start comparing with the previous element

    // Shift elements of the sorted portion of the array to the right
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j]
      console.log('whileArray=>', array)
      j = j - 1
    }

    // Insert the current element into its correct position
    array[j + 1] = numberToInsert
    console.log('finalArray=>', array)
  }
}

insertionSort(array)
console.log(array)

//Basic Idea is. Left is assumed to be sorted and right is assumed to be unsorted
// first left element is assumed sorted,
// then from index 1, the execution starts
// then, the index 1 value is stored into numberToInsert variable
// then , since we need another way to track the previos index, j is introtudeced and used in another loop to avoid confusion.
// then, j (previos element value) and numberToInsert is compared, If j > numberToInsert == true,
// value of j must be put in the numberToInsert position first
// then, in the position of value of j, the numberToInsert must be placed, basically...switching the value in j to rigt and number to Insert to left. But step by step
