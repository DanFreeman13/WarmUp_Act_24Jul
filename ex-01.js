// Check if a string (first argument) ends with the given target string (second argument).

function confirmEnding (word, letter) {

	if (word[word.length-1] === letter) {
		return true;
	} else {
		return false;
	}
}

/* ----- TEST ----- */

console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Hold on", "o")); // false