// Objects Inside Arrays
let cars = [
  { 
    make: "BMW",
    model: "x5", 
    year: 2020,
    color: "black",
    warranty: true,
    speed() { console.log("the car is fast");}
  }, 
  { 
    make: "Benz",
    model: "AMG", 
    year: 2010,
    color: "black",
    warranty: true,
    speed() {
      console.log("the car is super fast");}
  },
  { 
    make: "Honda",
    model: "Accord", 
    year: 1999,
    color: "blue",
    warranty: false,
    speed() {
      console.log("the car is slow");}
  }
]

// Access the first object inside the array 
// console.log(cars[0]);

// Varable pointing to second car 
// console.log(cars[1]);

// Print the make of the first item
// console.log(cars[0]['make']);


// Add a new car below to the array 
// { 
//   make: "Toyota",
//   model: "Camry", 
//   year: 2008,
//   color: "Gray",
//   warranty: false,
//   speed() {
//     console.log("the car is slow");}
// }
// cars.push(
//     { 
//       make: "Toyota",
//       model: "Camry", 
//       year: 2010,
//       color: "Gray",
//       warranty: false,
//       speed() {
//         console.log("the car is slow");}
//     }
//     )
// cars


// Update Benz Warranty to false 
// cars[1].warranty = false
// cars[1].warranty;


// Call one of the methods
// cars[1].speed()

// write a for loop that iterates trough each object item and prints the make
// cars.forEach(item => {
//   console.log(item.make)
// })


// Write a loop that calls each method in every objects
// for (let i=0; i <= cars.length -1; i++) {
//   console.log(cars[i].speed())
// }

// Write a loop that adds new prop to each item called mileage with value of 50
// cars.forEach(item => {
//   item.mileage = 100;
// })
// cars


// Write a loop to print "name has warranty" only car warranty property set to true 
// cars.forEach(item => {
//   if (item.warranty === true) {
//     console.log(`${item.make} has warranty`)
//   }
// });

// Another Way
// for (let i=0; i <= cars.length -1; i++) {
//   if (cars[i].warranty === true) {
//     console.log(`${cars[i].make} has warranty`)
//   }
// }