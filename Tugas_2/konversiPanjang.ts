function convertLength(value: number, unit: string): string {
    if (unit === "cm") {
        return `${value / 100000} km`;
    } else if (unit === "km") {
        return `${value * 100000} cm`;
    } else {
        return "Unit tidak valid. Gunakan 'cm' atau 'km'.";
    }
}

// Input dan Output
const value: number = parseFloat(prompt("Masukkan nilai: ") || "0");
const unit: string = prompt("Masukkan unit ('cm' atau 'km'): ") || "cm";
console.log(convertLength(value, unit));