let price = 20; ///primitive behaves like this
const compPrice = price;
price = 15;
console.log(price);
console.log(compPrice);

//Works in the same reference means changing one value will ultimately change the other value also
//This is non-primitive this works like this, referencing the same thing changing one will change the others
const productsPrice = [25, 25, 25];
const competeProducts = productsPrice;
competeProducts[0] = 15;
productsPrice[1] = 78;
console.log(productsPrice);
console.log(competeProducts);

//One way of getting out of the reference
const numbers = [10, 20, 30, 50, 70];
const num = [];
for (let nb of numbers) {
  num.push(nb);
}
num[0] = 77;
console.log(num);
console.log(numbers);

// Another Way of avoiding Reference
// const new_num = Array.from(numbers);
// const new_num = [].concat(numbers);.
const new_num = [...numbers];
new_num[2] = 99;
console.log(new_num);
