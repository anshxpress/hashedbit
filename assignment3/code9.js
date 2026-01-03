function countWords(paragraph) {
    let words = paragraph.trim().split(/\s+/);
    return words.length;
}

let para = "This is a simple paragraph to test the code. Count the HashedBit words.";
console.log(countWords(para)); 