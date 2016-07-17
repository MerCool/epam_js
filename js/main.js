"use strict";

alert('Внимание! Результат выполнения JS функций смотри в консоле браузера!');

/* 1.1 */
(function infinityParameters() {
	var i = 0, res, j;
	var arr = arguments;
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
})('1', '2', '3');


/* 1.2 */
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


/* 1.3 */
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

/* 2 */
(function TimeToChampionShip(){
	function getLastDayOfMonth(year, month) {
	  var date = new Date(year, month + 1, 0);
	  return date.getDate();
	}
	function declension(num, expressions) {
		var result, count;
		count = num % 100;
		if (count >= 5 && count <= 20) {
			result = expressions['2'];
		} else {
			count = count % 10;
			if (count == 1) {
				result = expressions['0'];
			} else if (count >= 2 && count <= 4) {
				result = expressions['1'];
			} else {
				result = expressions['2'];
			}
		}
		return result;
	}
	function timing(set_date) {
		var to_date = new Date(set_date);
		var cur_date = new Date();
		var last_day;
		var years, monthes, days, hours, minutes, seconds;
		
		if(to_date.getFullYear() > cur_date.getFullYear()) {
			years = to_date.getFullYear() - cur_date.getFullYear() - 1;
		}
		else {
			years = 0;
		}
		
		if(to_date.getMonth() > cur_date.getMonth()) {
			monthes = to_date.getMonth() - cur_date.getMonth() - 1;
		}
		else {
			if(years > 0) {
				monthes = 11 - cur_date.getMonth() + to_date.getMonth();
			}
			else {
				monthes = 0;
			}
		}
		
		if(to_date.getDate() > cur_date.getDate()) {
			days = to_date.getDate() - cur_date.getDate() - 1;
		}
		else {
			last_day = getLastDayOfMonth(to_date.getFullYear(), to_date.getMonth()-1);
			days = last_day - cur_date.getDate() + to_date.getDate();
		}
		
		if(to_date.getHours() > cur_date.getHours()) {
			hours = to_date.getHours() - cur_date.getHours() - 1;
		}
		else {
			hours = 24 - cur_date.getHours() + to_date.getHours();
		}
		
		if(to_date.getMinutes() > cur_date.getMinutes()) {
			minutes = to_date.getMinutes() - cur_date.getMinutes() - 1;
		}
		else {
			minutes = 59 - cur_date.getMinutes() + to_date.getMinutes();
		}
		
		if(to_date.getSeconds() > cur_date.getSeconds()) {
			seconds = to_date.getSeconds() - cur_date.getSeconds() - 1;
		}
		else {
			seconds = 59 - cur_date.getSeconds() + to_date.getSeconds();
		}
		
		years = years + declension(years, [' год' ,' года',' лет']);
		monthes = monthes + declension(monthes, [' месяц' ,' месяца',' месяцев']);
		days = days + declension(days, [' день' ,' дня',' дней']);
		hours = hours + declension(hours, [' час' ,' часа',' часов']);
		minutes = minutes + declension(minutes, [' минута' ,' минуты',' минут']);
		seconds = seconds + declension(seconds, [' секунда' ,' секунды',' секунд']);
		
		console.log(years+':'+monthes+':'+days+':'+hours+':'+minutes+':'+seconds);
	}
	setInterval(function() {
	  timing("2018-07-15 00:00:00");
	}, 1000);
})();

/* 3 */
window.onload = function() {
	(function calendar(yrs, mnth) {
		var date = new Date();
		var year = yrs;
		var month = mnth-1;
		var today = date.getDate();
		var first_day = new Date(year,month,1);
		var first_wday = first_day.getDay();
		var oneHour = 1000 * 60 * 60;
		var oneDay = oneHour * 24;
		var nextMonth = new Date(year, month + 1, 1);
		var last_day = Math.ceil((nextMonth.getTime() - first_day.getTime() - oneHour)/oneDay);
		var month_array = new Array ("Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь","Ноябрь", "Декабрь");
		var body = document.getElementsByTagName("body")[0];
		var day_table = document.createElement("table");
		var i,j,z,c;

		day_table.style.borderStyle = "solid";
		day_table.bgColor = "grey";
		body.appendChild(day_table);
		  
		day_table.innerHTML = "<tr><td colspan=7 rowspan=1>"+month_array[month]+"</td></tr>"+
		"<tr bgcolor='blue'><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>";
		for (var k = 0; k < 6; k++) {
			day_table.innerHTML+="<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
		}
			  
		for (i=1;i<last_day;i++) {
			var td_d = document.getElementsByTagName("td");
			if (i == first_wday) {
				td_d[0].innerHTML = month_array[month];
				td_d[0].bgColor = "pink";
				td_d[0].align = "center";
				td_d[7+i].innerHTML = 1;

				  
				for (j = 0;j<last_day;j++) {
					td_d[7+i+j].innerHTML = 1+j;
				}

				for (c = 8; c<50;c++) {
					if (td_d[c].innerHTML==0) {
						td_d[c].visibility="hidden";
					} else {
						td_d[c].bgColor="white";
					}	
				}
				
				for (z=0;z<last_day;z++) {
					if (td_d[z].innerHTML==today) {
						td_d[z].bgColor="red";
					}
				}
			}
		}
	})(2016, 7);
}













