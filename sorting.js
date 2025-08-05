let numbers = [90, 87, 63, 1, 67, 12];

console.log(numbers);

// Sorts an array in place. This method mutates the array and returns a reference to the same array.
numbers.sort();
console.log(numbers);

let friends = ["Sakib", "Nokib", "Akib", "Rakib", "Bakib"];
friends.sort();
console.log(friends);

let ages = [1, 5, 100, 15, 8, 2, 28];
console.log(ages);
ages.sort();
//Javascript has a low mistake where it compare both the numbers when sorting as string
console.log(ages);

//To Solve this issue we can do that
// sorting in ascending order
let sorted_ages = ages.sort(function (a, b) {
  return a - b;
});
// sorting in descending order
let des_ages = ages.sort(function (a, b) {
  return b - a;
});
console.log(sorted_ages);
