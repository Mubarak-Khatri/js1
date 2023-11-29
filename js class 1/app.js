var Math = +prompt("Enter Your Math Marks");
var urdu = +prompt("Enter Your urdu Marks" );
var english = +prompt("Enter Your english Marks");
var science = +prompt("Enter Your science Marks" );
var bio = +prompt("Enter Your biology Marks");


var res = Math+urdu+english+science+bio



var par = (res/ 500) * 100
alert( "Total Score "+" "+ res+ "\n"+ "Parsentage "+par+ "%");