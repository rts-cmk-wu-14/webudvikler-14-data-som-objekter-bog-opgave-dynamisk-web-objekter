// made a car object because i'm far too lazy
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Red",
}

console.log("Brand:", car.brand); // should return "Brand: Toyota" -> dot notation
console.log("Brand:", car["brand"]) // same as above but with brackets notation

// loops through the car object and logs the key and value because I CAN!!!
console.log(" \nLooping through the car object:");
for(const key in car) {
    console.log(`${key}: ${car[key]}`);
}