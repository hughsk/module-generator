# module-generator 
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

The generator script I use for fresh modules. Forked from [hughsk](https://github.com/hughsk/module-generator). Feel free to fork for further customization.

## Usage

Install with npm:

``` bash
npm install -g mattdesl/module-generator
```

Update your npm config:

```bash
# required
npm config set init.author.name "Your Name"
npm config set init.author.email "me@example.com"
npm config set init.author.github "your-github-handle"

# optional, defaults to your github
npm config set init.author.url "http://your-site.com/"
```

Run the generator in a fresh folder and you're good to go!

``` bash
mkdir my-new-module
cd my-new-module
module-generator
npm init
```

## Source Files

If you specify `--source` or `-s` flags, it will produce `index.js` and `test.js` files if they don't already exist. The index is empty, and the test looks like this for a module called `my-funky-module`.

```js
var myFunkyModule = require('./')
var test = require('tape').test

test(/* description inserted here */, function(t) {
	
	t.end()
})
```

Example:
 
```module-generator -s```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/module-generator/blob/master/LICENSE.md) for details.
