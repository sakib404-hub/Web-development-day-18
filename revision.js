// let num = 0; can be change
// var num = 0; sould not use unless there is an exceptional any exceptional case arise
// const num = 0; value not going to change

// variables primitive and non primitive data type
const price = 800;
console.log(price);

const name = "kir ali modon khan";
console.log(name);

const isPoor = true;
const friends = ["elon mask", "Mark", "Bill", "Jeef"];
const student = {
  class: 9,
  name: "Tomi khan",
  age: 19,
  address: "Kochukhet",
};

// conditional
if (price < 1000) {
  console.log("The Price is Within my Budget");
} else if (price < 1500) {
  console.log("i will lend some money from my friend");
} else {
  console.log("This is too much expensive for me");
}

// loop
// for loop-
for (let i = 1; i < 5; i++) {
  console.log("SleepLess Night");
}

// while loop -
let pushUp = 0;
while (pushUp < 10) {
  console.log("PUSHUP");
  pushUp++;
}
