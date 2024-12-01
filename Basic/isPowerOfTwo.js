function isPowerOfTwo(n) {
	if (n < 1) {
		return false
	}
	while (n > 1) {
		if (n % 2 !== 0) {
			return false
		}
		n = n / 2
	}
	return true
}

console.log(isPowerOfTwo(4))
//Big-O  = O(logn)
//ALternative Bitwise Solution
function isPowerOfTwo(n) {
	if (n < 1) {
		return false
	}
	return (n & (n - 1)) === 0
}
//n should be a power of 2
// divide by 2^0 & 2^1 are results of 1 and 2.
// iteratively divide n by 2 until it reaches 1 as anser else it ain't a prime number