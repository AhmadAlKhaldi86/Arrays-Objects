///////////// Object Simple Loops ////////////////
// car = {
//   make: 'Ford',
//   model: 'Mustang',
//   year: 2020,
//   color: 'Black'
// }


// Basics 
// Access a value of some property 
// car['make']
// car.make


// The use of Object Class with its buildin methods. 
// Object.keys(car);
// Object.values(car);
// Object.entries(car); // Array of key,value 


// Use a for in loop in object to return key: value for each prop. 
// for (let prop in car) {
//   console.log(prop + ": " + car[prop]);
// }


// Loop in the array made by Object and log the values 
// Use forEach 
// Object.values(car).forEach(element => {
//   console.log(element)
// });

// for each loop to log each prop and its Value since Object.keys creates an array
// let carKeys = Object.keys(car);
// carKeys.forEach(key => {
//   console.log(key + ": "+ car[key]);
// })


///////////// Arrays Simple Loops ////////////////
// let car = ['Ford','Mustang',2020,'Black'];


// car[0];
// car[0][0];

// Use a for of loop to print each item 
// for (let item of car) {
//   console.log(item);
// }


// Use a forEach loop to print each item
// car.forEach(item => {
//   console.log(item);
// })

// Use a let i = 0; i++ to get all items 
// for (i=0; i < car.length; i++) {
//    console.log(car[i])
// }

// Log each item with its index. 
// for (i=0; i < car.length; i++) {
// console.log(i + ": "+ car[i])
// }