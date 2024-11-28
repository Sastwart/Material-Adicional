//se ejecuta cuando el contenido  esta cargado en el DOM
document.addEventListener('DOMContentLoaded', function(){
    const buscadorForm = document.getElementById('buscadorForm');
    const cedulaInput = document.getElementById('cedula');
    const resultadoContainer = document.getElementById('resultado');

    //carga de la biblioteca de eventos submit
    buscadorForm.addEventListener('submit', function() {
        event.preventDefault();
        //funcion trim() para eliminar espacion en vlanco al inicio y a l final
        const cedula = cedulaInput.value.trim();
        //verifica si el campo de cedula está vacío
        if (cedula.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingresa una cédula antes de buscar'
            });
        }else
        //verifica si el valor ingresado no es un número
        if (isNaN(cedula)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida'
            });
        }else
        //cargar la funcion validarCedula
        if (validarCedula(cedula)) {
            //cargar la funcion que muestrea los empleados por cedula
            mostrarInformacionEmpleado(cedula);
        }else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La cédula ingresada no es válida'
        });
        }
    });

    //funcion para validar el campo cedula
    function validarCedula(cedula) {
        //expresion que veridica si la cedula tiene exatamente 9 dñigitos numéricos
        return /^\d{9}$/.test(cedula);
    }

    //funcion que permite almacenar los datos de los empleados
    function mostrarInformacionEmpleado(cedula) {
        //objeto empleados
        const empleados = {
            '109110338' : {nombre: 'Pedro Miranda', jornada: 'Diurna', salario: '$1500', foto: '../imagenes/usuario1.jpg', descripcion: 'Diseñador Web'},
            '209110338' : {nombre: 'Carla Castro', jornada: 'Nocturna', salario: '$1200', foto: '../imagenes/usuario2.jpg', descripcion: 'Diseñadora UX-UI'},
            '309110338' : {nombre: 'Oscar Soto', jornada: 'Diurna', salario: '$1600', foto: '../imagenes/usuario3.jpg', descripcion: 'Programador Web'},
            '409110338' : {nombre: 'Rebeca Suarez', jornada: 'Misxta', salario: '$1400', foto: '../imagenes/usuario4.jpg', descripcion: 'Diseñadora Gráfica'},
            '509110338' : {nombre: 'Pablo Coto', jornada: 'Nocturna', salario: '$1300', foto: '../imagenes/usuario5.jpg', descripcion: 'analista de Sistemas'},
        };
        //condicional que permite validar si el usuario existe
        if (empleados[cedula]) {
            const empleado = empleados[cedula];
            //cargar funcion que muestra el resultado final de la busqueda
            mostrarResultado(empleado);
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El usuario no existe'
            });
        }
    }

    //funcion que muestra el resultaod final de la busqueda
    function mostrarResultado(empleado) {
        //permite crear contenido HTML en la página web
        resultadoContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="imagenes/${empleado.foto}" class="card-img-top" alt="Foto del empleado">
            <div class="card-body">
                <h5 class="card-body">${empleado.nombre}</h5>
                <p class="card-text">Descripción: ${empleado.descripcion}</p>
                <p class="card-text">Jornada: ${empleado.jornada}</p>
                <p class="card-text">Salario: ${empleado.salario}</p>
            </div>
        </div>
        `;
    }
        /* cierre del evento principal*/
});

function borrar() {
    document.getElementById("cedula").value = "";
    document.getElementById("resultado").innerHTML = "";
}