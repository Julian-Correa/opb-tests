function sumar(num1, num2, num3) {
  return num1 + num2 + num3;
}

function main() {
  // Llamamos a la función sumar y le pasamos tres números
  let resultado = sumar(1, 2, 3);
  console.log(resultado); // debería mostrar 6
}

main();

  //segunda parte

  class Coche {
    constructor(numPuertas) {
      this.numPuertas = numPuertas;
    }
  
    // Función que incrementa el número de puertas en 1
    añadirPuerta() {
      this.numPuertas += 1;
    }
  }
  
  function main() {
    // Creamos un nuevo objeto miCoche con 2 puertas
    let miCoche = new Coche(2);
  
    // Añadimos una puerta al coche
    miCoche.añadirPuerta();
  
    // Mostramos el número de puertas que tiene el coche
    console.log(miCoche.numPuertas); // debería mostrar 3
  }
  
  main();
