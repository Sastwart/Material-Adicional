// Carga de la función determinarMontoFinal usando la biblioteca de eventos JS
document.querySelector("#btnCalcular").addEventListener('click', determinarMontoFinal);

// Carga de la función y declaro variables en cero
function determinarMontoFinal() {
    let stipogamer = '';
    let nCostoDia = 0;
    let nPorcAdicional = 0;
    let nMontoFinal = 0;
    let nCantDias = 0;
    let nSubtotal = 0;
    let nCodigo;

    // Conversiones usando el método querySelector
    nCodigo = Number(document.querySelector('#txtCodigo').value);
    stipogamer = document.querySelector('#slttipogamer').value;
    nCantDias = Number(document.querySelector('#txtCantDias').value);

    // Condicional usando operadores lógicos
    if (nCodigo >= 20 && nCodigo <= 24) {
        nPorcAdicional = 0.1; // 10%
    }

    // Ciclo de JS para elegir opciones del equipo gamer
    switch (stipogamer) {
        case 'g1':
            nCostoDia = 200000;
            break;
        case 'g2':
            nCostoDia = 250000;
            break;
        case 'g3':
            nCostoDia = 300000;
            break;
        case 'g4':
            nCostoDia = 350000;
            break;
        case 'g5':
            nCostoDia = 400000;
            break;
        default:
            nCostoDia = 0;
            break;    
    }

    if (nCantDias > 0 && stipogamer) {
        nSubtotal = nCostoDia * nCantDias;
        let nCargoAdicional = nSubtotal * nPorcAdicional;
        nMontoFinal = nSubtotal + nCargoAdicional;
        document.querySelector('#txtResultadoMontoFinal').textContent = nMontoFinal;
    } else {
        alert('Por favor, ingresa una cantidad válida de días y selecciona un equipo gamer.');
    }
}

// Función para limpiar los campos
function btnlimpiar() {
    document.querySelector('#txtCodigo').value = '';
    document.querySelector('#txtCantDias').value = '';
    document.querySelector('#slttipogamer').value = ''; // Resetea el select
    document.querySelector('#txtResultadoMontoFinal').textContent = ''; // Limpia el resultado
}
