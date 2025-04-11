function main () {
	const results = []
	for (let i = 1; i <= 100; i++) {
		console.log(convert(i))
	}
}

function convert(num) {
	let string = ''
	if (num % 3 == 0) {
		string += 'Fizz'
	}
	if (num % 5 == 0) {
		string += 'Buzz'
	}

	return string || num
}

main()
// module.exports = main;