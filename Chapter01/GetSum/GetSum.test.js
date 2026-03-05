const GetSum = require('./GetSum')

test('this is test for sum', () => { 
    let num1 = 2;
    let num2 = 3;
    expect(GetSum(num1,num2)).toBe(5)
 })