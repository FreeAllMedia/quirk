# Quirk.js [![npm version](https://img.shields.io/npm/v/quirk.svg)](https://www.npmjs.com/package/quirk) [![license type](https://img.shields.io/npm/l/quirk.svg)](https://github.com/FreeAllMedia/quirk.git/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/quirk.svg)](https://www.npmjs.com/package/quirk) ![ECMAScript 6 & 5](https://img.shields.io/badge/ECMAScript-6%20/%205-red.svg)

A helper for setting attributes on an object in advance.

```javascript
import Quirk from "quirk";

const quirk = new Quirk;
quirk.saySomething(); // will output "Something"
```

# Quality and Compatibility

[![Build Status](https://travis-ci.org/FreeAllMedia/quirk.png?branch=master)](https://travis-ci.org/FreeAllMedia/quirk) [![Coverage Status](https://coveralls.io/repos/FreeAllMedia/quirk/badge.svg)](https://coveralls.io/r/FreeAllMedia/quirk) [![bitHound Score](https://www.bithound.io/github/FreeAllMedia/quirk/badges/score.svg)](https://www.bithound.io/github/FreeAllMedia/quirk)  [![Dependency Status](https://david-dm.org/FreeAllMedia/quirk.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/quirk?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/quirk/dev-status.svg)](https://david-dm.org/FreeAllMedia/quirk?theme=shields.io#info=devDependencies)

*Every build and release is automatically tested on the following platforms:*

![node 0.12.x](https://img.shields.io/badge/node-0.12.x-brightgreen.svg) ![node 0.11.x](https://img.shields.io/badge/node-0.11.x-brightgreen.svg) ![node 0.10.x](https://img.shields.io/badge/node-0.10.x-brightgreen.svg)
![iojs 2.x.x](https://img.shields.io/badge/iojs-2.x.x-brightgreen.svg) ![iojs 1.x.x](https://img.shields.io/badge/iojs-1.x.x-brightgreen.svg)


[![Sauce Test Status](https://saucelabs.com/browser-matrix/quirk.svg)](https://saucelabs.com/u/quirk)


*If your platform is not listed above, you can test your local environment for compatibility by copying and pasting the following commands into your terminal:*

```
npm install quirk
cd node_modules/quirk
gulp test-local
```

# Installation

Copy and paste the following command into your terminal to install Quirk:

```
npm install quirk --save
```

## Import / Require

```
// ES6
import quirk from "quirk";
```

```
// ES5
var quirk = require("quirk");
```

```
// Require.js
define(["require"] , function (require) {
    var quirk = require("quirk");
});
```

# Getting Started

## More insights

In order to say something, you should know that `quirk()` ... (add your test here)

# How to Contribute

See something that could use improvement? Have a great feature idea? We listen!

You can submit your ideas through our [issues system](https://github.com/FreeAllMedia/quirk/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

We always aim to be friendly and helpful.

## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using Quirk.js on a platform we aren't automatically testing for.

```
npm test
```


