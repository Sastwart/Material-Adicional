window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;

        if (email === '') {
            alerta.textContent = 'El campo email está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Email inválido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'Su registro fue exitoso';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            //servicio ID/template ID/ID form/oublic key cuenta
            //el id del formulario es #form
            emailjs.sendForm('service_4wnju64', 'template_pbuvl2s', '#form2', '98wH42y0cm5c-DR9t');
            cleanInputs();
        }
    }

    function cleanInputs() {
        inscriptionTxt.value = '';
    }
}