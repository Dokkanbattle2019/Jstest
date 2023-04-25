function isPrimeNumber(nombre) {
    nextPrime:
    for (let i = 2; i <= nombre; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue nextPrime

            }

        }
        console.log(i)
    }

}

isPrimeNumber(10)

