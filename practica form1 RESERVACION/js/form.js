'use strict';


//declaraciones que se utilizan para seleccionar y almacenar referencias a elementos HTML
const input_nombre_completo = document.querySelector('#txt-nombre_completo');
const input_fecha_entrada = document.querySelector('#txt-fecha_entrada');
const input_fecha_salida = document.querySelector('#txt-fecha_salida');
const input_email = document.querySelector('#txt-email');
const input_telefono = document.querySelector('#txt-telefono');
const boton_reservar = document.querySelector('#btn-reservar');


//VALIDACION DE ESPACIOS EN BLANCO 
//función llamada validar_contra_blancos que realiza una validación de campos requeridos en un formulario Front-End
//y agrega una clase CSS de input-error a aquellos campos que no han sido completados.

let validar_contra_blacos = () => {
    let error = false;
    let error_fechas = false;
    let error_correo = false;
    let error_moneda = false;
    let error_terminos_y_condiciones = false;

    //seleccionar todos los elementos HTML que tienen el atributo required (indicando que son campos requeridos)
    //y se almacenan en la variable elementos_requeridos. Esto se hace utilizando document.querySelectorAll('[required]').
    let elementos_requeridos = document.querySelectorAll('[required]');

    //expresión regular que permite solo letras minúsculas, números, puntos y guiones bajos antes de la arroba, 
    //seguido de letras y números después de la arroba, y un dominio de nivel superior que consta de al menos una letra
    let validacion_arroba_correo = /^[a-z._\d]+@[a-z\d]+\.[a-z]+\.?[a-z]+?$/;


    //el ciclo recorre todos los elementos requeridos del formulario
    //ciclo que determina la llamada de la alerta error rojo de los campos
    for (let i = 0; i < elementos_requeridos.length; i++) {
        //si un campo está vacío se agrega la clase CSS input-error al elemento, 
        //se muestre un borde rojo para indicar que es un campo obligatorio NO completado. 
        if (elementos_requeridos[i].value == '') {
            elementos_requeridos[i].classList.add('input-error');
            //la variable error se establece en true, lo que indica que hay al menos un campo no esta completado.
            error = true;
        } else {
            //si el campo no está vacío, se elimina la clase input-error del elemento, lo que eliminará el estilo de error si se había establecido previamente.
            elementos_requeridos[i].classList.remove('input-error');
        }
    }


    //CARGA FUNCIONES DE CAMPOS FECHAS-CORREO-MONEDA-TERMINOS

    validar_fechas();
    validar_correo();
    validar_moneda();
    validar_terminos_y_condiciones();
    return error;
};


//VALIDACION DE LOS CAMPOS FECHAS INICIO-FINAL

let validar_fechas = () => {
    //la función comienza inicializando dos variables error y error_fechas, 
    //declaradas en false. Estas variables se utilizarán para realizar un seguimiento de los errores de validación.
    let error = false;
    let error_fechas = false;

    //Date es un objeto que permite convertir los valores de entrada en objetos de fecha, lo que permite una fácil comparación de fechas.

    //condicinal que verifica si la fecha entrada es mayor o igual que la fecha salida. 
    //si la condición es verdadera, significa que hay un error en las fechas. 
    //en respuesta a esto input-error al input_fecha_entrada elemento, 
    //presumiblemente para resaltar el campo de entrada con un borde rojo. También se establece las variables error y error_fechas en true.
    if (new Date(input_fecha_entrada.value) >= new Date(input_fecha_salida.value)) {
        input_fecha_entrada.classList.add('input-error');
        error = true;
        error_fechas = true;
    }
    //verifica si la fecha _salida es menor o igual que la fecha entrada. 
    //si la condición es verdadera, nuevamente significa que hay un error en input-error al input_fecha_salida elemento
    //y establece tanto error y error_fechas variables como true
    if (new Date(input_fecha_salida.value) <= new Date(input_fecha_entrada.value)) {
        input_fecha_salida.classList.add('input-error');
        error = true;
        error_fechas = true;

    }
    return error_fechas;
}


//VALIDACION DEL CAMPO CORREO ELECTRONICO

let validar_correo = () => {
    //declaracion de 3 variables
    let error = false;
    let error_correo = false;
    let validacion_arroba_correo = /^[a-z._\d]+@[a-z\d]+\.[a-z]+\.?[a-z]+?$/;

    //condicional que permite validar una entrada de correo electrónico (presumiblemente `input_email`) en una página web. 
    //la función verifica si la dirección de correo electrónico ingresada tiene un formato válido.

    if (validacion_arroba_correo.test(input_email.value) == false) {
        input_email.classList.add('input-error');
        error = true;
        error_correo = true;
    }
    return error_correo;
}


//VALIDACION DEL CAMPO MONEDA

let validar_moneda = () => {
    let error = false;
    let error_moneda = false;
    let input_moneda = document.querySelector('#moneda input[type=radio]:checked');

    //verificar la validez del campo input_moneda, manejando el estado de error correspondiente. T
    if (!input_moneda) {
        error = true;
        document.querySelector('#moneda').classList.add('input-error');
        error_moneda = true;
    } else {
        document.querySelector('#moneda').classList.remove('input-error');
    }
    return error_moneda;
}


//VALIDACION DEL CAMPO TERMINOS Y CONDICIONES

let validar_terminos_y_condiciones = () => {
    let error = false;
    let error_terminos_y_condiciones = false;
    let input_terminos_y_condiciones = document.querySelector('#terminos_y_condiciones input[type=checkbox]:checked');

    //verifica la validez del campo entrada llamado input_terminos_y_condiciones, 
    //que es una casilla de verificación que indica si el usuario ha aceptado los términos y condiciones
    if (!input_terminos_y_condiciones) {
        error = true;
        document.querySelector('#terminos_y_condiciones').classList.add('input-error');
        error_terminos_y_condiciones = true;
    } else {
        document.querySelector('#terminos_y_condiciones').classList.remove('input-error');
    }
    return error_terminos_y_condiciones;
}


// LIMPIAR LOS CAMPOS DEL FORM
let limpiar = () => {
    input_nombre_completo.value = '';
    input_fecha_entrada.value = '';
    input_fecha_salida.value = '';
    input_email.value = '';
    input_telefono.value = '';
    document.getElementById("checkbox_y_terminos_y_condiciones").checked = false;
    document.getElementById("rbt-colones").checked = false;
    document.getElementById("rbt-dolares").checked = false;
    document.getElementById("rbt-euros").checked = false;
};



// VALIDACION DE VENTANAS EMERGENTES FORM
//la funcion principal sirve como punto de entrada para realizar la validación de campos requeridos en el form 
//mediante la llamada a la función validar_contra_blancos. 


let obtener_datos = () => {
    //El valor booleano devuelto por validar_contra_blancos se guarda en la variable error_validacion_contra_blancos,
    let error_validacion_contra_blancos = validar_contra_blacos();

    //verificar si el valor de la variable error_validacion_contra_blancos
    //Si se evalúa como verdadero, significa que hubo un error de validación relacionado con los campos en blanco.
    if (error_validacion_contra_blancos) {
        Swal.fire({
                title: 'No se han podido enviar sus datos.',
                text: 'Por favor revisar los campos resaltados de color rojo del formulario.',
                icon: 'warning'
            })
            //verificacion de fechas, correo, moneda
    } else {
        if (validar_fechas()) {
            Swal.fire({
                title: 'Las fechas están incorrectas.',
                text: 'La fecha de entrada tiene que ser menor a la fecha de salida y ambas tienen que ser diferentes',
                icon: 'warning'
            })
        } else {
            if (validar_correo()) {
                Swal.fire({
                    title: 'La dirección de correo electrónico está incorrecta. Agregar el signo arrova @',
                    text: 'La dirección de correo tiene que tener el formato correcto, incluyendo el arroba ("@")',
                    icon: 'warning'
                })
            } else {
                if (validar_moneda()) {
                    Swal.fire({
                        title: 'Elegir la moneda.',
                        text: 'Tiene que escoger un tipo de moneda para continuar.',
                        icon: 'warning'
                    })
                } else {
                    if (validar_terminos_y_condiciones()) {
                        Swal.fire({
                            title: 'Términos y condiciones no aceptados',
                            text: 'Tiene que aceptar los términos y condiciones para continuar',
                            icon: 'warning'
                        })
                    } else {
                        let nombre_completo = input_nombre_completo.value;
                        let fecha_entrada = input_fecha_entrada.value;
                        let fecha_salida = input_fecha_salida.value;
                        let email = input_email.value;
                        let telefono = input_telefono.value;
                        let moneda = document.querySelector('#moneda input[type=radio]:checked').value;
                        let terminos_y_condiciones = document.querySelector('#terminos_y_condiciones input[type=checkbox]:checked').value;

                        Swal.fire({
                            title: 'El formulario se lleno correctamente.',
                            text: 'Sus datos han sido registrados.',
                            icon: 'success'

                        }).then(() => {
                            //llamar la funcion limpiar...
                            limpiar();
                        });
                    }

                }
            }
        }
    }
};


//cargar la funcion obtener_datos
boton_reservar.addEventListener('click', obtener_datos);