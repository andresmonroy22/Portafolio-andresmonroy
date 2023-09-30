//Para definir una variable global utilizo var
var variable="Nombre variable"
// Para imprimir el valor de la variable en consola utilizo console.log()
console.log(variable)
console.log("Hola mundo! Es mi primera aplicación")

variable="Segundo nombre de la variable"
console.log(variable)

variable=2345678
console.log(variable)

var variableDos;
console.log(variableDos)

variableDos="Segunda variable"
console.log(variableDos)

//Variables locales
//Un bloque de codigo es cualquier codigo que este encerrado en llaves
let variableLocal="Segundo valor";
{
    let variableLocal="Primer valor"
    console.log(variableLocal)
    var variableGlobal="Variable global"
    console.log(variableGlobal)
}
console.log(variableGlobal)
console.log(variableLocal)

let numero = 13;
//Para los booleanos tenemos dos posibles valores:
//True=>Verdadero
//False=>Falso
let booleano=false
let caracteres="Hola mundo!"
let caracter='C'

let nombre="Liliana"
{
    let nombre="Oscar"
    console.log(nombre)
}
console.log(nombre)

var edad=32;
{
    var edad=23;
    console.log(edad)
}
console.log(edad)

// Constantes: es un dato que no va a cambiar

const PI=3.1416
console.log(PI)

console.log("-------------------- Operadores aritmeticos")

//Operadores aritmeticos
let num1, num2, resultado

num1=65;
num2=87;
//Suma
resultado=num1+num2
console.log("El resultado de la suma es: ", resultado)
//Resta
resultado=num1-num2
console.log("El resultado de la resta es: ", resultado)
//Multiplicación
resultado=num1*num2
console.log("El resultado de la multiplicación es: ", resultado)
//División
resultado=num1/num2
console.log("El resultado de la división es: ", resultado)

//Operaciones combinadas
resultado=(num1*num2)/(num2-num1)
console.log("Resultado de (num1*num2)/(num1-num2): ", resultado)

num1=num1+1
//Incremento, aumenta la variable de una unidad
num2++
console.log(num1)
console.log(num2)

//Decremento, quita a la variable una unidad
num1--
num2--
console.log(num1)
console.log(num2)

console.log("-------------------- Operadores comparación")

num1=5;
num2=8;

//Mayor que
resultado=num1>num2;
//Menor que
resultado=num1<num2;
//Mayor o igual que
resultado=num1>=num2
//Menor o igual que
resultado=num1<=num2
//Igual me permite comparar tanto números como caracteres
//== Compara el valor pero no el tipo de dato
//=== Compara el valor y tambien el tipo de dato
resultado=num1==num2
resultado=num1===num2
resultado="Liliana"=="Lili"
//Distinto
resultado=num1!=num2
console.log(resultado)

console.log("-------------------- Operadores logicos")

//El operador Y (AND) &&
//Verdadero => True
//Falso => False
resultado=true && true
//Operador O (OR) ||
resultado=false || false
//Negación !
resultado=!true
console.log(resultado)

//Una variable nula no tiene asignado ningun valor
let variableNula=null;