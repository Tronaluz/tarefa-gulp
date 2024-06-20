function somaArrayLet(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = somaArrayLet(numeros);
console.log(resultado);