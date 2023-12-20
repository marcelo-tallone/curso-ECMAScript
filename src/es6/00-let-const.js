//Reasignar variables con var:
var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

//Reasignar variables con let:
let fruit = 'banana';
fruit = 'Kiwi';
console.log(fruit);

//Reasignar variables con const DA ERROR ya que NO SE PUEDE REASIGNAR UN const:
const animal = 'Puma';
animal = 'Mono';
console.log(animal);

// Las var son Globales, pero las let y const solo se pueen ejecutar en el mismo bloque en el que se declaran (en este caso solo pueden ser lladas dentro del if)
const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }
    console.log(fruit1); // function scope
    console.log(fruit2); // block scope
    console.log(fruit3); // block scope

} 
fruits();