const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfProducts(n1, n2) {
    let sum = 0;
    while (n1 > 0 || n2 > 0) {
        sum += (n1 % 10) * (n2 % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
}

rl.question('Enter first number: ', (answer1) => {
    rl.question('Enter second number: ', (answer2) => {
        const num1 = parseInt(answer1);
        const num2 = parseInt(answer2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid input. Please enter numbers.");
        } else {
            const result = sumOfProducts(num1, num2);
            console.log(`Sum of products of digits for ${num1} and ${num2} is: ${result}`);
        }
        rl.close();
    });
});
