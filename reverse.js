let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//reverse = [8, 7, 6, 5, 4, 3, 2, 1]
let reverse = [];

// way -1
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  //   reverse.push(numbers[i])
  //Pushing number to the end of the array so o from pop we got the same array as the previous one
  reverse.unshift(numbers[i]);
  //With the unshit operation we are pushing the element in the array as the first element
  //Inserting new element to the start of the array
}

// way - 2
let reverse2 = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reverse2.push(numbers[i]);
}

numbers.reverse();
// Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

console.log(reverse);
console.log(reverse2);
console.log(numbers);
