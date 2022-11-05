let firstObject = {a: 5, b: 'sometext'};
console.log(firstObject);
let copyOfObject = firstObject;
console.log(copyOfObject);
copyOfObject.a = 10;
console.log(copyOfObject);
copyOfObject.c = 2 > 1;
console.log(copyOfObject);

const data = {city: 'Madrid'};
console.log(data);
data.city = 'Barcelona';
console.log(data);
data.direction = 'Antonio Leyva';
data.time = 'for 1 years';
console.log(data);
delete data.city;
console.log(data)
data['city'] = 'Anycity';
console.log(data);

