const displayLikes = require('./displayLikes')

test('this tests for how many likes thus a post got', () => {
    expect(displayLikes([])).toEqual('no one has liked it')
    expect(displayLikes(['ram'])).toEqual('ram has liked it')
    expect(displayLikes(['ram','jai'])).toEqual('ram, jai liked it')
    expect(displayLikes(['ram','jai','tom'])).toEqual('ram, jai, tom has liked it')
    expect(displayLikes(['ram','jai','tom', 'harry'])).toEqual('ram, jai, 2 liked it')
 })