const anotherFunction = (num) => {
    return new Promise((resolve, reject) => {
        if (num >= 3){
            resolve('Heyy');
        }else{
            reject('Whooops');
        }
    })
}
anotherFunction(3)
    .then(response => console.log(response))
    .catch(err => console.log(err));