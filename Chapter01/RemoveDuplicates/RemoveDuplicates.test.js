const RemoveDuplicates = require('./RemoveDuplicates')

test('this will check for the duplicate values and remove', () => { 
    expect(RemoveDuplicates([1,2,5,5,true, true])).toEqual([1,2,5,true])
})