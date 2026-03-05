function areAllCharUnique(str){
    // we will create an object to store each value of the string
    let charCount = {}
    //we will loop through an string
    for(let i = 0; i < str.length; i++){
    // we will check wether the current value is already in the object
    const char = str[i]
    if(charCount[char]){
        return false
    }
    charCount[char] = true
    }
    return true
}

module.exports = areAllCharUnique;