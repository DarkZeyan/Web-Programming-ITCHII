const integral = (coordenadas) => {
    let integral = 0;

    for (let i = 0; i < coordenadas.length - 1; i++) {
        const coordenada1 = coordenadas[i];
        const coordenada2 = coordenadas[i + 1];

        const ancho = coordenada2.x - coordenada1.x;
        const altura = coordenada2.y - coordenada1.y;

        const areaRectangulos = ancho * altura;

        integral += areaRectangulos;

    }

    return integral;
}