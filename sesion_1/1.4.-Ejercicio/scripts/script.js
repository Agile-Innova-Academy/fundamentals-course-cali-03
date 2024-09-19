// // Arreglos unidimensionales (vectores)
// const weekdays = [
//   'Lunes',
//   'Martes',
//   'Miércoles',
//   'Jueves',
//   'Viernes',
//   'Sabado',
//   'Domingo'
// ]

// console.log(weekdays[3])

// // Arreglos bidimensionales o multi-dimensionales (matrices)
// const myStudents = [
//   //0
//   [
//     'Derlyn', //0
//     'Valentina', //1
//     'Veronica' //2
//   ],
//   //1
//   [
//     'Juan', //0
//     'Miguel', //1
//     'Victor', //2
//     'Edwing' //3
//   ]
// ]

// console.log(myStudents[1][3])

// // myStudents[1].unshift('Andres')
// // console.log(myStudents)

// // ------------- 0. Métodos modificadores de estructura --------------
// // .push() Agrega al final

// weekdays.push('NuevoDomingo')
// console.log(weekdays)

// // .pop() Elimina el último
// weekdays.pop()
// console.log(weekdays)

// // .shift() Elimina el primero
// weekdays.shift()
// console.log(weekdays)

// // .unshift() Agrega al principio
// weekdays.unshift('NuevoLunes')
// console.log(weekdays)

// // .splice() Elimina o Agrega elementos a un array
// // .splice(
// //  indice desde el que empieza a modificar,
// //  cuantos elementos eliminar,
// //  elementos a agregar
// //  )

// const newStudents = [
//   'Margarita',
//   'Luisa',
//   'Maria'
// ]

// myStudents[0].splice(2, 0, ...newStudents)
// console.log(myStudents)

// ------------- 1. Métodos de iteración ----------------
// ul que llamamos del DOM
const lista = document.getElementById('listaPrendas')

// .forEach(): Iterar sobre cada elemento de un array, ejecutando una serie de instrucciones determinadas.

const prendasDeVestir = [
  { nombre: 'Pantalón', precio: 10, estado: 'usado' },
  { nombre: 'Camiseta', precio: 8, estado: 'usado' },
  { nombre: 'Falda', precio: 12, estado: 'usado' },
  { nombre: 'Zapatos', precio: 15, estado: 'usado' },
  { nombre: 'Collar', precio: 5, estado: 'usado' },
  { nombre: 'Corbata', precio: 7, estado: 'usado' }
]

prendasDeVestir.forEach((prenda, index) => {
  let newElement = document.createElement('li')
  newElement.textContent = `${index + 1}: ${prenda.nombre}`
  lista.appendChild(newElement)
})

// .map(): Iterar sobre cada elemento de un array, mutar o transformar el arreglo en el proceso

function AplicarDescuento(precio, descuento) {
  return precio - precio * descuento / 100
}

const prendasConDescuento = prendasDeVestir.map((prenda, index) => {
  return {
    nombre: prenda.nombre,
    precio: AplicarDescuento(prenda.precio, index)
  }
})

console.log(prendasConDescuento)
prendasConDescuento.forEach((prenda, index) => {
  let newElement = document.createElement('li')
  newElement.textContent = `${index + 1}: ${prenda.nombre}, Nuevo precio: ${prenda.precio}`
  lista.appendChild(newElement)
})

//Tarea:
// Aplicar los siguientes descuentos respectivos

const descuentos = [
  { nombre: 'Pantalón', descuento: 15 },
  { nombre: 'Collar', descuento: 10 },
  { nombre: 'Camiseta', descuento: 20 },
  { nombre: 'Falda', descuento: 10 },
  { nombre: 'Zapatos', descuento: 5 },
  { nombre: 'Corbata', descuento: 25 }
]

// ---------------- 2. Métodos de búsqueda o validación ------------------
// .find(): Buscar EL PRIMER elemento dentro de un array que cumpla con una condición determinada

const busqueda = descuentos.find((item) => item.descuento === 10)

console.log(`El item que cumple con tu busqueda es: ${busqueda.nombre}`)

//.filer(): Retorna un nuevo arreglo con las condiciones establecidas.

const nuevosProductos = descuentos.filter((item) => item.descuento < 20)

console.log(nuevosProductos)

// .some(): Comprobar si al menos UNO de los elementos de un array cumple una condición.

const productosConDescuento = descuentos.some((item) => item.descuento > 24)

console.log(productosConDescuento)

// .every(): Comprobar si TODOS los elementos de un array cumplen una condición

const productosConDescuento2 = descuentos.every((item) => item.descuento > 10)

console.log(productosConDescuento2)

// ---------------------- 3. Métodos de transformación --------------------
// .sort(): Organizar elementos según un formato determinado
const temperaturas = [15, 36, 12, 26, 25090]

// 2, 12, 15, 26, 36

const temperaturasSortAsc = temperaturas.sort(function (a, b) { return b-a })

console.log(temperaturasSortAsc)

// 36, 26, 25, 15, 12

const temperaturasSort = temperaturas.sort()

console.log(temperaturasSort)

// .reduce()
