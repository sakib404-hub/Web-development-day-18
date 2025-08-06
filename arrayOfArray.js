const numbers = [1, 2, 3, 4, 5];

const tournamentRuns = [[], [], []];
const examMarks = [
  //This is known as the array of array or two dimensional array
  [97, 89, 67, 98, 38],
  [12, 22, 45, 64, 89],
  [45, 60, 70, 80, 90],
];

console.log(numbers[0]);
console.log(examMarks[0]);

// console.log(examMarks[0][0]);
//copying the first array in the firstclassMarks then getting the first element from that
const first_class_marks = examMarks[0];
console.log(first_class_marks[0]);

examMarks[1][0] = 92;
console.log(examMarks);

examMarks[1].push(87);
examMarks[0].push(77);
console.log(examMarks);
