//Always define a base case to prevent infinite recursion.
// Break down the problem into smaller, self-similar problems.
// Use a debugger or print statements to understand the recursive flow
//Finding the nth element of the fibonacci series.

function recursiveFibonacci(n) {
	if (n < 2) {
		return n // base case. To stop the infinite recursions
	}
	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(36))