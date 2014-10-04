# module-generator 
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

The generator script I use for fresh modules. Forked from [hughsk](https://github.com/hughsk/module-generator). Feel free to fork for custom configuration.

## Usage

Install with npm:

``` bash
npm install -g mattdesl/module-generator
```

Update your npm config:

``` bash
npm config set init.author.name "Your Name"
npm config set init.author.email "me@example.com"
npm config set init.author.github "your-github-handle"
```

Run the generator in a fresh folder and you're good to go!

``` bash
mkdir my-new-module
cd my-new-module
module-generator
npm init
```

## Source Files

This uses `tape` for tests and writes an `index.js` and `test.js` (if they don't already exist). The test looks like this for a module called `my-funky-module`.

```js
var myFunkyModule = require('./')
var test = require('tape').test

test("..description..", function(t) {
	
	t.end()
})
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/module-generator/blob/master/LICENSE.md) for details.
