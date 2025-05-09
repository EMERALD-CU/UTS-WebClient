function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Input dan Output
const fahrenheit = parseFloat(prompt("Masukkan suhu dalam Fahrenheit: "));
const celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);