myArray = [1,2,3,"4"];
myArray.forEach(function(item, index) {
	console.log(`index ${index} is ${item}`);
	}
);

sum=0;
myArray.forEach(function(item, index) {
	sum += item;
	console.log(`index ${index} is ${item}, running total is ${sum}`);
	}
);

myArray.forEach(function(item, index) {
	console.log( (typeof item == 'string' && item.length > 0)?true:false ) ;
	}
);