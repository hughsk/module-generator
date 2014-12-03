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
```

This will produce some generic files already filled in:

```
README.md
LICENSE.md
package.json
.gitignore
.npmignore
```

## Usage

```
Options
	--test, -t      generate test.js and index.js with tape
	--offline, -o   when generating tests, don't npm install
```

## Basic Tests

If you specify `--test` or `-t` flags, it will produce `index.js` and `test.js` files if they don't already exist. The index will be empty, and the test looks like this for a module called `my-funky-module`.

```js
var myFunkyModule = require('./')
var test = require('tape').test

test(/* description inserted here */, function(t) {
	
	t.end()
})
```

This also installs `tape@lastest` as a default devDependency and stores it in your `package.json`. To avoid the auto-installation (e.g. for offline use), you can use the `--offline` or `-o` flags.

Example:
 
```module-generator -t```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/module-generator/blob/master/LICENSE.md) for details.
