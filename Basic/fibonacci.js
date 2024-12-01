function fibonacci(n) {
	let array = [0, 1]
	if (n < array.length) {
		console.log('Not a fibonnaci Squence')
	} else {
		for (let index = 2; index < n; index++) {
			array[index] = array[index - 1] + array[index - 2]
		}
		return array
	}
}
// need to populate from the third index.
// array.length needs to be == n


console.log(fibonacci(12))
fibonnaci(4) =  [0,1,1,2]
fibonnaci(1) = 'Not a fibonnaci sequence'
