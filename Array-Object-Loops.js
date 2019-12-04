//////////// Object simple loops /////////////
let car = {
  make: 'Ford',
  model: 'Mustang',
  year: 2020,
  color: 'Black'
}
// car.make
// console.log(Object.keys(car));
// console.log(Object.values(car));
// Object.entries(car); // Array of each key/value 

// Log the values in a loop
// Object.values(car).forEach(element => {
//   console.log(element);
// })


// Access a value of some property 
// car['make']


// for in loop to log each prop and its Value 
// for (let prop in car) {
//   console.log(prop + ": " + car[prop]);
// }

// for each loop to log each prop and its Value since Object.keys creates an array
// let carKeys = Object.keys(car);
// carKeys.forEach(element => {
//   console.log(element + ": " + car[element])
// });



///////////// Arrays Simple Loops ////////////////
// let car = ['Ford','Mustang',2020,'Black'];
// car[0];
// car[1];
// car[2];
// car[3];



// Instead 
// run a for of loop to get all the values
// for (let item of car) {
//   console.log(item);
// }

//  run a forEach loop to get all the values
// car.forEach(item => {
//   console.log(item);
// })


// run a normal loop to get all the values
// for (let i=0; i <= car.length -1; i++) {
//     console.log(car[i]);
// }


// Task : Print each element with its index:
// for (let i=0; i <= car.length -1; i++) {
//   console.log(i + ": " + car[i]);
// }