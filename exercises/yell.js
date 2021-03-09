'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code : 

function yell(params) {
    let low = params.toUpperCase();

    return low;
}


//* Begin of tests
const assert = require('assert')


assert.strictEqual(typeof yell, 'function')

assert.strictEqual(yell('Bonjour'), 'BONJOUR')
assert.strictEqual(yell('BON'), 'BON')
assert.strictEqual(yell('heLlo'), 'HELLO')


//assert.fail('You must write your own tests')
// End of tests */