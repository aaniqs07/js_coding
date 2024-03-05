console.log('Hello World')

let firstname = 'Aaniq'
console.log(firstname);



//practice 
// There are two main Datatype Primitive and obeject
// Primitive: Number, String, Boolean, Undefined, Null
// Object: Array, key value pairs - properties. 
// dataytype define by variable value
// Relational operators are used to compare two values and return a boolean result (true or false) based on the comparison. 
//Examples of relational operators include >, <, >=, <=, ==, and !=.

// Logical operators, on the other hand, are used to combine multiple conditions or values and return a boolean result. 
//The common logical operators in JavaScript are && (AND), || (OR), and ! (NOT).
// Everything is difficult, until you learn it

// Boolean, ++, --, !==, ===,==, !=  datatype
// let x = 10; console.log(typeof x)
// Relational operator ===, ==
// logical operator And Or Not || &&
// let x =, y = 8, z = 9
// result = x < y || x < z
// let n = !result
//  if and else (always work with true or false)

let sales = 5 + 6
console.log(sales)



let salesPrice = 768749 % 4544
console.log(salesPrice)



let fName = 'Aaniq'

let lName = '  Salam  ' + "  Waseem  "

let cityName = 'Karachi'

console.log(fName + '      ' + lName + ' is from ' + cityName)



let sale1 =  '45' + 5

console.log(sale1 + ' data type of sale1 is: ' + typeof sale1)


let toNumb = '5';
let toNumb2 = 5;

// == only check the two values, === checks value and datatype
// Relational operator
console.log(toNumb === toNumb2);

//In programming languages like JavaScript,
//  ++ and -- are unary operators used to increment and decrement a variable by 1

let score = 5;

console.log(score)
// score = score - 1 = score--;
score--;
// score = score + 1 = score++;
score++;
console.log(score)

// increment or decrement of 2
score += 2;
console.log(score);

let num4 = 12, num6 = 12, num5 = 12
console.log(num4 === num6 && num6 === num5)


let checkValue = true
if (checkValue) {
    console.log('True&&&&&&&')
} else {
    console.log('False&&&&&')
}


if ( 'A' === 'A' && 'b'  === ' b' ) {
    console.log('hjkhk')
} else {
    console.log('jhghjhjhj')
}


if ( 'A' !== 'A' || 'b '  !== 'b' ) {
    console.log('first one wil be printed')
} else if ('A' === 'B') { 
    console.log('2nd block will be printed')
} else if ('c' === 'c') {
    console.log('3rd block will be printed')
} else {
    console.log('only will print when none of the above condition is true')
}
