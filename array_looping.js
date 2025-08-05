let fruits = ["apple", "banana", "watermelon", "Dav", "Avocado", "litche"];
// console.log(fruits.length);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < fruits.length; i++) {
  console.log(`The ${i + 1} number elemnt is ${fruits[i]}`);
}

const numbers = [12, 34, 29, 40, 46, 37, 32, 78];
for (let j = 0; j < numbers.length; j++) {
  console.log(numbers[j]);
}

let fruit = 0;
while (fruit < fruits.length) {
  console.log(fruits[fruit]);
  fruit++;
}
