let nombreApellido = document.getElementById('nombreYApellido');
nombreApellido.addEventListener('keydown', () => { console.log('poniendo nombre y apellido') });

let eMail = document.getElementById('eMail');
eMail.addEventListener('keydown', () => { console.log('poniendo eMail') });

let tel = document.getElementById('tel');
tel.addEventListener('keydown', () => { console.log('poniendo el teléfono') });

let iconoIG = document.getElementById('iconoIG');
iconoIG.addEventListener('click', () => { console.log('Yendo a IG'); });

let iconoFB = document.getElementById('iconoFB');
iconoFB.addEventListener('click', () => { console.log('Yendo a FB'); });

let iconoTW = document.getElementById('iconoTW');
iconoTW.addEventListener('click', () => { console.log('Yendo a TW'); });

//USANDO LA OTRA SINTAXIS
let iconosRedes = document.getElementById('iconosRedes');
iconosRedes.onmousemove = () => { console.log("está mirando las redes") };

let botonWA = document.getElementById('botonWA');
botonWA.onmousemove = () => { console.log("está mirando WhatsApp") };

let textArea = document.getElementById('textArea');
textArea.oninput = () => { console.log("está escribiendo un mensaje") };

//SUBMIT + PREVENT DEFAULT + LOG DE LOS DATOS INGRESADOS AL FORMULARIO
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', noRecargar);

function noRecargar(event) {
    event.preventDefault();

    let form = event.target;

    let nombreIngresado = form.children[0].value;
    let correoIngresado = form.children[1].value;
    let telefonoIngresado = form.children[2].value;
    let textoIngresado = form.children[3].value;

    console.log(nombreIngresado);
    console.log(correoIngresado);
    console.log(telefonoIngresado);
    console.log(textoIngresado);
};