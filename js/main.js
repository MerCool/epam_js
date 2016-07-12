"use strict";

alert('Внимание! Результат выполнения JS функций смотри в консоле браузера!');

(function infinityParameters(arr) {
	var i = 0, res, j;
	var length = arr.length;
	
	if(typeof arr[0] === 'number') {
		res = 0;
		for (i; i<length; i++) {
			if(typeof arr[i] === 'number') {
				res = res + arr[i];
			}
			else {
				console.log('Разные типы данных!');
				return false;
			}
		}
		console.log(res);
		return true;
	}
	else if(typeof arr[0] === 'string') {
		res = '';
		for (i; i<length; i++) {
			if(typeof arr[i] === 'string') {
				res = res + arr[i];
			}
			else {
				console.log('Разные типы данных!');
				return false;
			}
		}
		console.log(res);
	}
	else if(arr[0] instanceof Array) {
		res = [];
		j = 0;
		for (i; i<length; i++) {
			if(arr[i] instanceof Array) {
				j = j + res.length;
				res = res.concat(res, arr[i]);
			}
			else {
				console.log('Разные типы данных!');
				return false;
			}
		}
		res = res.slice(j);
		console.log(res);
	}
	else {
		console.log('Ошибка! Функция принимает значения одного типа: или числа, или строки, или массивы!');
		return false;
	}
	
	return res;
})([ '1', '2', '3' ]);


(function number_format(num) {
	num = num.toString();
	
	var arr = num.split('.');
	var arr2 = [];
	var j = 0;
	var drob;
	var i;
	var length = arr[0].length;
	
	for(i=length; i>=0; i--) {
		arr2.push(arr[0][i]);
		if(j == 3) {
			arr2.push(' ');
			j = 0;
		}
		j++;
	}
	
	arr2.shift();
	arr2.reverse();
	
	if(arr[1]) {
		if(arr[1].length > 2){
			if(arr[1][2] > 5) {
				drob = (arr[1][0]+arr[1][1])*1 + 1;
			}
			else {
				drob = (arr[1][0]+arr[1][1])*1;
			}
		}
		else {
			drob = arr[1];
		}
		console.log(arr2.join('')+','+drob);
		return arr2.join('')+','+drob;
	}
	else {
		console.log(arr2.join(''));
		return arr2.join('');
	}
	
	
})(1234567.1689);


(function strSearch(arr, substring) {
	var i = 0;
	var length = arr.length;
	for(i; i<length; i++) {
		if(arr[i].toLowerCase().indexOf(substring.toLowerCase()) + 1) {
		   console.log(arr[i]);
		   return true;
		}
	}
	return false;
})(['342', '134A6', '4579'], '4a');















