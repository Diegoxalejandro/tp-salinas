var nombre = document.getElementById('Nombre');
var apellido = document.getElementById('Apellido');
var email = document.getElementById('mail');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }

    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingresa tu apellido');
    }

    if(mail.value === null || mail.value === ''){
        mensajesError.push('Ingresa tu mail');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
}