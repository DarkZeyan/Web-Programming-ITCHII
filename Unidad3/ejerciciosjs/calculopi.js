const  calcularPiAproximado1 = (iteraciones) => {
    let piAproximado = 0;
    for (let i = 0; i < iteraciones; i++) {
      piAproximado += (4 * Math.pow(-1, i)) / (2 * i + 1);
    }
    return piAproximado;
}
const calcularPiAproximado2 = (iteraciones) =>{
    let suma = 0;
    for (let i = 1; i < iteraciones; i++) {
    const termino = (24 / (i * i));
    suma += Math.sqrt(termino);
  }
  return (1/2) * suma;
}
