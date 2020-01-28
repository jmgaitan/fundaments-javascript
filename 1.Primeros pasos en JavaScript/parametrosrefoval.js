var Juan_Manuel = {
    nombre: 'Juan Manuel',
    edad: 25
}
var Emanuel = {
    nombre: 'Emanuel',
    edad: 24
}



function sumarEdad(persona) {
    return{
        ...persona,
        edad: persona.edad +1
    }

}
//Si queremos un nuevo objeto modificado debemos
newobj = sumarEdad(Juan_Manuel)