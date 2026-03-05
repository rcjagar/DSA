const InterSectionArray = require('./InterSectionArray')

test('this test is to check intersection elements of two arrays', () => { 
    expect(InterSectionArray([3,7,8,9,2],[2,6,7,8])).toEqual([ 7, 8, 2 ])
 })