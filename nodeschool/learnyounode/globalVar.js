var globalVar = 'global var';

function test() {
	console.log(globalVal);  // undefined,  
	var globalVal = 'overrided var';
	console.log(globalVal);   // overrided var
}

test();
console.log(globalVar) ; // global var