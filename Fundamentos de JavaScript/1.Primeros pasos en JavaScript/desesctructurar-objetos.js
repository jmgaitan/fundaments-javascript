var Juanma = {
    nombre: 'juan Manuel',
    Apellido: 'Gaitan',
    Edad: 25
}

function imprimirNombreMayuscula(persona) {
    //var nombre = persona.nombre 
    var {nombre} = persona //referenciamos la variable directamente al atributo de persona que corresponde al mismo nombre
    console.log(nombre.toUpperCase())
}

imprimirNombreMayuscula(Juanma)
//actividad:
//Hola, me llamo Var1.nombre y tengo var1.edad años
//Hola, me llamo Var2.nombre y tengo var2.edad años