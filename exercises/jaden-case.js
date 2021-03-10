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

    return item.toLowerCase().split(' ').map(letter => letter[0].toUpperCase() + letter.slice(1)).join(' ');

}

//* Begin of tests
const assert = require('assert')



assert.strictEqual(typeof jadenCase, 'function')

assert.strictEqual(jadenCase('you are beautiful'), 'You Are Beautiful')
assert.strictEqual(jadenCase('good morning'), 'Good Morning')
assert.strictEqual(jadenCase('heLlo guy'), 'Hello Guy')

//assert.fail('You must write your own tests')
// End of tests */