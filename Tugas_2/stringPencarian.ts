function removeFirstOccurrence(str: string, search: string): string {
    const index = str.indexOf(search);
    if (index === -1) {
        return str; // Jika tidak ditemukan, kembalikan string asli
    }
    return str.slice(0, index) + str.slice(index + search.length);
}

// Input dan Output
const string: string = prompt("Masukkan string: ") || "";
const search: string = prompt("Masukkan string pencarian: ") || "";
console.log(removeFirstOccurrence(string, search));