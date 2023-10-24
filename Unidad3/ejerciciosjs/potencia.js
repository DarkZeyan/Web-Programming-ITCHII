const potencia = (x, y) => {
    if (y === 0) {
        return 1; 
    } else if (y < 0) {
        x = 1 / x;
        y = Math.abs(y);
    }

    let resultado = 1;

    for (let i = 0; i < y; i++) {
        resultado *= x;
    }

    return resultado;
}