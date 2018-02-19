//function findSol(target) {
//	
//	// find function
//	function find(current, prev) {
//		if (current === target) {
//			console.log('target found!');
//			return prev;
//		} else if (current > target) {
//			console.log('current number too big');
//		} else {
//			return find(current + 5, `(${prev} + 5)`) || find(current * 3, `(${prev} * 3)`) 
//			//return find(current * 3, `(${prev} * 3)`) || find(current + 5, `(${prev} + 5)`);
//		}	
//	}
//	return find(1, '1');
//}
//
//console.log(findSol(13));
//console.log(findSol(24));
//console.log(findSol(32));

/* FIND MIN */
//function min(param1, param2) {

 //   if (param1 === param2) {
 //   	console.log('Same number');
 //   	return;
 //   } else if (param1  < param2) {
 //   	return param1;
 //   } else {
 //   	return param2
 //   }

//}

//console.log(min(0,10));
//console.log(min(0,-10));
//console.log(min(5,5));

/* RECURSION */
//var isEven = function(num) {
//	let even;
//	if (num === 0) {
//		return true;
//	} else if (num === 1 || num < 0){ 
//		return false;
//	} else {
//		return isEven(num-2);
//	}
//};
//
//console.log(isEven(50));
//console.log(isEven(75));
//console.log(isEven(-1));

function countBs(string) {
	let bCount = 0;
	for (i=0; i<string.length; i++) {
		if (string[i] === 'B') {
			bCount++;
		}
	}
	return bCount;
}

function countChar(string, char) {
	let count = 0;
	for (i=0; i<string.length; i++) {
		if (string[i] === char) {
			count++;
		}
	}	
	return count;
}
//console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
console.log(countChar('kfc', 'm'));
console.log(countChar('dessertrose', 's'));
