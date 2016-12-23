var i = 0; //start
var countLimit = 8;

// while loop
while (i < countLimit) {
	console.log('while: ' + i);
	i++; //the same as i = i + 1
}

// for loop
for (i = 0; i < countLimit; i++) {
	console.log('for: ' + i);
}

// both are ver similar to each other, and also similar to the forEach loop. Howeever, they do not require to be on an Array. We can use for and while loops for Arrays or anything we want.



// Challenge

// Create a function countDown(startingPoint, stopingPoint)

// countDownWhile
function countDownWhile (startingPoint, stopingPoint) {
	while (startingPoint >= stopingPoint) {
	console.log('countDownWhile: ' + startingPoint);
	startingPoint--;
	}
}

countDownWhile(10, 3);


// countDownFor
function countDownFor (startingPoint, stopingPoint) {
	for (startingPoint = startingPoint; startingPoint >= stopingPoint; startingPoint--) {
	console.log('countDownFor: ' + startingPoint);
	}
}

countDownFor(8, 2);
