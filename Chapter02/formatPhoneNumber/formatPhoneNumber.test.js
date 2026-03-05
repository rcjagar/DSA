const formatPhoneNumber = require('./formatPhoneNumber')

test('this test wether we are returning phone number in correct format', () => { 
    expect(formatPhoneNumber('2,1,4,4,3,0,1,9,6,3')).toEqual('(214)430-1963')
 })