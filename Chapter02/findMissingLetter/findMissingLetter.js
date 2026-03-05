function findMissingLetter(arr){
    // in order to know the missing letter we need to find the first letter in the array
    let start = arr[0].charCodeAt(0);
    //we will use for loop to iterate arround array and find the current iterating value is greater than 1
    for(let i = 0; i < arr.length; i++){
        let current = arr[i].charCodeAt(0)

        if(current - start > 1){
            return String.fromCharCode(start+1)
        }
        start = current;
    }

    return ' '
}

module.exports = findMissingLetter;

