let input = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 57, subject2: 78, subject3: 45, subject4: 78, subject5: 99 } },
    { student3: { subject1: 67, subject2: 83, subject3: 34, subject4: 44, subject5: 48 } }
];

let output = input.map(item => {
    let studentName = Object.keys(item)[0];
    let subjects = item[studentName];
    let scores = Object.values(subjects);
    let sum = scores.reduce((a, b) => a + b, 0);
    let average = sum / scores.length;
    return {
        [studentName]: {
            average: average
        }
    };
});

console.log(output);