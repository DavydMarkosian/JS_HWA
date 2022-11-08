//exercise 1
console.log('exercise 1:')
let x = +prompt('enter some number:')
if (x === 0) {
    console.log('nevirno')
} else {
    console.log('virno')
}

// exercise 2.1
console.log('exercise 2.1:');
let time = +prompt('enter number from 0 to 59')
if (time <= 15) {
    console.log('first quarter')
} else if (time <= 30) {
    console.log('second quarter')
} else if (time <= 45) {
    console.log('third quarter')
} else if (time <= 59) {
    console.log('fourth quarter')
}

// exercise 2.2
console.log('exercise 2.2:')
let day = +prompt('enter your date:')
if (day <=10 ) {
    console.log('first decade')
} else if (day <=20 ) {
    console.log('second decade')
} else if (day <=31 ) {
    console.log('third decade')
}

// exercise 3
console.log('exercise 3:')
let whichDay = +prompt('enter day number')
switch (whichDay) {
    case (whichDay = 1) :
        console.log('Monday')
        break;
    case (whichDay = 2) :
        console.log('Tuesday')
        break;
    case (whichDay = 3) :
        console.log('Wednesday')
        break;
    case (whichDay = 4) :
        console.log('Thursday')
        break;
    case (whichDay = 5) :
        console.log('Friday')
        break;
    case (whichDay = 6) :
        console.log('weekends')
        break;
    case (whichDay = 7) :
        console.log('weekends')
        break;
    default:
        console.log('is not found')
}

//------------------------for me, not for mentors--------------------------
// console.log('exercise 4:')
// let a = +prompt('enter first number')
// let b = +prompt('enter second number')
// switch (a>b){
//     case (a>b):
//         console.log(a)
//         break;
//     case(b>a):
//         console.log(b)
//         break;
// case (a=b):
//     console.log('the same:',a,'=',b)
//     break;
//     }
//------------------------for me, not for mentors-------------------------

//exercise 4
console.log('exercise 4:')
let a = +prompt('enter first number')
let b = +prompt('enter second number')
if (a > b) {
    console.log(a)
} else if (b > a)
{
    console.log(b)
} else if(a===b){
    console.log('the same:', a,'=',b)
}
