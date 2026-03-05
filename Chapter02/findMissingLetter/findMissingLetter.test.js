const findMissingLetter = require('./findMissingLetter')

test('find the missing letter in an array', () => { 
    expect(findMissingLetter(['a', 'b', 'd'])).toEqual('c')
    expect(findMissingLetter([' '])).toEqual(' ')
 })