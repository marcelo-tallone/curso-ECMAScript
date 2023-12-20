//Se muestra como se seteaban valores por defecto antes de ES6:
function newUser (name, age, country) {
    name = name || 'Oscar';
    age = age || 21;
    country = country || 'Argentina';
    console.log(name, age, country);
}
newUser();
newUser('Gabriel',13,'Colombia');
newUser('Marcelo',40);
newUser('Miguel','','Peru');

// Ejemplo nueva forma de hacerlo post ES6:
function newUser2 (name = 'Marcelo', age = 40, country = 'Argentina') {
    console.log(name, age, country);
}
newUser2();
newUser2('Juan',43,'Chile');
newUser2('Juan',43,);
newUser2('Juan',null,'Uruguay');