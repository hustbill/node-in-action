/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */




var twoSum = function(nums, target) {
	var key,
		value,
		hashmap = [];
  for(var i=0; i< nums.length; i++) {
	hashmap[target-nums[i]]=i;
  }

  for(var j=0; j< nums.length; j++) {
	 if(  hashmap.hasOwnProperty(nums[j])) {
		 var index1 = j+1;
		 var index2 = hashmap[nums[j]] +1;
		 if(index1 != index2) {
			 return [index1, index2];
		 }
	  }
	}
};


var nums= [1, 3, 7, 9, 8];
var target = 10;
var result= twoSum(nums, target);
console.log('[i,j] =' + result);
// printHashmap(hashmap);
//
// // Create the hashmap
// var animal = { };
// //Add keys to the hashmap
// animal[['cat']] = {sound:'meow', age:8};
// animal[['dog']] = {sound:'bark', age:10};
// animal[['bird']] = {sound:'tweet', age:2};
// animal[['cow']] = {sound:'moo', age:5};
//
// for(var x in animal){
// 	console.log('key:\n--' + x );
// 	console.log('Values:');
// 	var value = animal[x];
// 	for(var y in value) {
// 		console.log('--'+ y + ':' + value[y]);
// 	}
// 	console.log('\n');
//
// }
