const CountOccurences = require('./CountOccurences')

test('this test for the occurences', () => { 
    expect(CountOccurences('tests','s')).toBe(2)
 })