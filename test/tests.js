const test = QUnit.test;

import fizzBuzz from '../src/fizzBuzz.js';

test('See if input divisible by 15', function(assert) {
    const input = 30;
    const result = fizzBuzz(input);
    assert.equal(result, 'FizzBuzz');
});
test('See if input divisible by 5', function(assert) {
    const input = 10;
    const result = fizzBuzz(input);
    assert.equal(result, 'Buzz');
});
test('See if input divisible by 3', function(assert) {
    const input = 6;
    const result = fizzBuzz(input);
    assert.equal(result, 'Fizz');
});
test('See if input isnt divisible by 3 or 5', function(assert) {
    const input = 7;
    const result = fizzBuzz(input);
    assert.equal(result, input);
});