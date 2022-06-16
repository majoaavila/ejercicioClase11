/*  Lista de ejercicios realizados:
01.- Del siguiente objeto: */
var student1 = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
// 1. Muestra en pantalla el valor de la propiedad name mediante dot notation
console.log('EJERCICIO 01');
console.log(student1.name);
// 2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
console.log(student1['age']);
// 3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
student1['name'] = 'Steve Jobs';
console.log(student1.name);
console.log('____________________________')


// 02.- Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
// Objeto de muestra:
var student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// altenativa
// for (const property in student) {
//     console.log(property);
// }
console.log('EJERCICIO 02');
console.log(Object.keys(student2));
console.log('____________________________')


// 03.- Verifica si la propiedad name se encuentra dentro del siguiente objeto:
var student3 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log('EJERCICIO 03');
console.log(student3.name)
console.log('____________________________')


// 04.-Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto.
// Imprima también el objeto antes o después de eliminar la propiedad. Objeto para usar:
var student4 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log('EJERCICIO 04');
delete student4.rollno;
console.log(student4)
console.log('____________________________')


// 05.- Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
// La nueva edad debe ser 35.
var student5 = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};


console.log('EJERCICIO 05');
// no sirvio: Object.defineProperty(student5, 'age', {
//     writable: true,
//     age: 35,
//     enumerable: true
// })
student5.age = 35
console.log(student5)
console.log('____________________________')

// 06.- Escriba un programa para añadir una nueva propiedad al siguiente objeto:
// La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
var student6 = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

console.log('EJERCICIO 06')
//opcion 1
Object.defineProperty(student6, 'pet1', {
    value: 'cat',
    enumerable: true
});
//opcion 2
student6.pet2 = 'dog'
console.log(student6);
console.log('____________________________')


// 07.- Crea un código para llenar un objecto vacio:
// Con las siguiente propiedades:
// color
// tamaño
// peso
// cantidad

console.log('EJERCICIO 07')
const objeto = {
    color: 'azul',
    tamaño: 'mediano',
    peso: '5kg',
    cantidad: '2'
}
console.log(objeto);

///////////////////////////////////////////////////////////////////////
// What’s the result of executing this code and why.
//undefined: porque la variable a, no esta definida aun
//2: porque esta imprimiendo la funcion foo, que retorna ese valor
function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}
test();



//  What is result?
//nada porque no se esta imprimiendo nada.
var a = 1;

function someFunction(number) {
    function otherFunction(input) {
        return a;
    }

    a = 5;

    return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);


// What is the result of the following code? Explain your answer.
//2: porque  se esta regresando la variable a, de la cual, toma el ultimo valor asignado
var a = 1
function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }

    return bar;
}
var baz = foo();
baz();


// What will you see in the console for the following example?
//nada porque a return le falta lo que va a regresar.
var a = 1;
function b() {
    a = 10;
    return;
    function a() { }
}
b();




