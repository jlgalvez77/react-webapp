

function sayHello(name = 'Invitado', age = 0){
    const greeting = `Hello ${name} edad: ${age}!`;
    //console.log('Hola mundo function!!!');
    return greeting;
}

const result = sayHello('José', 47);

console.log(result);

const sayHello2 = (name = 'Invitado', age = 0) => {
    return `Hello ${name} edad: ${age}!`;
}

const result2 = sayHello2('José', 47);

const add = (a, b) => a + b;
console.log(add(5, 3));