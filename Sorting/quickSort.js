let array = [8, 20, -2, 4, -6]

function quickSort(array) {
  if (array.length < 2) {
    return array
  }
  let pivot = array[array.length - 1]
  console.log(pivot)
  let leftArray = []
  rightArray = []

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i])
    } else {
      rightArray.push(array[i])
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

console.log(quickSort(array))
