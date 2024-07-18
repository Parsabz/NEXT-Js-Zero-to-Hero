// notes made from this tutorial https://www.youtube.com/watch?v=m55PTVUrlnA&t=300s

// Arrow Functions

function DoSomething() { //normal function
｝
const DoSomething = () => { //Arrow Function
}

// Annonymous Functions (React thing-A function without a name)

‹button
onclick=｛G） ＝> {
console. log ("hello world");
}}
></button>;

// ternary operators

let age = 16;
let name = age >10 && "Pedro"; //shorten if
let name = age >10 || "Pedro"; //shorten notif

//elseif shorten
let age = 16;  
let name = age >10 ? "Pedro" : "Jack";
const Component = () {
    return age > 10 ? <div> Pedro </div> : ‹div> Jack </div>;
};

//Objects > destructing 

const person =
{
name: "Pedro",
age: 20,
isMarried: false,
};
const { name, age, isMarried ｝= person;


//Objects > destructing  2

const person = {
name:"Pedro",
age:20,
isMarried: false,
};
const person2 = {...person, name: "Jack"} //picking one object and change a variable inside it and making a new object

const names = ["Pedro", "'Jack", "Jessica"]; //you can do this way of editing for arrays as well
const names2 = [...names, "Joel"]; 

