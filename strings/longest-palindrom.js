//Find the longest palindromic substring in a given string.
function longestPalindrom(str) {
    if(str.length <= 1) return;
    let longest = '';

    function expand(left, right) {
        while(left >=0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return str.slice(left+1, right);
    }

    for(let i=0; i<str.length; i++) {
        let oddPalindrom = expand(i, i);
        if(oddPalindrom.length > longest.length) {
            longest = oddPalindrom;
        }

        let evenPlaindrom = expand(i, i+1);
        if(evenPlaindrom.length > longest.length) {
            longest = evenPlaindrom;
        }
    }
    return longest;
}

console.log(longestPalindrom('babd'));