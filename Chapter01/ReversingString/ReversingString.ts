function ReversingString(str:string):string{
    // initilize a variable to  store the reversed string value 
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed
}


module.exports = ReversingString