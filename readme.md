# build-shell-script
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![XO code style][xo-image]][xo-url]

> Build shell aliases and functions from Node

## Install

```
npm install --save build-shell-script
```

## Usage

```js
const buildShellScript = require('build-shell-script');

buildShellScript.alias('gi', 'git init');
//=> 'alias gi="git init"

buildShellScript.fn('gi', 'git init');
//=> function gi() {
//     git init
//   }

buildShellScript.fn('g', [
  'git add -A',
  'git commit',
  'git push'
]);
//=> function g() {
//     git add -A
//     git commit
//     git push
//   }
```

## API

### buildShellScript.alias(prefix, suffix)

#### Arguments

| Name    | Description                     |   Type   |  Default       |
| ------- | ------------------------------- | -------- |  -------       |
| prefix  | Left side of shell alias        | `string` |None  (required)|
| suffix  | Right side of shell alias       | `string` |None  (required)|

#### Returns

Type: `string`

### buildShellScript.fn(prefix, suffix)

#### Arguments

| Name    | Description                     |   Type   |  Default       |
| ------- | ------------------------------- | -------- |  -------       |
| prefix  | Left side of shell function     | `string` |None  (required)|
| suffix  | Right side of shell function | `string` or `array` |None  (required)|

#### Returns

Type: `string`

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

[npm-image]: https://badge.fury.io/js/build-shell-script.svg
[npm-url]: https://npmjs.org/package/build-shell-script
[travis-image]: https://travis-ci.org/dawsonbotsford/build-shell-script.svg?branch=master
[travis-url]: https://travis-ci.org/dawsonbotsford/build-shell-script
[xo-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
