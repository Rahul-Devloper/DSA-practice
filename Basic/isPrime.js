function isPrime(n) {
	if (n <= 1) {
		return 'Invalid Input - not a natural number'
	}
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false
		}
	}
	return true
}

console.log(isPrime(2222))

//Prime number should not be a result of product of more than 2 natural numbers
// Natural numbers don't contain zero.
// First  Natural number is 2