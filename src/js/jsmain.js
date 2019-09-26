

var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
	guess = prompt('Enter number for hit 0-9'); // значение null
	if(guess < 0 || guess > 9){ //оператор || или
		alert('Not correct number');
	}else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
			hits = hits + 1;
			if(hits == 3){
				isSunk = true;
				document.write('Ship is sunked!');
			}
		}else{
			alert('miss');
		}
	}
}

/*-----------------Калькулятор---------------------------*/
/* var x = prompt('enter first number');
var z = prompt('enter operation');
var y = prompt('enter second number');

var x = parseInt(x); //переводит текстовое значение в числовое
var y = parseInt(y);

var result;

switch(z){ // ===
	case '+': result= x+y;
		break;
	case '-': result= x-y;
		break;
	case '*': result= x*y;
		break;
	case '/': result= x/y;
		break;
	default: document.write('not correct');
}
document.write(result); */

/*--------------------------------------------*/
/* var x = prompt('Enter number 1-5')

switch(x){ // === эквивалентно жёсткому равенству
	case '1': document.write('thats one');
		break;
	case '2': document.write('thats two');
		break;
	case '3': document.write('thats three');
		break;
	case '4': document.write('thats four');
		break;
	default: document.write('thats enough');
} */
/*--------------------------------------------*/
/* var name = prompt('Enter your name');

document.write('Hello ' + name);
if(name == 'Anton'){
	document.write('Hello Anton');
}else if(name == 'Pit'){
	document.write('Hello Pit');
}else{
	document.write('Hello noname');
} */