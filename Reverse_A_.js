function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = [];

    for (const word of words) {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedWords.push(reversedWord);
    }

    return reversedWords.join(' ');
}

const inputSentence = prompt("Enter a sentence:");
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
