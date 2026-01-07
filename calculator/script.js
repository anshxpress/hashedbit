function calculate(operation) {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDisplay = document.getElementById('result');

    const val1 = parseFloat(num1Input.value);
    const val2 = parseFloat(num2Input.value);

    // Basic Validation
    if (isNaN(val1) || isNaN(val2)) {
        resultDisplay.textContent = "Error";
        resultDisplay.style.color = "#ef4444"; 
        return;
    }

    let result = 0;

    switch (operation) {
        case 'add':
            result = val1 + val2;
            break;
        case 'subtract':
            result = val1 - val2;
            break;
        case 'multiply':
            result = val1 * val2;
            break;
        case 'divide':
            if (val2 === 0) {
                resultDisplay.textContent = "Cannot divide by 0";
                resultDisplay.style.color = "#ef4444";
                return;
            }
            result = val1 / val2;
            break;
        default:
            return;
    }

    const formattedResult = parseFloat(result.toFixed(4));

    resultDisplay.textContent = formattedResult;
    resultDisplay.style.color = "#10b981";
}
