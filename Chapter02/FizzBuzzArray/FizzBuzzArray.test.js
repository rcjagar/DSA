const FizzBuzzArray = require('./FizzBuzzArray')

test('this should test for array returning fizzbuzz array', () => { 
    expect(FizzBuzzArray(15)).toEqual([
  1,          2,
  'Fizz',     4,
  'Buzz',     'Fizz',
  7,          8,
  'Fizz',     'Buzz',
  11,         'Fizz',
  13,         14,
  'FizzBuzz'
])
 })