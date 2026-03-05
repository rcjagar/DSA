function RemoveDuplicates(str){
    let uniqueArr = [];
    for(let i = 0; i < str.length; i++){
        if(!uniqueArr.includes(str[i])){
            uniqueArr.push(str[i])
        }
    }
    return uniqueArr
}

module.exports = RemoveDuplicates