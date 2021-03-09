'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */




// Your code :


function keepFirst(string) {
    return string.slice(0, 2);
};

function keepLast(string) {
    return string.slice(-2);
};

function keepFirstLast(string) {
    return string.split("").slice(2, 4).
    join('');
};



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')


assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepFirstLast.length, 1)

assert.deepStrictEqual(keepFirst('learn'), 'le')
assert.deepStrictEqual(keepFirst('traveler'), 'tr')
assert.deepStrictEqual(keepFirst('having'), 'ha')


assert.deepStrictEqual(keepLast('learn'), 'rn')
assert.deepStrictEqual(keepLast('traveler'), 'er')
assert.deepStrictEqual(keepLast('having'), 'ng')


assert.deepStrictEqual(keepFirstLast('learn'), 'ar')
assert.deepStrictEqual(keepFirstLast('traveler'), 'av')
assert.deepStrictEqual(keepFirstLast('having'), 'vi')


//assert.fail('You must write your own tests')
// End of tests */