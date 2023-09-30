//Las funciones se definen mediante la palabra function

//Funciones declaradas: Hacen parte del ambito global, es decir que estan disponibles en cualquier parte el codigo!!!

saludar("Maria", "45")

//Una funcion siempre debe tener un nombre al cual yo puedo llamarla más tarde si es necesario
//Los parametros, son cual dato que yo necesite para ejecutar la funcion, no son obligatorio ()
/*Estructura de una función declarada:
    function nombreFuncion(parametros){
        Logica de la aplicación
}*/
function saludar(nombre,edad){
    console.log(`Hola! Mi nombre es ${nombre} y mi edad es ${edad}`)
}

saludar("Liliana", "32")
saludar("Sebastian", "26")

console.log(sumar(67,32))

function sumar(a,b){
    //Valor de retorno: Es el valor que va a devolver la función una vez sea llamada
    return (a+b)
}

let resultado=sumar(2,6)

console.log(resultado)

//Funciones expresadas: Hacen parte del ambito local, es decir que solo estarán disponibles una vez las haya creado. NO ANTES, NUNCA ESTAN DISPONIBLES ANTES DE QUE SE CREEN

/*const nombreFuncion = function(parametros){
    Codigo que se desee ejecutar
}*/

const despedir = function (){
    return "Muchas gracias por utilizar la app! Hasta luego."
}

console.log(despedir())

//Ejemplo: Crear una funcion declarada que devuelva el nombre de mi mascota y cuantos años tiene

function saludarMascota(nombre, edad){
    return (`Hola, mi mascota es ${nombre} y tiene ${edad} años`)
}

console.log(saludarMascota("Tara", "5"))

//Ejercicio: Crear una funcion EXPRESADA que devuelva el nombre de ustedes, el nombre de sus mascotas y la edad de nosotros

const saludarDos = function(nombreMascota, nombre, edad){
    return `Hola, me presento. Mi nombre es ${nombre} y mi edad es ${edad}. Finalmente, mi mascota se llama ${nombreMascota}`
}

console.log(saludarDos("Tara", "Liliana", 32))

// Según lo anterior haga un código que haga una función expresada para cada una de las siguientes
// operaciones:
// 1. Suma.
// 2. Resta.
// 3. Multiplicación.
// 4. División
// Para seleccionar la operacion que se quiere realizar haga un menu con la estructura de control switch

const calcularSuma = function(a,b){
    return (a+b)
}

const restar = function(a,b){
    return (a-b)
}

const multiplicar = function(a,b){
    return (a*b)
}

const dividir = function(a,b){
    let operacion = (b==0) ? "No es posible la division por 0" : (a*b)
    return operacion
}

//Aletas: Puede mostrar salidas o información
//Prompt: Permiten ingresar información

// alert("Hola! Esta es mi primera alerta")
// let mensaje = prompt("Hola, es es mi primer prompt. Por favor deja tu mensaje")
// alert(mensaje)

let opcion = prompt("Seleccione 1. Suma, 2. Resta, 3. Mulplicación, 4. División")

let num1=6, num2=8;
switch (opcion){
    case "1":
        alert(calcularSuma(num1,num2))
        break;
    case "2":
        alert(restar(num1,num2))
        break;
    case "3":
        alert(multiplicar(num1,num2))
        break;
    case "4":
        alert(dividir(num1,num2))
        break;
    default:
        alert("Opccion no valida")
        break;
}

let numero = 1
//Metodo para pasar de tipo numero a tipo string o caracter
console.log(numero.toString())

let numeroTexto = "2"
// parseInt es el metodo para pasar de texto a el tipo de dato entero
// parseFloat es el metodo para pasar de texto a tipo de dato Real o que reciba decimales
console.log(parseInt(numeroTexto))