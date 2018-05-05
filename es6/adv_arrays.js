const arr = [1, 2, 10, 16];

const double = [];
const newArray = arr.forEach(num => {
  double.push(num * 2);
});

console.log(double);

// MAP

const mapArray = arr.map(num => num * 2);

console.log('map', mapArray);

// FILTER

const filterArray = arr.filter(num => num > 5);

console.log('filter', filterArray);

// REDUCE

const reduceArray = arr.reduce((accumulator, num) => {
  return accumulator + num;
}, 50); // The last argument is the starting value (50)

console.log('reduce', reduceArray);
