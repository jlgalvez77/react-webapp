
let firstname = 'José';
firstname = 'Juan';

const lastname = 'Pérez';
//lastname = 'Gómez'; // Error no se puede reasignar una constante

const condicion = true;

if ( condicion ) {
    const lastname = 'Gómez';
    console.log(lastname);
}

console.log( 'Hola mundo!!! ' + firstname + ' ' + lastname);
console.log( `Hola mundo!!! ${firstname} ${lastname}` );

