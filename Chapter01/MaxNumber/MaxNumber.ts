function MaxNumber(arr : number[]) : number {
    let max : number = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

module.exports = MaxNumber