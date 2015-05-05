'use strict';

var isPrime = function(num){
	for(var i = 2; i < num; i++){
			if(num % i == 0){
				return false;
			}
	}
	return true
};

var nth = function(num){
	var results = [];
	if(num == 0){throw new Error("Prime is not possible");}
	for(var i = 2; results.length < num; i++){
		if (isPrime(i)){ results.push(i)}
	}
	return results[results.length-1];
};
