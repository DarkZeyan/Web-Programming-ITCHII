const sumaDivisores = (n) => {
    let suma = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            suma += i;
        }
    }
    return suma;
}

const encontrarParejas = (m) => {
    const parejas = [];
    for (let a = 2; a <= m; a++) {
        const b = sumaDivisores(a);
        if (a !== b && a <= m && b <= m && sumaDivisores(b) === a) {
            parejas.push([a, b]);
        }
    }
    return parejas;
}
