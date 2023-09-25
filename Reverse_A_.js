function reverseWordsInSentence(sentence) {
    let reversedSentence = '';
    let wordStart = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) {
            let wordEnd = (i === sentence.length - 1) ? i : i - 1;
            let word = '';

            for (let j = wordStart; j <= wordEnd; j++) {
                word = sentence[j] + word;
            }

            reversedSentence += word + ' ';
            wordStart = i + 1;
        }
    }

    return reversedSentence.trim(); // Remove trailing space
}

// Example usage:
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); 
