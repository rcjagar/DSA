const TitleCase = require('./TitleCase')

test('this will test for the title case', () => { 
    expect(TitleCase('test is here')).toBe('Test Is Here')
 })