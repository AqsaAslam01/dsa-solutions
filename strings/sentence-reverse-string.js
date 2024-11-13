// without build in functions
function reverseSentence(sentence) {
let words = sentence.split(' ');
let reversedSentence = '';
for(let i = 0; i < words.length; i++) {
    let reverse = '';
    for(let j = words[i].length-1; j >=0; j--) {
        reverse += words[i][j];
    }
    reversedSentence += reverse + (i < words.length ? ' ' : '');
}
 return reversedSentence;
}

console.log(reverseSentence('this is my name'));


function reverseSentence2(sentence) {
    return sentence
    .split(' ')
    .map(word=> word.split('').reverse().join(''))
    .join(' ');
   }
   
   console.log(reverseSentence2('hello world'));