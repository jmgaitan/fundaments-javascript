var Juan_Manuel = {
    nombre: 'Juan Manuel',
    edad: 25
}
var Emanuel = {
    nombre: 'Emanuel',
    edad: 24
}

function imprimirNameYear(persona) {
    /*var {nombre} = persona 
    var {edad} = persona  esto es igual a >*/
     var {nombre,edad} = persona   
    console.log(`mi nombre es ${nombre} y tengo ${edad} años`)
}
imprimirNameYear(Juan_Manuel)
imprimirNameYear(Emanuel)


