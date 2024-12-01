function factorial(n) {
	let value = 1
	for (let i = n; i > 0; i--) {
		console.log('value=>', value)
		value *= i
	}
	return value
}

console.log(factorial(1))

// no array
// factorial of 0 is 1
// Big-O = O(n