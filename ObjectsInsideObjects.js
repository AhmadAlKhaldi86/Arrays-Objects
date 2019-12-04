// Objects Inside other Objects / Neasted 

let car = {
  make: 'Ford',
  model: 'Mustang',
  year: 2020,
  color: 'Black',
  trims: {trim1: 'EcoBoost', 
         trim2: 'GT', 
         trim3: 'Cobra'}
}

// Var that points to trim1 value
// let ecoMustang = car.trims.trim1
// console.log(ecoMustang);

// Update with new property of the nested object 
// car.trims.trim4 = "Luxury Mustang"
// car


// Update an existing property with new value 
// car.trims.trim2 = "GT 500"
// car

// Remove Cobra from Mustang 2020
// delete car.trims.trim3
// car


// Loop through trims/values
// let trims = car.trims;
// for (let prop in trims) {
//   console.log(prop + ": " + trims[prop]);
// }

// You can do a forEach to get key/values
// let trims = car.trims;
// Object.keys(trims).forEach(key => {
//   console.log(`key: ${key}, value: ${trims[key]}`);
// })
