
const factorial = (n) =>{
    let factorial = 1;
    for(let i = n; i>0; i--){
        factorial *= i;
    }
    return factorial;
}

// e^x

const calcularExponencial = (lim, x) => {
    let exponencial = 0;
    for (let i = 0; i <= lim; i++) {
        exponencial +=  Math.pow(x,i)/factorial(i);
    }
    return exponencial;
}

// coseno x   
const coseno = (lim, x) => {
    let coseno = 0;

    for (let i = 1; i <= lim; i++) {
        coseno = (-1) * ((Math.pow(x, (2*i)))/factorial((2*i)))
    }

    return coseno + 1;
}

// seno x
const seno = (lim, x) => {
    let seno = 0;

    for (let i = 1; i <= lim; i++) {
        seno = (-1) * ((Math.pow(x, (2*i + 1)))/factorial((2*i + 1)))
    }

    return seno + 1;
}