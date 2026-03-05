const areAllCharUnique = require('./areAllCharUnique')

test('are all the char in the string are unique', () => { 
    expect(areAllCharUnique('this is test')).toBe(false)
    expect(areAllCharUnique('this')).toBe(true)
 })