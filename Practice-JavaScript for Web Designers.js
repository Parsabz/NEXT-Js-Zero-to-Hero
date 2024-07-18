// here's would be my notebook for MakingNote/Practicing concepts, you should make one as well if you wanna rock and roll.
// this notebook is following https://www.youtube.com/watch?v=ResWVWI333o tutorial 

//if-else

var age = 70;
// if (age<20) {
console. log( 'Teenager!');
// } else if (age >= 20 && age ‹ 70) { console. log('A young man!');
7 // } else {
console. log('Not so young anymore!');
if (age > 20) {
} else {
console. log('Not a teen anymore!');
console. log( 'Teen!');
age › 20 ? console.log('Not a teen anymore!') : console. log( 'Teen!');
condition ? vall : val2


//Objects

var person = new Object();
person.name = "James" ;
person.age = 43;
person.height = 1.76;
person.married = true;
person["name"] = "Kirk"
person.car = (}:
person.car.make = "Honda";


//Loops

//For Loop
var names = ["George", "Margaret", "Sean"];
for (var x = 1; x <= 10; x++) ;
console.log(x);
for (var y = 0; y < names.length; y++) {
console. log(names[y]);
}


//do-while

var names = ["George", "Margaret", "Sean"];
var x = 0;
do {
console. log(names[x]) ;
x++;
   } while (x < names.length);
do {
console. log(x);
} while (x > 0);
while (X <5) {
console. 10g(x++):
}


//functions

function add (val1, val2) f return val1+val2;
｝
console. log(add(45, 2)) :
var square = function ( number ) 1
return number * number;
console. log(square(2)):

//Variable scope

var x = 3; //Global Scope
function test2() {
var y = 5;
console. log (y):
}
function test() {
var x = 18; //notGlobal Scope
console. log(x);
}
console. 1og(x);
test():
test2();

//Selectors 
var somethinggg= document.getElementsById("item-1") //Ids are uniuqe, using getElementById helps you to pick something from your html file
    somethingggClass= document.getElementsByClassName("classname1") //or if you want to select a class instead of Id
    somethingggTagName= document.getElementByTagName("p") // or if you want to select based on the tag name for example in this case>paragraph 
    images = document.querySelectorA11("img"); // css 

//how to manipulate DOM using js
var firstItem = document.getElementById("item-1"),
    myList = document.getElementsByClassName("mylist"),
    paragraphs = document.getElementsByTagName("₽"),
    images = document.querySelectorA11("img");
firstItem.style.color = "red":
myList[1].style.display = "none";
for (var i=0; i<paragraphs.length; i++) {
paragraphs[il.style.color = "green";
｝




