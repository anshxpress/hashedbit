const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function repeatedSum(num) {
    while (num > 9) {
        let sum = 0;
        let strNum = num.toString()
        for (let digit of strNum) {
            sum += Number(digit);
        }   

        num = sum;
    }
    return num;
}
rl.question("Enter a number: ", (input) => {
    let result = repeatedSum(Number(input));

    console.log("Result: " + result);

    rl.close();
});