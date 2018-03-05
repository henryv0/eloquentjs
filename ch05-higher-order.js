let arrays = [[1,2,3], [4,5], [6]];

let flattened = arrays.reduce((a,b) => a.concat(b));
//console.log(flattened);

/* LOOP */

function loop(value, testFn, updateFn, bodyFn) {
	//let value = value;

	while (testFn(value)) {
		bodyFn(value);

		value = updateFn(value);
	} 
	
	//if (testFn(value)) {
	//	bodyFn(value);
	//	
	//	value = updateFn(value);
	//} else {
	//	return false;
	//}	
}

//loop(3, n => n > 0, n => n - 1, console.log);

/* EVERYTHING */

//function every(array, test) {
//	let isEvery = false;
//	for (element of array) {
//		if (test(element)) {
//			isEvery = true;
//		} else {
//			return false;
//		}
//	}
//
//	return isEvery;	
//}

function every(array,test) {
	return !array.some(element => {
		return !test(element);
	});
}

//console.log(every([1,3,5], n=> n<10));
//console.log(every([2,4,16], n=> n<10));
//console.log(every([], n => n<10));

const ancestry = require('./ancestry.js');
const ancestryData = JSON.parse(ancestry);

function average(array) {
	return array.reduce((a,b) => a + b) / array.length;
}

let byName = {};
ancestryData.forEach(function(person) {
	byName[person.name] = person;
});

function hasKnownMother(ancestors) {
	return ancestors.filter(ancestor => ancestor.mother).map(ancestor => ancestor.mother);
}

console.log(hasKnownMother(ancestryData));
