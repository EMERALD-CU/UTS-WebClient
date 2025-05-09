function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Input dan Output
const str = prompt("Masukkan string: ");
console.log(`Apakah "${str}" palindrom? ${isPalindrome(str)}`);