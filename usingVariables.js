
/**************************************************************
   Flow Control (Using variables)
**************************************************************/
/*
var name = 'Nando';
console.log(name);

var lastName = 'Gomez';
console.log(lastName);

var age = 25;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

/* Dynamically typed language means that you can change the type of variables anytime by just assigning a new type */

var name = 'Nando';
var age = 25;

console.log(name + age);
console.log(age + age);

var occupation, isMarried;

console.log(occupation);

occupation = 'Developer';
isMarried = true;

/*
console.log(name + ' is a ' + age + ' years old ' + occupation + '. Is he married? ' + isMarried + '.');

occupation = 'Coder';
age = 'twenty-nine'
isMarried = true;

console.log(name + ' is a ' + age + ' years old ' + occupation + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last nane');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + occupation + '. Is he married? ' + isMarried + '.');
*/

// Operators

var birthYear = 2017 - 28;

console.log(birthYear);

var now = 2017;
var birthYear = now - 29;

console.log(birthYear);

var myAge = 30;

myAge *= 3;

console.log(myAge);

/**************************************************************
   Flow Control (If/else statements)
**************************************************************/   

var nanme = 'Nando';
var age = 29;
var isStudent = 'no';

if (isStudent === 'yes') {
console.log(name + ' is a student!');
} else {
    console.log(name + ' will hopefully be a student soon :)');
}

// Using == does type-coercion, meaning that the type of value on the left will change to that
// of the the right:

if (30 == "30") {
    console.log('JavaScript used type coercion');

}
else {
    console.log("The type didn't change!");
}

// using === is safer. This treats the 30 on the left as a number and the 30 on the right as a string.
if (30 === "30") {
    console('Nothing should happen here');
}

/**************************************************************
   Flow Control (Switch Statement)
**************************************************************/

var occupation = "Developer";

// occupation = prompt('What do you do?');

switch(occupation) {

    case 'Developer':
    console.log('You create cool Software');
    break;
    case 'Uber Driver':
    console.log('You drive people around');
    default:
    console.log('Find a job');
}

/**************************************************************
   Practice
**************************************************************/

var height1 = 160;
var height2 = 180;

var age1 = 25;
var age2 = 30;

height1 = prompt("input player 1 height");
age1 = prompt("input player 1 age");

height2 = prompt("input player 2 height");
age2 = prompt("input player 2 age");


if ( (height1 + 5 * age1) > (height2 + 5 * age2)) {
    console.log("Player 1 wins");

} else if ((height1 + 5 * age1) === (height2 + 5 * age2))  {
    console.log("Draw!");
} else {
    console.log("Player 2 wins");
}

