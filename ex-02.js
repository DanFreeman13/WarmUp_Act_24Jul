//Exercise 02 – Repeat a string repeat a string

//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(word, timesRepeat) {

	var outString = "";

	var isNumber = typeof timesRepeat;

	if (timesRepeat >=0 && isNumber === "number") {
		for (var i=0; i<timesRepeat; i++) {

			outString += word;

		}
	}

	return outString;
}

/* ----- TEST ----- */

console.log(repeatStringNumTimes("hello", 5)); // "hellohellohellohellohello"
console.log(repeatStringNumTimes("abc", 3)); // "abcabcabc"
console.log(repeatStringNumTimes("abc", "2")); // ""
console.log(repeatStringNumTimes("mr_robot", -1)); // ""
console.log(repeatStringNumTimes("friend?", "5")); // ""