// Deklarasi variabel dengan tipe data
let radius: number = 5;

// Hitung diameter
let diameter: number = 2 * radius;

// Hitung keliling lingkaran
let circumference: number = 2 * Math.PI * radius;

// Hitung luas lingkaran
let area1: number = Math.PI * Math.pow(radius, 2);

// Cetak hasil
console.log("Diameter lingkaran adalah: " + diameter);
console.log("Keliling lingkaran adalah: " + circumference.toFixed(4));
console.log("Luas lingkaran: " + Math.floor(area1 * 1000) / 1000);