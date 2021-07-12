const numerosPrimos = x => {
    let primo = true;

    for (let i = 2; i < x; i++) {
        if (x%i===0) {
           primo = false;
           break;     
        }
    }

    return primo;
}


console.log(numerosPrimos(7));