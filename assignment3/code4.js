const text = "This is a sample string with more than twenty characters.";
let vowelCount = 0;
let consonantCount = 0;
const vowels = "aeiouAEIOU";

for (const char of text) {
  if (/[a-zA-Z]/.test(char)) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);
