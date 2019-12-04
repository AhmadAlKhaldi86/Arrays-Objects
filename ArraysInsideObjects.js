// Arrays inside objects:
let car = {
  make: 'Ford',
  model: 'Mustang',
  year: 2020,
  colors: ['Black','Blue','Gray','Yellow']
}
// Access Car second speed 
// car.colors[1];

// firstColor
// let firstColor = car.colors[0];
// console.log(firstColor);

// Add new color to end of list
// car.colors.push("Green"); // This will return the number of indexes. 

// Remove from end
// car.colors.pop(); // Notice this will return the removed color 

// Change the value of the last item to Silver 
// car.colors[car.colors.length -1] = "Silver"
// Another Way
// car.colors.splice(car.colors.length -1, 1, "Silver");

// Add new color in between
// car.colors.splice(car.colors.length -1, 0, "Green");
// car

// Loops and print values
// car.colors.forEach(item => {
//   console.log(item);
// })

// Loop and print values
// for (let item of car.colors) {
//   console.log(item);
// }


// Loops and print indexes: values
// for (let i=0; i <= car.colors.length - 1; i++) {
//   console.log(i + ":" + car.colors[i]);
// }