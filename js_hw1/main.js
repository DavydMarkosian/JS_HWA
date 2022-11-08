"use strict";
//strings
let s1 = 'hello';
let s2 = 'owu';
let s3 = 'com';
let s4 = 'ua';
console.log('strings:', s1, s2, s3, s4);

//numbers
let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 2.7;
let n6 = 16;
console.log('numbers:', n1, n2, n3, n4, n5, n6);

//const
const PI = 3.14;
console.log('const:', PI);

//boolean
let b1 = 1 !== 2;
let b2 = 1 === 2;
console.log('boolean:', b1, ',', b2);

//my name
let firstName = 'Davyd ';
let middleName = 'Markosian ';
let lastName = 'Robertovich';
// let person=firstName+middleName+lastName;
let person = (`Information: ${firstName}${middleName}${lastName}`);
console.log(person);

//typeof
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = false;
console.log(typeof c);

//exercise 'prompt'
let name = prompt('enter your name:')
console.log(name);
let lastname = prompt('enter your lastname:')
console.log(lastname);
let age = prompt('enter your age:')
console.log(age);
