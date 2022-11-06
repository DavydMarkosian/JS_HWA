//exercise 1
let firstArr = [];
firstArr[0] = true;
firstArr[1] = 1;
firstArr[2] = -2;
firstArr[3] = 300;
firstArr[4] = '4some';
firstArr[5] = '5word';
firstArr[6] = false;
firstArr[7] = true;
firstArr[8] = {name: 'Davyd', password: 1234};
firstArr[9] = 876;
console.log('exercise 1:', firstArr);

//exercise 2
let book1 = {
    title: 'title1',
    pageCount: 100,
    genre: 'comedy'
}
let book2 = {
    title: 'title2',
    pageCount: 200,
    genre: 'horror'
}
let book3 = {
    title: 'title3',
    pageCount: 300,
    genre: 'drama'
}
console.log('exercise 2:', book1,book2,book3);

//exercise 3
let book4 = {
    title: 'title4',
    pageCount: 400,
    genre: 'comedy',
    author:[{name:'Davyd',age:40},{name:'Ibrahim',age:40}]
}


let book5 = {
    title: 'title5',
    pageCount: 500,
    genre: 'horror',
    author:[{name:'Isaak',age:50},{name:'Ahmed',age:50}]
}

let book6 = {
    title: 'title6',
    pageCount: 600,
    genre: 'drama',
    author:[{name:'Luka',age:60},{name:'Petr',age:60}]
}

console.log('exercise 3:',book4,book5,book6)

//exercise 4
let users=[
    {name1:'Vasi',userName:'vasia',password:'1234'},
    {name:'Vasi2',userName:'vasia2',password:'7653'},
    {name:'Vasi3',userName:'vasia3',password:'2479'},
    {name:'Vasia4',userName:'vasia4',password:'9546'},
    {name:'Vasia5',userName:'vasia5',password:'8757'},
    {name:'Vasia6',userName:'vasia6',password:'0794'},
    {name:'Vasia7',userName:'vasia7',password:'1234'},
    {name:'Vasia8',userName:'vasia8',password:'9865'},
    {name:'Vasia9',userName:'vasia9',password:'8790'},
    {name:'Vasia10',userName:'vasia10',password:'0986'},
];
console.log('exercise 4:');
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
