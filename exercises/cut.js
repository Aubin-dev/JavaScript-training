'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code :

function cutFirst(str) {
    return str.slice(2)
}

function cutLast(str) {
    return str.slice(0, -2)
}

function cutFirstLast(str) {
    return str.slice(2, -2)
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')


assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFirstLast.length, 1)

assert.deepStrictEqual(cutFirst('learn'), 'arn')
assert.deepStrictEqual(cutFirst('traveler'), 'aveler')
assert.deepStrictEqual(cutFirst('having'), 'ving')


assert.deepStrictEqual(cutLast('learn'), 'lea')
assert.deepStrictEqual(cutLast('traveler'), 'travel')
assert.deepStrictEqual(cutLast('having'), 'havi')


assert.deepStrictEqual(cutFirstLast('learn'), 'a')
assert.deepStrictEqual(cutFirstLast('traveler'), 'avel')
assert.deepStrictEqual(cutFirstLast('having'), 'vi')

//assert.fail('You must write your own tests')
// End of tests */