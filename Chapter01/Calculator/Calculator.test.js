const Calculator = require('./Calculator')

test('should test for the calculator operations', () => { 
    expect(Calculator(1,2,'+')).toBe(3);
    expect(Calculator(1,2,'-')).toBe(-1);
    expect(Calculator(1,2,'*')).toBe(2);
    expect(Calculator(1,2,'/')).toBe(0.5);
    expect(() => Calculator(1,2,'%')).toThrow('invalid operator');
 })