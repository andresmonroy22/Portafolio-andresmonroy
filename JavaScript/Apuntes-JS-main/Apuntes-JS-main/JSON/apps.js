//Creación de un objeto persona
const persona ={
    //Propiedades
    nombre: "Jennifer",
    apellido: "Martinez",
    edad: 26,
    estatura: 1.65,
    peso: "65kg",
    sexo: "F",
    fechaNacimiento: "02/10/1997",
}

//Accediendo a la informacion del objeto
//Para acceder a la información de un objeto lo hacemos de la siguiente manera
// nombreObjeto.nombrePropiedad
console.log(persona.nombre)
console.log(persona.estatura)

//Modificando una propiedad
console.log(persona.peso)
persona.peso="60kg"
console.log(persona.peso)

//Apregando una nueva propiedad al objeto
persona.ciudad="Bogotá"
console.log(persona)

//Pasando de objeto en JS a formato JSON
let objeto_json = JSON.stringify(persona)
console.log("Objeto persona convertido a JSON:")
console.log(objeto_json)

//Pasando de formato JSON a objetos
let json_objeto = JSON.parse(objeto_json)
console.log("JSON persona convertido de nuevo a objeto")
console.log(json_objeto)