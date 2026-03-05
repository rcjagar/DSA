const HelloWorld = require('./HelloWorld')

let result = HelloWorld()
test('retun string HelloWorld', () => { 
    expect(result).toBe('Hello World Welcome')
 })