// obteniendo informacion por medio del DOM y IDs
// Campos compartidos
const Nombres = document.getElementById("fname")
const Apellidos = document.getElementById("fsurname")
const documento = document.getElementById("Identidad")
const Ndocumento = document.getElementById("Ndocument")
const Ntelefono = document.getElementById("phone number")
const Correo = document.getElementById("email")
const Especialidad = document.getElementById("specialty")
// Campo propio del medico
const Nconsultorio = document.getElementById("Nconsul")

//Llamado de los formularios
const formulariomedicos = document.getElementById("Registro Medicos-form")
const formulariopacientes = document.getElementById("registro_pacientes-form")

class usuario{
    constructos(Nombres, Apellidos, documento, Ndocumento, Ntelefono, Especialidad){
        this.Nombres=Nombres
        this.Apellidos=Apellidos
        this.documento=documento
        this.Ndocumento=Ndocumento
        this.Ntelefono=Ntelefono
        this.Correo=Correo
        this.Especialidad=Especialidad
    }
}
// evento para el el formulario medicos sera enviar
formulariomedicos.addEventListener("submit", function(evento){
    evento.preventDefault()

    let valorNombres = Nombres.value
    let valorApelliodos = Apellidos.value
    let valordocumento = documento.value
    let valorNdocumento = Ndocumento.value
    let valorNconsultorio = Nconsultorio.value
    let valorNtelefono = Ntelefono.value
    let valorCorreo = Correo.value
    let valorEspecialidad = Especialidad.value

    const medico = new usuario(valorNombres, valorApelliodos, valordocumento, valorNdocumento, valorNtelefono, valorCorreo, valorEspecialidad)
    medico.Nconsultorio = valorNconsultorio

    let medicos = []
    console.log(medico)
    alert("medico registrado con exito")

})