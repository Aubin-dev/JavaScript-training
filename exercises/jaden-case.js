'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */



// your code :

function jadenCase(item) {
    let first = item.split(' ')
    for (let i = 0; i < item.length; i++) {
        return first[i].toCapitalize().join('')
    }
}
jj

//* Begin of tests
const assert = require('assert')



assert.strictEqual(typeof jadenCase, 'function')

assert.strictEqual(jadenCase('How are you'), 'How Are You ?')
assert.strictEqual(jadenCase('good morning'), 'Good Morning')
assert.strictEqual(jadenCase('heLlo'), 'Hello')

assert.fail('You must write your own tests')
    // End of tests */