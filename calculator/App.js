const Calculator = () => {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [result, setResult] = React.useState(null);

    const handleCalculate = (operation) => {
        const val1 = parseFloat(num1);
        const val2 = parseFloat(num2);

        if (isNaN(val1) || isNaN(val2)) {
            setResult('Please enter valid numbers');
            return;
        }

        let res = 0;
        switch (operation) {
            case '+':
                res = val1 + val2;
                break;
            case '-':
                res = val1 - val2;
                break;
            case '*':
                res = val1 * val2;
                break;
            case '/':
                if (val2 === 0) {
                    setResult('Cannot divide by zero');
                    return;
                }
                res = val1 / val2;
                break;
            default:
                return;
        }
        setResult(res);
    };

    return (
        <div className="calculator">
            <h2>React Calculator</h2>
            <div className="input-group">
                <label>Number 1:</label>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Enter first number"
                />
            </div>
            <div className="input-group">
                <label>Number 2:</label>
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Enter second number"
                />
            </div>

            <div className="buttons">
                <button onClick={() => handleCalculate('+')}>+</button>
                <button onClick={() => handleCalculate('-')}>-</button>
                <button onClick={() => handleCalculate('*')}>*</button>
                <button onClick={() => handleCalculate('/')}>/</button>
            </div>

            <div className="result">
                Output: {result !== null ? result : ''}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />);
