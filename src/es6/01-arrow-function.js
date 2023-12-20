// Ahora vamos a ver 3 formas de estibir una función, para ver como se pueden usar las arrow functions:

// esta sería una función "clásica":
function square1 (num){
    return num * num;
}
square1(2);
// Esta sería una funcion normal con arrow function:
const square2 = (num) => {
    return num * num;
}
square2(3);
// Esta es una forma avreviada de arrow function pero solo se puede si hay una sola variable en la funcion y
// el contenido de la misma es solo la linea de return
const square3 = num => num * num;
square3(4);