'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */


// Your code : 

function whisper(params) {
    let low = params.toLowerCase();

    return `* ${low} *`
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')

assert.strictEqual(whisper('Bonjour'), '* bonjour *')
assert.strictEqual(whisper('BON'), '* bon *')
assert.strictEqual(whisper('heLlo'), '* hello *')

//assert.fail('You must write your own tests')
// End of tests */