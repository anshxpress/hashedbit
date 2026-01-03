const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

rl.question('Enter the sentence: ', (sentence) => {
    rl.question('Enter the wrong word to replace: ', (wrong) => {
        rl.question('Enter the correct word: ', (correct) => {
            let corrected = correctfn(sentence, wrong, correct);
            console.log(corrected);
            rl.close();
        });
    });
});


