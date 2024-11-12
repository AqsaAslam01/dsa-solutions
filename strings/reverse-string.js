// using js build-in functions

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

// without using buildin functions

function reverseString2(str) {
    let result = '';
    for(let i = str.length-1; i >= 0; i--) {
        result += str[i];        
    }
    return result;
}

console.log(reverseString2('there'));
