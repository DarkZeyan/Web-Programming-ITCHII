const divEnteraResto = (a, b) => {
    if (b === 0) {
        return null;
    }

    let cociente = 0;
    let signoCociente = 1;

    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        signoCociente = -1;
    }

    a = Math.abs(a);
    b = Math.abs(b);


    
    while (a >= b) {
        a -= b;
        cociente++;
    }

    cociente *= signoCociente;



    return { cociente, resto: a };
}