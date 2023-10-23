const esBisiesto = (año) => año % 4 === 0 && año % 100 !== 0 || año % 400 === 0
const meses31 = [1, 3, 5, 7, 8, 10, 12]
const validarFecha = (dia, mes, año) => {
    if (mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31 && año >= 0) {
        if (mes == 2) {
            if (dia == 29 && esBisiesto(año)) return true;
            if (dia <= 28) return true;
        }
        else{
            if (dia === 31 && meses31.find((_mes)=> _mes == mes)) return true;
            if (dia <= 30) return true;
        }
    }
    return false;
}