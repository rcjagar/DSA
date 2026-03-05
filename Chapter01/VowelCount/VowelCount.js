function VowelCount(str){
    let count = 0;
    let formattedstr = str.toLowerCase();
    for(let i = 0; i < formattedstr.length; i++){
      const char =  formattedstr[i] 
      if(
        char === 'a' ||
        char === 'e' ||
        char === 'i' ||
        char === 'o' ||
        char === 'u' 
      ){
        count ++
      }
    }
    return count
}

module.exports = VowelCount