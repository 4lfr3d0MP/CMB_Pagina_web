const tipo = new Typed('.typed',{
    strings: [ 
    '<i class= "Edicion" > </i>',
    '<i class= "Edicion" > CENTRO MEDICO BIENESTAR : CMB</i>',
    '<i class= "Edicion" > CENTRO MEDICO BIENESTAR : CMB</i>',
    '<i class= "Edicion" > CENTRO MEDICO BIENESTAR : CMB</i>'],

    //ID DEL ELEMENTO
	stringsElement: '#cadenas-texto',
	//VELOCIDAD DE MOVIMIENTO EN MS
	typeSpeed: 80,
	//TIEMPO EN MS PARA INICIAR
	startDelay: 300, 
	//VELOCIDAD EN MS PARA BORRAR
	backSpeed: 50,
	//ELIMINA LAS PALABRAS NUEVAS
	smartBackspace: true,
	//ALTERA EL ORDEN DE ESCRITURA
	shuffle: false,
	//TIEMPO DE ESPERA
	backDelay: 1000,
	//REPITE EL ARRAY DE STRINGS
	loop: true,
	//CANTIDAD DE VECES A REPEITIR
	loopCount: false,
	//MOSTRAR EL CURSOR PARPADEANDO
	showCursor: true,
	//CARACTER QUE SERA EL CURSOR
	cursorChar: '.',
	//HTML O NULL PARA TEXTO SIN FORMATO
	contentType: 'html',
});



