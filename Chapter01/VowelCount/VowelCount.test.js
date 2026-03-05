const VowelCount = require('./VowelCount')

test('check for the vowels and increase there count', () => { 
    expect(VowelCount('test')).toBe(1)
 })