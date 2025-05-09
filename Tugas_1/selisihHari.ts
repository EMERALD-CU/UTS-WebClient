// Deklarasi dua tanggal dengan tipe data Date
let date1: Date = new Date('2024-03-19');
let date2: Date = new Date('2024-03-21');

// Hitung selisih hari
let daysDifference: number = Math.abs(date2.getDate() - date1.getDate());

// Cetak hasil
console.log("Selisih hari: " + daysDifference);