// recursive factorial of a number
function resursionFactorial(n) {
	if (n == 0) {
		return 1
	}
	console.log(n)
	const result = n * resursionFactorial(n - 1)
	console.log('result=>', result)
	return result
}

console.log(resursionFactorial(5))