//Genera un número aleatorio entre un rango de enteros
function cachipun(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}
/* declarar valor a variables LAS QUE SON ALTERNATIVAS A ELEGIR del juego */
var piedra = 0;
var papel = 1;
var tijera = 2;
/* declarar con un Array? las variables que corresponden a las opciones a elegir */
var opciones = ["Piedra", "Papel", "Tijera"];
/* declarar variable de la eleccion del jugador */
var opcionJugador;
/* declarar variable para la seleccion aleatoria de opcion de la maquina virtual */ 
var opcionMaquinaVirtual = cachipun(0,2);
/* declarar variable para que jugador ingrese opcion donde salga una ventana con las opciones y numero a ingresar */
opcionJugador = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
/* alertas eleccion de cada jugador */ 
alert("Elegiste " + opciones[opcionJugador]);
alert("Maquina Virtual eligió " + opciones[opcionMaquinaVirtual]);

if(opcionJugador == piedra)
{
    if(opcionMaquinaVirtual == piedra)
    {
        alert("Empate!");
    }
    else if(opcionMaquinaVirtual == papel)
    {
        alert("Perdiste :( ");
    }
    else if(opcionMaquinaVirtual == tijera)
    {
        alert("Ganaste!");
    }
}
else if(opcionJugador == papel)girt
{
    if(opcionMaquinaVirtual == piedra)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquinaVirtual == papel)
    {
        alert("Empate!");
    }
    else if(opcionMaquinaVirtual == tijera)
    {
        alert("Perdiste!");
    }
}
else if(opcionJugador == tijera)
{
    if(opcionMaquinaVirtual == piedra)
    {
        alert("Perdiste!");
    }
    else if(opcionMaquinaVirtual == papel)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquinaVirtual == tijera)
    {
        alert("Empate!");
    }
}
