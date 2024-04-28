// Ejercicio 1: Encontrar el número mayor en un array
const encontrarMayor = (arr) => {
  let mayor = arr[0]; // Suponemos que el primer elemento del array es el mayor
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i]; // Si encontramos un número mayor, se actualiza
    }
  }
  return mayor;
};

const numeros = [5, 10, 2, 8, 3];
console.log("El número mayor del array es: " + encontrarMayor(numeros)); // Debería imprimir 10

// Ejercicio 2: Unir dos arrays y eliminar duplicados
const concatenarArrays = (arr1, arr2) => {
  const concatenado = [...new Set(arr1.concat(arr2))];
  return concatenado;
};

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
console.log("La concatenación de los dos arrays sin duplicados es: " + concatenarArrays(array1, array2));

// Ejercicio 3: La siguiente funcion tiene un error, corrigelo y añade un comentario con la explicacion
const sumarNumeros = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; // Sumamos los valores de los elementos en lugar de los índices
  }
  return total;
};

const numeros2 = [1, 2, 3, 4, 5];
console.log("La suma de los numeros en el array es: " + sumarNumeros(numeros2)); // Resultado esperado: 15


// Ejercicio 4: Ordenar un array de números de menor a mayor
const ordenarNumeros = (arr) => {
  return arr.sort((a, b) => a - b);
};

const numeros3 = [5, 2, 9, 1, 5, 6];
console.log("El array ordenado es: " + ordenarNumeros(numeros3)); // Resultado esperado: [1, 2, 5, 5, 6, 9]

/*  Ejercicio 5: Escribe una función que busque una película en un array de objetos que contienen información 
sobre películas (título, director, año, género, etc.). La función debe tomar como parámetros el array de películas 
y el título de la película a buscar, y debe devolver el objeto correspondiente a la película encontrada. */

const buscarPelicula = (peliculas, titulo) => {
  for (const pelicula of peliculas) {
    if (pelicula.titulo === titulo) {
      return pelicula;
    }
  }
  return null; // Devolvemos null si no se encuentra la película
};

const peliculas = [
  {
    titulo: "La La Land",
    director: "Damien Chazelle",
    año: 2016,
    genero: "Musical",
  },
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    año: 1972,
    genero: "Drama",
  },
  {
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    director: "Peter Jackson",
    año: 2001,
    genero: "Fantasía",
  },
];

console.log(buscarPelicula(peliculas, "El Padrino")); // Resultado esperado: {titulo: "El Padrino", director: "Francis Ford Coppola", año: 1972, genero: "Drama"}

// Ejercicio 6: Validar una dirección de correo electrónico
const validarCorreoElectronico = (correo) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
};

console.log(validarCorreoElectronico("usuario@dominio.com")); // Resultado esperado: true
console.log(validarCorreoElectronico("usuario@dominio")); // Resultado esperado: false


// Ejercicio 7: Escribe una función que calcule el monto de la propina en base a una factura y un porcentaje de propina dado. La función debe tomar como parámetros el subtotal de la factura y el porcentaje de propina, y devolver el monto total a pagar (subtotal + propina).
const calcularPropina = (subtotal, porcentajePropina) => {
  const propina = subtotal * (porcentajePropina / 100);
  return subtotal + propina;
};

console.log(calcularPropina(50, 15)); // Resultado esperado: 57.5

// Ejercicio 8: Escribe una funcion que valide si un numero se encuentra en el array y retorne true o false dependiendo el caso
const buscarNumero = (array, numero) => {
  return array.includes(numero);
};

const numeros4 = [1, 3, 5, 7, 9];
console.log(buscarNumero(numeros4, 5)); // Resultado esperado: true
console.log(buscarNumero(numeros4, 6)); // Resultado esperado: false

