// made a car object because i'm far too lazy
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Red",
    // needed for opgave 2
    engine: {
        type: "V8",
        horsepower: 300,
        cylinders: 8,
        fuelType: "Gasoline"
    },
    features: ["GPS", "Bluetooth", "Apple CarPlay", "Android Auto"],
    isUsed: true,
}

console.log("Brand:", car.brand); // should return "Brand: Toyota" -> dot notation
console.log("Brand:", car["brand"]) // same as above but with brackets notation

// loops through the car object and logs the key and value because I CAN!!!
console.log(" \nLooping through the car object:");
for(const key in car) {
    console.log(`${key}: ${car[key]}`); // engine of course returns as [object Object] because it's a nested object
}

// opgave 2
// referencing the engine object inside the car object
console.log("\nRetrieving data from the engine object:");
console.log("Engine Type:", car.engine.type);
console.log("Engine Type:", car["engine"]["type"])

console.log("\nRetrieving data from the engine object:");
for(const key in car["engine"]) {
    console.log(`${key}: ${car["engine"][key]}`); // could've also used dot anotation, but I just didn't
}

// "Lav en løkke som udskriver værdierne af dit array i konsollen." for christ sake
console.log("\nLooping through the car features array:");
for(let i = 0; i < car.features.length; i++) {
    console.log(i+1, car.features[i]); // i NEEDS TO AT START AT 1 :(
}

// opgave 3
// her skal jeg fucking tilknyt det til html, SKYD MIG
let students = [
    { name: "Alfred", age: 18, course: "Webudvikler" },
    { name: "Caroline", age: 16, course: "Mediegrafiker" },
    { name: "Jakob", age: 21, course: "Teknisk Designer" },
]

let studentList = document.querySelector(".student-list");
students.forEach(student => { // gider ik bruge callback functions
    // code comes here
    const studentDiv = document.createElement("div");
    studentDiv.classList.add("student"); // adds a class to the div so we can style it in css in extraopgave 1
    studentDiv.textContent = `${student.name} (${student.age} år) - ${student.course}`; // cleaner to just do a template literal instead of string concatenation
    // -> this is the same as:
    // studentDiv.textContent = student.name + " (" + student.age + " år) - " + student.course;
    studentList.appendChild(studentDiv);
})