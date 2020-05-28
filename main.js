/*
En cuaderno/planilla tenemos anotado, por cada libro:
-titulo
-autor
-anioLanzamiento
-editorial
-ISBN
-disponibilidad: si o no
-cantidad de veces que fue alquilado
*/

const listaLibros = [
	{ 
		titulo: 'Rayuela',
		autor: 'Cortazar',
		anioLanzamiento: '1963',
		editorial: 'Sudamericana',
		ISBN: '1234',
		disponibilidad: 'si',
		cantidadVecesAlquilado: 5, 
	},
	{ 
		titulo: 'El Principito',
		autor: 'Exupery',
		anioLanzamiento: '1953',
		editorial: 'Francia',
		ISBN: '5678',
		disponibilidad: 'no',
		cantidadVecesAlquilado: 4,
	},
	{
		titulo: 'Los Premios',
		autor: 'Cortazar',
		anioLanzamiento: '1950',
		editorial: 'Sudamericana',
		ISBN: '6747',
		disponibilidad: 'si',
		cantidadVecesAlquilado: 2, 
	},
]

/* NO FUNCIONO NINGUNA :(
1) saber si un libro en particular (a traves de su ISBN) esta o no disponible (SI O NO)
	- recorremos lista de libros
		- buscamos dentro de las propiedades de cada libro que coincida con el ISBN que estamos buscando
			- chequeamos en la propiedad disponible 
				- devolvemos disponibilidad SI o NO
*/

function averiguarDisponibilidadLibro(ISBN) {

	let disponibilidadLibro;
	let isbnLibro;

	for (let i = 0; i < listaLibros.length; i++) {
		let cadaLibro = listaLibros[i]
		for (let j = 0; j < cadaLibro.ISBN.length; j++) {
			let isbnLibro = cadaLibro.ISBN[j]
				if (ISBN == isbnLibro) {
					for (let j = 0; j < cadaLibro.disponibilidad.length; j++) {
					let disponibilidadLibro = cadaLibro.disponibilidad[j]
					}
				}
		}
	}
	return disponibilidadLibro
}

function comprobarDisponibilidad(ISBN) {
	for (let i = 0; i < listaLibros.length; i++) {
		let libro = listaLibros[i]

		for (let j = 0; j < libro.ISBN.length; j++) {
			let ISBNlibro = libro.ISBN[j]

			if (ISBNlibro === ISBN) {
				for (let j = 0; j < libro.disponibilidad.length; j++) {
					let disponibilidad = libro.disponibilidad[j]

					if (disponibilidad === 'si') {
						return libroDisponible = 'si'
					} else {
						return libroDisponible = 'no'
					}
				}
			} 
		}		
	}
}

/*
2) buscar libros disponibles de un autor determinado TAMPOCO ANDUVO JAJA

	- creamos lista vacia de libros para despues mostrarle al fanatico los que estan disponibles: librosDisponiblesAutorSolicitado 
	- recorremos lista de libros uno por uno (FOR)
		-en cada libro buscamos el autor (FOR)
			- vemos si coincide con el autor buscado (IF)
				-vemos si esta disponible o no (FOR)
					- si esta disponible (IF), lo agregamos a la lista (PUSH)
*/

function buscarLibrosDisponiblesAutor(autor) {

	let librosDisponiblesAutorSolicitado = []

	for (let i = 0; i < listaLibros.length; i++) {
		let libro = listaLibros[i] 
		for (let j = 0; j < libro.autor.length; j++) {
			let autorLibro = libro.autor[j]
			if (autor === autorLibro) {
				for (j = 0; j < libro.disponibilidad.length; j++) {
					let disponibilidadLibro = libro.disponibilidad[j]
					if (disponibilidadLibro === si) {
						librosDisponiblesAutorSolicitado.push(libro.titulo)
					}
				}
			}
		}
	}
	return librosDisponiblesAutorSolicitado
}


function buscarLibrosDisponiblesAutor(autorSolicitado) {
	const librosDisponiblesAutorSolicitado = []

	for (let i = 0; i < listaLibros.length; i++) {
		let cadaLibro = listaLibros[i]

		for (let j = 0; j < cadaLibro.autor.length; j++) {
			let autorLibro = cadaLibro.autor[i]
				for (j = 0; i < cadaLibro.disponibilidad.length; j++) {
						let disponibilidadLibro = cadaLibro.disponibilidad[i]
				}
			if (autorLibro === autorSolicitado && disponibilidadLibro === si) {
				librosDisponiblesAutorSolicitado.push(cadaLibro.titulo)
			}
		}
	}
	return librosDisponiblesAutorSolicitado
}

/*
a este no llegue

3) cuales son los 10 libros que mas se piden
	- creamos lista vacia 10LibrosMasPedidos = []
	- recorremos lista de libros, anotamos la propiedad cantidad de veces que fue alquilado
	- ordenamos de mayor a menor
	- seleccionamos los 10 primeros
	- mostramos en lista 
*/