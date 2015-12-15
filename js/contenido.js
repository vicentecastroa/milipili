/**
 * Created by Vicente on 13-12-2015.
 */



var activo = '';

function cambiarContenido(seccion) {
    var titulo = document.getElementById('tituloContenido');
    var cuerpo = document.getElementById('cuerpoContenido');


    document.getElementById('bienvenida').style.display = 'none';

    if (activo!=''){
        document.getElementById(activo).style.display = 'none'
    }
    document.getElementById(seccion).style.display = 'inline';
    activo = seccion
}

function mostrarInicio(){

    if (activo!=''){
        document.getElementById(activo).style.display = 'none'
    }
    document.getElementById('bienvenida').style.display = 'inline';
}