// antes de ES6 se debía poner:
function newUser(name, age, country, uId){
    return {
        name: name,
        age: age,
        country: country,
        id: uId
    }
}
console.log(newUser('Marcelo', 40, 'Argentina',1))

// Con ES6 se puede poner:
function newUser(name, age, country, uId){
    return {
        name,
        age,
        country,
        id: uId
    }
}
console.log(newUser('Marcelo', 40, 'Argentina',1))