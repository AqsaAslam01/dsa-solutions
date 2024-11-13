// check if a string is palindrom 
//without buildin functions
function isPalindrom(str) {
    for(let i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length-1-i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrom('madam'));
console.log(isPalindrom('hello'));

//with buildin functions
function isPalindrom2(str) {
    let reverse = str.split('').reverse().join('');
    return str === reverse;
}

console.log(isPalindrom2('hello'));
console.log(isPalindrom2('madam'));
