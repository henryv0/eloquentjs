//let triangles = '#';
//
//for (let i=0; i<7; i++) {
//	console.log(triangles);
//	
//	triangles += '#'
//}

/* Fizzbuzz */

function createFizzBuzzBang(length, fizzNum, buzzNum, bangNum) {

	let fizzBuzzBang = '';
	for (i=1; i<=length; i++) {
		if (i % fizzNum === 0) {
			fizzBuzzBang += 'Fizz';
		}
		if (i % buzzNum === 0) {
			fizzBuzzBang += 'Buzz';
		}
		if (i % bangNum === 0) {
			fizzBuzzBang += 'Bang';
		}
		if (i % fizzNum !== 0 && i % buzzNum !== 0 && i % bangNum !== 0) {
			fizzBuzzBang += i;
		} 	
	}
	console.log(fizzBuzzBang);
}

createFizzBuzzBang(20,3,5,10);

/* Chessboard */
function createChessboard(size) {

	let board = '';
	for(let i=1; i<=size*size; i++) {

		if (i % 2 === 0) {
			board += '#';
		} else {
			board += ' ';
		}
//		if (i % size === 0) {
//			board += '\n';
//			i++;
//		}
		
	}

	console.log(board);
}

function printChessboard(size) {
	let board = '';
	for (let i=0; i<size; i++) {
		
		for (let j=0; j<size; j++) {
			console.log(i+j);
		}
		//if (i % 2 === 0) {
		//	for (let j=0; j<size; j++) {
		//		if (j % 2 === 0) {
		//			board += ' ';
		//		} else {
		//			board += '#';
		//		}
		//	}
		//} else {
		//	for (let j=0; j<size; j++) {
		//		if (j % 2 === 0) {
		//			board += '#';
		//		} else {
		//			board += ' ';
		//		}
		//	}
		//}
		
		board += '\n';
	}
	console.log(board);
}
// createChessboard(8);
//console.log('6: ');
//printChessboard(6);
//
//console.log('8: ');
//printChessboard(8);
//
//console.log('31: ');
//printChessboard(31);
