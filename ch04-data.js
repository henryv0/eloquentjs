function range(start, end, step = 1) {
	let rangeArr = [];
	if (start <= end) {
		for (i=start; i<=end; i=i+step) {
			rangeArr.push(i);
		}
	} else {
		step = -1;		

		for (i=start; i>=end; i=i+step) {
			rangeArr.push(i);
		}
	}
	return rangeArr;	
}

function sum(numbers) {
	let sum = 0;
	for (num of numbers) {
		sum += num;
	}
	return sum;	
}

//console.log(range(1,10,2));
//console.log(range(5,2,-1));
//console.log(range(5,2));

/* REVERSING
 AN ARRAY
*/

function reverseArray(arr) {
	//let newArr = arr.slice();
	let newArr = []
	for (i=arr.length-1; i>=0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;	
}

//function reverseArrayInPlace(arr) {
//	let copiedArr = [];
//	for (i=arr.length-1 ; i>=0; i--) {
//		copiedArr.push(arr[i]);
//	}
//	for (j in arr) {
//		arr[j] = copiedArr[j]
//		console.log(j);
//	}
//	return arr;	
//}

function reverseArrayInPlace(arr) {
	let prev;

	for (i=0; i<Math.floor(arr.length / 2); i++) {
		prev = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = prev;	
	}
}
//console.log(reverseArray(['A','B','C']));
//let arrayValue = ['first', 2, 3, 4, 'last'];
//reverseArrayInPlace(arrayValue);
//console.log(arrayValue);

function arrayToList(arr) {
	let list = null; 

	for (i=arr.length-1; i>=0; i--) {
		list = {value: arr[i], rest: list};
	}

	return list;	

}

function listToArray(obj) {
	let arr = [];
	for (let node = obj; node; node = node.rest) {
		arr.push(node.value);
	}
	return arr;
}

function prepend(val, list) {
	const newList = {};

	newList.value = val;
	newList.list = list;

	return newList;	
}

//function nth(list, num) {
//	let value;
//	let arr = [];
//	for (let node = list; node; node = node.rest) {
//		arr.push(node.value);
//	}
//	
//	return arr[num];
//}

function nth(list, index) {
//	let newList = {};
	let i = index - 1;

	if (index === 0) {
		return list.value;
	} else {
		if (list.rest) {
			return nth(list.rest, i);
		} else {
			console.log('Doesn\'t exist');
		}
	}		

}

//console.log(arrayToList([10,20]));

//console.log(listToArray(arrayToList([10,20])));
//console.log(prepend(10, prepend(20,null)));
//console.log(nth(arrayToList([10,20,30]), 0));
//console.log(nth(arrayToList([10,20,30]), 1));
//console.log(nth(arrayToList([10,20,30]), 4));

/* DEEP
 * COMPARISON
 */

function deepEqual(obj1, obj2) {

	const isObjAndNotNull1 = typeof obj1 === 'object' && obj1 !== null;
	const isObjAndNotNull2 = typeof obj2 === 'object' && obj2 !== null;
	if (isObjAndNotNull1 && isObjAndNotNull2) {
		const obj1Keys = Object.keys(obj1);
		const obj2Keys = Object.keys(obj2);
		
		if (obj1Keys.length === obj2Keys.length) {
			let isEqual = false;
			for (property of obj1Keys) {
				//console.log(obj1[property]);
				if (obj2[property]) {
					if (typeof obj1[property] === 'object' && typeof obj2[property] === 'object') {
						return deepEqual(obj1[property], obj2[property]);
					} else if (obj1[property] !== obj2[property]) {
						return false;
					} else {
						isEqual = true;
					}
				}	
			}

			// return deepEqual(
			return isEqual;
		} else {
			return false;
		}	
	} else {
		return obj1 === obj2;
	} 

}

let obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj,obj));
console.log(deepEqual(obj, {here:1, object:2}));
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
//console.log(deepEqual(obj, {here: {is: 'not an'}, object: 2}));
