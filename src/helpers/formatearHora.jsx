export const formatearHora = hora => {
// Crear un objeto Date
    const ahora = new Date();

    // Obtener las partes de la hora
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    
    // Formatear la hora
    const horaFormateada = horas + ':' + minutos;
    
    return horaFormateada
}

export const extraerHora = hora => {
// Crear un objeto Date
const ahora = new Date();

// Obtener las partes de la hora
const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();

// Formatear la hora
const horaFormateada = horas ;




// Cadena original
const cadena = hora;

// Dividir la cadena en un array usando ":" como delimitador
const partes = cadena.split(':');

// Recuperar solo la parte antes del ":" (es decir, el primer elemento del array)
const parteAntesDelDosPuntos = horas +':'+ partes[1] + ':00'; 


// console.log("Parte antes del ':' : " + parteAntesDelDosPuntos);
return parteAntesDelDosPuntos

}