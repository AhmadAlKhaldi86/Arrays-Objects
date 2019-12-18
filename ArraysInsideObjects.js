// Arrays inside objects:
// let car = {
//   make: 'Ford',
//   model: 'Mustang',
//   year: 2020,
//   colors: ['Black','Blue','Gray','Yellow']
// }
// car.colors[0]

// //Access Car colors , 2nd color 
// car.colors[1];

// //Add New color in colors at end of array using push
// //This will return the number of indexes. 
// car.colors.push("green");

// //Remove from end
// Notice this will return the removed color 
// car.colors.pop(); 

// //Change the value of the last item to Silver 
// car.colors[car.colors.length -1] = "Silver"
// Another Way
// car.colors.splice(car.colors.length -1, 1, "Silver");

// //Add new color in between 
// car.colors.splice(car.colors.length -1, 0, "Green");
// car

// // Loops and print values of array inside object car 
// let carColors = car.colors 
// carColors
// carColors.forEach(item => {console.log(item)});

// // Loops and print indexes: values
// let carColors = car.colors 
// for (let i=0; i < carColors.length; i++) { 
//   console.log(i + ": " + carColors[i]);
//    }