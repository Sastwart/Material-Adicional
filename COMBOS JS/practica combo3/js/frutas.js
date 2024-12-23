//queryselector permite elegir el selector llamado select del form
let seleccionar = document.querySelector('select');
//addEventListener en un listado de eventos (biblioteca) que lista al evento CHANGE y carga ka funcion llamada elegir
seleccionar.addEventListener('change', elegir);

function elegir() {
    /*Variable que lleva el valor seleccionado por el usuario*/
    let eleccion = seleccionar.value;

    if(eleccion == 0) {
        descripcion.innerHTML = '';
    }
    else if (eleccion == 1) {
        descripcion.innerHTML = 'La fresa es un fruto de color rojo brillante, suculento y fragante que se obtiene de la planta que recibe su mismo nombre. En Occidente es considerada la "reina de las frutas". Además de poderse comer cruda se puede consumir como compota, mermelada,... Es empleada con fines medicinales ya que posee excelentes propiedades que ayudan a preservar la salud.';
    }
    else if (eleccion == 2) {
        descripcion.innerHTML = 'La naranja es un fruto redondo, color naranja, consumido mayoritariamente en invierno. La pulpa del interior es también anaranjada y está formada por pequeñas bolsitas llenas de zumo.   La naranja se usa para consumo en fresco y, para la industria, principalmente en zumo.';
    }
    else if (eleccion == 3) {
        descripcion.innerHTML = 'El mango está reconocido como uno de los 3 ó 4 frutos tropicales más finos. Es una fruta que se obtiene del árbol del mismo nombre. Tiene forma ovalada, con la piel no comestible y color variable de amarillo pálido a rojo intenso. La pulpa es pegajosa y su coloración también varía, desde amarillo a anaranjado. El sabor del mango maduro es dulce, y bastante ácido cuando aún está verde. Es una fruta jugosa y fibrosa, y poseen un hueso interior. Su tamaño varía entre 5-20 cm de longitud, con un peso de 300-400 g, llegando algunas piezas a alcanzar más de un kilo.';
    }
    else if (eleccion == 4) {
        descripcion.innerHTML = 'La uva es un fruta que crece en racimos apretados. Su pulpa es blanca o púrpura y de sabor dulce. Se consume como fruta fresca o zumo, aunque su utilidad principal es la obtención de vinos. También se realizan conservas con ella. Contiene diversos minerales y vitaminas, y se piensa que tiene poderes antioxidantes y anticancerígeno.';
    }
}