let numbers = [1, 2, 43, 54, 4];

let players = [{}, {}, {}];
let employee = [
  { name: "Ashikur Rahman Ahiq", designation: "Content Writer", salary: 25000 },
  { name: "Atikur Rahman", designation: "Web Developer", salary: 27000 },
  { name: "Abdur Rahim", designation: "Digital Marketer", salary: 21000 },
  { name: "Asifa Rahmana", designation: "personal Assistent", salary: 60000 },
];

// console.log(employee[0]);
// console.log(employee[1].designation);
// console.log(employee[1].salary);
// console.log(employee[3].designation);

for (let emp of employee) {
  console.log(emp.salary, emp.designation);
}
