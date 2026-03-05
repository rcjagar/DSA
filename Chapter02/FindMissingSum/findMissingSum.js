function findMissingSum(arr){
    if(!arr || arr.length === 0){
        return undefined;
    }
    const n = arr.length + 1;

    const expectedsum = (n*(n+1))/2;
    const actualsum = arr.reduce((sum,num) => sum + num, 0)
    
    return actualsum - expectedsum
}

module.exports = findMissingSum;