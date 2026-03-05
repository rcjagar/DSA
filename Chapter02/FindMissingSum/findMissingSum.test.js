const findMissingSum = require('./findMissingSum')

test('this will check for missing number', () => {
    expect(findMissingSum()).toEqual(undefined)
    expect(findMissingSum([3,5,6])).toEqual(4)
})