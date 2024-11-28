'use extrict';

//carga la funcion init
window.addEventListener('load', init, false);

//funcion inicial
function init() {
    //declaracion de
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidoTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/


    //funcion del boton Enviar
    btnEnviar.onclick = function() {
        nombre = nombreTxt.value;
        apellido = apellidoTxt.value;
        email = emailTxt.value;
        numero = numberTxt.value;
        mensaje = mensajeTxt.value;

        //condicionales anidada para validar cada campo del form
        if (nombre === '' && apellido === '' && email === '' && numero === '' && mensaje === '') {
            alerta.textContent = 'Debe llenar todo los campos';
            //alertaroja es un texto que aparece del error
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (nombre === '') {
            alerta.textContent = 'El campo nombre está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (apellido === '') {
            alerta.textContent = 'El campo apellido está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (email === '') {
            alerta.textContent = 'El campo email está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Email inválido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (numero === '') {
            alerta.textContent = 'El campo teléfono está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (mensaje === '') {
            alerta.textContent = 'El campo mensaje está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else {
            //si NO existe error en los campos validados se envian los datos al servidor de correo
            alerta.textContent = 'Mensaje enviado';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            //service ID/template ID/ID form/public key cuenta
            //el id del form es #form
            emailjs.sendForm('service_4wnju64', 'template_43d8bfk', '#form1', '98wH42y0cm5c-DR9t');
            //carga de la funcion limpiar
            limpiar();
        }
    }

    function limpiar() {
        nombreTxt.value = '';
        apellidoTxt.value = '';
        emailTxt.value = '';
        numberTxt.value = '';
        mensajeTxt.value = '';
    }
}