// Arrays destructuring:
let fruits = ['Apple', 'Banana', 'orange'];
let [a,b,c] = fruits;
console.log(a,b,c);
console.log(a,fruits[1],c);

// objects destructuring:
let users = {userName : 'Marcelo', age : 40};
let {userName, age} = users;
console.log(userName,age);
console.log(userName,users.age);

// spread operator:
let person = {name: 'Marcelo', age: 40};
let country = 'Argentina';

let data = {id: 1, ...person, country};
console.log(data);

// rest
function sum (num, ...values){
    console.log(values);
    console.log(num + values[1]);
    return num + values[1];
}
sum (1,1,2,3,4);
