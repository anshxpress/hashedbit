const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findTax(salary) {
    let taxAmount = 0;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxAmount = 0;
            break;
        case (salary > 500000 && salary <= 1000000): // 10% 
            taxAmount = salary * 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):  // 20% 
            taxAmount = salary * 0.20;
            break;
        case (salary > 1500000):
            taxAmount = salary * 0.30; //30%
            break;
        default:
            return "Invalid salary amount";
    }

    return taxAmount;
}

rl.question("Please enter your salary: ", (userInput) => {
    let salaryInput = Number(userInput);

    if (isNaN(salaryInput)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        let result = findTax(salaryInput);
        console.log("Tax for salary " + salaryInput + " is: " + result);
    }

    rl.close();
});