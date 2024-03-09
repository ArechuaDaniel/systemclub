export const formatearFecha = fecha => {
    // Creamos un objeto Date con la fecha actual
    var fecha = new Date(fecha);

    // Obtenemos el año, mes y día de la fecha actual
    var año = fecha.getFullYear();

    // El mes es devuelto en base 0 (enero es 0, febrero es 1, etc.), así que sumamos 1 para obtener el mes actual.
    var mes = fecha.getMonth() + 1;
    // Si el mes es menor a 10, añadimos un '0' al principio para mantener el formato de dos dígitos.
    mes = mes < 10 ? '0' + mes : mes;

    var dia = fecha.getDate();
    // Si el día es menor a 10, añadimos un '0' al principio para mantener el formato de dos dígitos.
    dia = dia < 10 ? '0' + dia : dia;

    // Concatenamos los componentes de la fecha en el formato deseado
    var fechaFormateada = año + '-' + mes + '-' + dia;
    return fechaFormateada
}
export const edadFecha = fecha => {
    const fechaActual = new Date()
    const fechaNacimientoObj = new Date(fecha);

    const diferenciaTiempo = fechaActual - fechaNacimientoObj;
    const edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));
    return edad
}
export const formatearMes = fecha => {
    // Creamos un objeto Date con la fecha actual
    var fecha = new Date(fecha);

    // Obtenemos el año, mes y día de la fecha actual
    var año = fecha.getFullYear();

    // El mes es devuelto en base 0 (enero es 0, febrero es 1, etc.), así que sumamos 1 para obtener el mes actual.
    var mes = fecha.getMonth() + 1;
    // Si el mes es menor a 10, añadimos un '0' al principio para mantener el formato de dos dígitos.
    mes = mes < 10 ? '0' + mes : mes;

    var dia = fecha.getDate();
    // Si el día es menor a 10, añadimos un '0' al principio para mantener el formato de dos dígitos.
    dia = dia < 10 ? '0' + dia : dia;

    // Concatenamos los componentes de la fecha en el formato deseado
    var fechaFormateada =  año + '-' + mes;
    return fechaFormateada
}


export const formatearMesNombre = fecha => {
    var meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ];


    // Creamos un objeto Date con la fecha actual
    var fecha = new Date(fecha);

    // Obtenemos el año, mes y día de la fecha actual
    var año = fecha.getFullYear();

    // El mes es devuelto en base 0 (enero es 0, febrero es 1, etc.), así que sumamos 1 para obtener el mes actual.
    var mesNumero= fecha.getMonth();
    // Si el mes es menor a 10, añadimos un '0' al principio para mantener el formato de dos dígitos.
    //mes = mes < 10 ? '0' + mes : mes;
    
    var mesNombre = meses[mesNumero];

    // Concatenamos los componentes de la fecha en el formato deseado
    var fechaFormateada =  mesNombre + '-' + año;
    return fechaFormateada
}
