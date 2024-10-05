const typed = new Typed('.typed', {
    strings: [
        '<i class="mascota">Dylan</i>',
        '<i class="mascota">Santi</i>',
        '<i class="mascota">Elias</i>',
        '<i class="mascota">Luca (mejor conocido solo como Quiroz)</i>',
        '<i class="mascota">el mono (me olvide su nombre)</i>',
        '<i class="mascota">Mauri</i>',
        '<i class="mascota">Fede</i>',
        '<i class="mascota">vida</i>'
    ],
    typedSpeed: 75,
    startDelay: 300,
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
});
