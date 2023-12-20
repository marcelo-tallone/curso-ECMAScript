// Forma clásica de concatenar strings antes de ES6:
let hello = 'Hello';
let world = 'world';
let helloWorld = hello + ' ' + world + '!!';
console.log(helloWorld);

// Template literals:
let hello2 = 'Hello';
let world2 = 'world';
let helloWorld2 = `${hello2} ${world2}!!!`;
console.log(helloWorld2);

// Multi-line strings clasico antes de ES6:
let lorem = 'Esto es una linea \n'  + 'Esto es otra linea';
console.log(lorem);

// Multi-line strings post ES6:
let lorem2 = `esto es una nueva linea
y esto es otra`;
console.log(lorem2);