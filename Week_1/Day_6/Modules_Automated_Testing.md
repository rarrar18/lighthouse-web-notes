# Modules and Automated Testing

## Modules

While libraries hold packages (lists of functions that can be imported and used), each file is considered a module. These modules can *require* each other to add functionality to a single file. This eliminates the need to copy/paste each function several times as files can then access them directly within the same directory.

### Dependencies

When installing a package, sometimes these files require other files to run. We call these **dependencies** and they are usually downloaded alongside a package automatically.

The `.json` file that accompanies each download lists down dependencies and other shortcuts to files.

See more [here](https://semver.org/).

---

## Automated Testing

Automated testing is the practice of writing code to programmatically test the actual code we want to write.

It offers several benefits over manual testing and can help save time with debugging, especially within a team.<br>

### Types of Testing

Programmers distinguish between [different types of testing](https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/): unit testing, integration testing, and functional testing.

**Unit testing** is isolated and usually only tests a single implementation at a time.

**Integration testing** is used for checking multiple components and how they work together. This is useful for testing separate systems such as a database and your application. With the added complexity, developers may need to configure test databases and such.

**Functional testing**, or E2E testing or browser testing, is used for checking the complete functionality of an application. For web apps, this test would automatically click through the elements and test several inputs. While testing possible user interactions it is able to simulate the flow of cycling through an application's layers.

["Happy path"](https://effectivecio.com/2009/11/02/the-happy-path/) tests are used to catch the most critical bugs but are not sufficient for building reliable and robust applications.

### More on Unit Testing

Unit testing is just writing code that tests other code.

Acting like a magic button, running `nmp test` within our CLI can quickly test out code. This eliminates the need for manual testing (eg. checking the browser to see if it runs, refreshing web pages, etc.).

