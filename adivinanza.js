const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado == numeroSecreto) {
    console.log("¡Bien ahi! adivinaste el número!");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es menor :(. segui intentando!");
  } else {
    console.log("El número secrero es mayor, segui intentando!");
  }
};

module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};
