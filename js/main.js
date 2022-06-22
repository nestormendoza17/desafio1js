//simulador comprar música

function solicitarNombre() {
    alert("Bienvenidxs a Xuxuy Music")
    let nombre = prompt("Cómo te llamas?")

    while (nombre === " ") {
        nombre = prompt("Ingresá tu nombre")
    }
    return nombre;

}

function mostrarMusica() {
    let musica;
    do {
    musica = parseInt(prompt("Elegi tu artista. \n1-Becho Riveiro \n2-Bruno Arias \n3-Joaquin Lopez"));
} while (musica !== 1 && musica !== 2 && musica !== 3);
switch (musica) {
    case 1:
        return "Becho Riveiro";
    case 2:
        return "Bruno Arias";
    case 3:
        return "Joaquin Lopez"
}
}
function validarPrecio (nombre) {
   if (nombre==="Becho Riveiro"){
    return 250
   } 
   else if (nombre==="Bruno Arias"){
    return 325
   }else if (nombre==="Joaquin Lopez"){
    return 225
   }
    
}

function cobrar (musica,precio,nombre) {
    alert(nombre.toUpperCase()+ " , usted adquirio al artista"+
     musica+ " y su costo es $"+
     precio);



let pago =parseInt (prompt("Ingrese monto para abonar:"))
if (pago > precio) {
    alert ("Gracias! Tiene como vuelto "+(pago-precio));
}else {
    alert("Ingrese otro monto.");
}
        
}

let nombreCliente = solicitarNombre();
let musicaNombre = mostrarMusica();
console.log(musicaNombre)
let precio = validarPrecio(musicaNombre);
cobrar (musicaNombre,precio,nombreCliente)