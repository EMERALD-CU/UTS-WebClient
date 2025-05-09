// Declaration name
let fullName = "John Doe"

// separating name
let nameParts = fullName.split(" ")

// taking initial
let initial1 = nameParts[0].charAt(0).toUpperCase();
let initial2 = nameParts[1].charAt(0).toUpperCase();

//combining
let initial = initial1 + initial2

// print
console.log("inisial nama anda: " + initial)