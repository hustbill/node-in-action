##Assertions

Mocha allows you to use any assertion library you want, if it throws an error, it will work! This means you can utilize libraries such as should.js, node's regular assert module, or others. The following is a list of known assertion libraries for node and/or the browser:

should.js BDD style shown throughout these docs
expect.js expect() style assertions
chai expect(), assert() and should style assertions
better-assert c-style self-documenting assert()

## Synchronous code 

When testing synchronous code, omit the callback and Mocha will automatically continue on to the next test.

##Asynchronous code

Testing asynchronous code with Mocha could not be simpler! Simply invoke the callback when your test is complete. By adding a callback (usually named done) to it() Mocha will know that it should wait for completion.


