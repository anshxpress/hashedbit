const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemant", scores: [90, 90, 80, 80] },
];

const result = students.map(student => {
  // Calculate sum using reduce
  let sum = student.scores.reduce((acc, curr) => acc + curr, 0);
  // Calculate avg
  let avg = sum / student.scores.length;
  
  return { name: student.name, average: avg };
});

console.log(result);