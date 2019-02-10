# npm-version-compare

[![npm version](https://img.shields.io/npm/v/npm-version-compare.svg)](https://www.npmjs.com/package/npm-version-compare)
[![Build Status](https://travis-ci.com/shinnn/npm-version-compare.svg?branch=master)](https://travis-ci.com/shinnn/npm-version-compare)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/npm-version-compare.svg)](https://coveralls.io/github/shinnn/npm-version-compare?branch=master)

Compare [npm CLI](https://github.com/npm/cli) version string with another version string

```javascript
const npmVersionCompare = require('npm-version-compare');

// When npm CLI v6.7.0 is installed

(async () => {
  await npmVersionCompare('6.6.0'); // 1
  await npmVersionCompare('6.7.0'); // 0
  await npmVersionCompare('6.8.0'); // -1
})();
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/about-npm/).

```
npm install npm-version-compare
```

## API

```javascript
const npmVersionCompare = require('npm-version-compare');
```

### npmVersionCompare(*version*)

*version*: `string` ([SemVer](https://semver.org/) version expression)  
Return: `Promise<integer>` (`-1`, `0` or `1`)

The resultant promise will be fulfilled with:

* `-1` if a given version is greater than the version of currently installed `npm`
* `0` if a given version is the same value as the `npm` version
* `1` if the `npm` version is greater than a given version

## Related project

* [npm-cli-version](https://github.com/shinnn/npm-cli-version) — Get the currently installed npm version

## License

[ISC License](./LICENSE) © 2018 - 2019 Shinnosuke Watanabe
