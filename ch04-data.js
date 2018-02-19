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
	for (val in obj) {
		console.log(val);
	}
}

//console.log(arrayToList([10,20]));

console.log(listToArray(arrayToList([10,20])));
//console.log(
//console.log(arrayToList([10,20]));
