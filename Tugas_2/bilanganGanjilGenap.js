function isEven(n) {
    return n % 2 === 1;
}

// Input dan Output
const number = parseInt(prompt("Masukkan bilangan bulat: "));
console.log(`Apakah ${number} ganjil? ${isEven(number)}`);