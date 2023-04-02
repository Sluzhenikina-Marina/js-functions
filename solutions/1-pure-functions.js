// BEGIN
function primeOrNot (number) {
    if (number < 2) return false;
    for (let i = 2; i <= number ** 0.5; i++) {
        if (number % i == 0) return false
    }
    return true
}

const sayPrimeOrNot = (number) => {
    if (primeOrNot(number)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

export default sayPrimeOrNot;
// END