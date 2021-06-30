# Mocha and Chai Introduction

In this reading, we will:

* understand what BDD is and why it's used
* install a BDD testing framework.
use describe and it to setup unit tests.
* use assert to perform unit tests.
* appreciate how unit testing applies to the world of web development (and not just command line scripts).

---

### BDD (Behaviour Driven Development)

This proces encourages developers to specify the behaviour of their app in terms of user stories. These are broken down into scenarios that can be built and tested.

### BDD Frameworks

Mocha is a testing framework while Chai is an assertion library which contains functions that verify test results. These popular packages test javascript code.

To get started, click [here](https://www.sitepoint.com/unit-test-javascript-mocha-chai/).

All Mocha tests follow the same basic pattern.

`describe` is used to group individual tests. The first parameter indicates what we are testing (eg. "describe how an array should work").

`it` is used to create the actual tests. The first parameter provides a human-readable description of the test. Each individual test should explain one specific behaviour (eg. "it should start empty").

*System Under Test* or *SUT* refers to the thing you are testing. The last thing in a test should be the validation - an assertion which checks the result (eg. using `assert.equal` to compare the "actual" value vs the "expected" value).