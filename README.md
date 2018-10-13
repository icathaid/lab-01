[![Build Status](https://www.travis-ci.com/icathaid/lab-01.svg?branch=master)](https://www.travis-ci.com/icathaid/lab-01)
========================================================

# Notes


Greet Module:

- Exports an anonymous function with a pairty of 1
-   takes a string as an input
-   checks for input validity ( must be string )
- Returns 'hello ' and the input string


Arithmetic Module:

- Exports `I don't know how to describe this type of function` with a pairty of two
-   takes two integers as inputs
-   checks for input validity ( must be string )
- Has four methods:
  - add() returns the sum of the inputs
  - subtract() returns the difference of the two inputs
  - multiply() returns the product of the two inputs
  - divide() returns the quotient of the two inputs


app can be launched and will log out sample data with `node index.js` from the CLI.

test suite can be run with `npm test` from the CLI.



## Implementation
[x] Setup the package.json file to run lint checks and tests against the greet and arithmetic modules

[x] Create a file called `index.js` that requires both the greet and arithmetic modules.

[x] Use this file to "greet" and perform math operations using the imported functions from the 2 modules

[x] `console.log()` the return values

### Arithmetic Module

#### Write Arithmetic Module Tests
[x] Use the faker module to randomize input

[x] Test each method for proper use (invoked with number arguments)

[x] Test each method for improper use (invoked with one or more non-number arguments)

#### Add features to the arithmetic module
[x] Add support for multiply and divide (be careful to not divide by zero!)

[x] Refactor the add, subtract, multiply to allow for an array of params so that you can do deeper calculations

#### Refactor the arithmetic module
[x] DRY the code by externalizing any type checking or argument validation from your methods
  There is a lot of repeated code in the input validation of the arithmetic tests.  There is probably a way to make it iterate through each method and perform the same tests (3/4 of them are identical) but it's beyond what I'll have time for.

---


### Greet Module
[x]  Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.

[x]  The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
  []  how to test for this?
[x]  The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")

[x]  The `greet` function should return `null` if the input is not a string


#### Greet Module Tests
[x] Use the faker module to randomize input

[x] Write a test that expects the greet module to return `null` when you supply non-string values

[x] Write a test the expects the greet module to return `'hello world'`

  [x] This should happen when invoked with `'world'` as the first argument

### Documentation
[x]  In your README.md file, describe the exported values of each module defined in your `lib` directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like.
