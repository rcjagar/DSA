function findFirstNonRepeatingChar(str){
    let charCount = {}
    for(const char of str){
        charCount[char] = (charCount[char] || 0) + 1
    }

    // find first non repeating charecter
    for(const char of str){
        if(charCount[char] === 1){
            return char
        }
    }
    return null
}

console.log(findFirstNonRepeatingChar('abbnncc'))